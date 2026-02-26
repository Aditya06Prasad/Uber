const axios = require("axios");
const captainModel = require("../models/captain.model");

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  if (!apiKey) {
    throw new Error("Google Maps API key is not configured");
  }
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    console.log("Google response:", response.data);
    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;
  if (!apiKey) {
    throw new Error("Google Maps API key is not configured");
  }

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }

      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to fetch distance and time");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("query is required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;
  if (!apiKey) {
    throw new Error("Google Maps API key is not configured");
  }

  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    console.log("Places API response:", response.data);

    const status = response.data && response.data.status;
    if (status === "OK") {
      return response.data.predictions
        .map((prediction) => prediction.description)
        .filter((value) => value);
    }

    const errorMessage = response.data && response.data.error_message;
    const msg = errorMessage ? `Places API error: ${errorMessage}` : `Places API status: ${status}`;
    throw new Error(msg);
  } catch (err) {
    console.error("Autocomplete error:", err.response ? err.response.data : err.message);
    throw err;
  }
};

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
  const captains = await captainModel.find({
    "location.ltd": { $ne: null },
    "location.lng": { $ne: null },
  });

  // Use Haversine distance because captain location is stored as plain numbers, not GeoJSON.
  const toRadians = (value) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;

  return captains.filter((captain) => {
    const captainLat = captain.location?.ltd;
    const captainLng = captain.location?.lng;

    if (typeof captainLat !== "number" || typeof captainLng !== "number") {
      return false;
    }

    const dLat = toRadians(captainLat - ltd);
    const dLng = toRadians(captainLng - lng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(ltd)) *
        Math.cos(toRadians(captainLat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadiusKm * c;

    return distance <= radius;
  });
};
