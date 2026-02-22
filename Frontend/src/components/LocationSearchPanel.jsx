import React from "react";

const LocationSearchPanel = ({ setPanel, setVehiclePanel }) => {
  const locations = [
    "India Gate Circle, Rajpath Road, Near Kartavya Path, New Delhi, Delhi 110001",
    "Gateway of India Plaza, Apollo Bandar, Colaba Causeway, Mumbai, Maharashtra 400001",
    "Charminar Main Road, Ghansi Bazaar, Near Laad Bazaar Market, Hyderabad, Telangana 500002",
    "Howrah Bridge Approach Road, Near Howrah Railway Station, Kolkata, West Bengal 700001"
  ];

  return (
    <div className="px-5 pb-5 overflow-y-auto">
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            setVehiclePanel(true);
            setPanel(false);
          }}
          className="flex gap-3 border border-gray-200 active:border-black p-3 rounded-xl my-2 items-start cursor-pointer"
        >
          <h2 className="bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full shrink-0">
            <i className="ri-map-pin-user-line"></i>
          </h2>
          <h4 className="font-medium text-sm leading-tight">
            {location}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;