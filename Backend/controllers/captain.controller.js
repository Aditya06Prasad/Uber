const captainModel = require('../Models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blackListToken = require('../Models/blackListToken.model');
const blackListTokenModel = require('../Models/blackListToken.model');

module.exports.registerCaptain= async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;

        const isCaptainAlreadyExist = await captainModel.findOne({ email });

        if (isCaptainAlreadyExist) {
            return res.status(400).json({ message: 'Captain already exists' });
        }

        const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
    fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname
    },
    email,
    password: hashedPassword,
    vehicle: {
        colour: vehicle.colour,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
        }
    });


        const token = captain.generateAuthToken();
        res.status(201).json({ token, captain });
    }

    //Login
    module.exports.loginCaptain = async(req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }
        const { email, password} = req.body;
        const user = await captainModel.findOne({ email }).select('+password');
    
        if(!user){
            return res.status(401).json({ message: 'Invalid email or password' })
        }
    
        const isMatch = await captain.comparePassword(password);
    
        if(!isMatch){
            return res.status(401).json({ message: 'Invalid email or Passwprd' });
        }
    
        const token = captain.generateAuthToken();
    
        res.status(200).json({ token, user });
    }

    // User Profile
    module.exports.getCaptainProfile =  async (req, res) => {
        res.status(200).json(req.user);
    } 
    
    //logout User
    
    module.exports.logoutCaptain = async (req, res, next)=> {0
        res.clearCookie('token');
        const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
        
        await blackListTokenModel.create({token})
        res.status(200).json({ message: 'Logged Out' });
    }
    
 