const captainModel = require('../Models/captain.model');

module.exports.createCaptain = async ({
    fullname,
    email,
    password,
    vehicle
}) => {

    if (
        !fullname ||
        !fullname.firstname ||
        !email ||
        !password ||
        !vehicle ||
        !vehicle.colour ||
        !vehicle.plate ||
        !vehicle.capacity ||
        !vehicle.vehicleType
    ) {
        throw new Error('All fields are required');
    }

    const captain = await captainModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password,
        vehicle: {
            colour: vehicle.colour,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        }
    });

    return captain;
};
