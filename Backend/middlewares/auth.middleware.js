const userModel = require('../Models/user.model');
const captainModel = require('../Models/captain.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListToken = require('../Models/blackListToken.model');
const blackListTokenModel = require('../Models/blackListToken.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        const isBlacklisted = await blackListTokenModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: 'Token is blacklisted' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded._id)

        req.user = user
        return next();
        
    } catch(err){
        return res.status(401).json({ message: 'Unauthorized User' });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    try {
        const token =
            req.cookies.token ||
            (req.headers.authorization &&
                req.headers.authorization.split(' ')[1]);

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const isBlacklisted = await blackListTokenModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const captain = await captainModel.findById(decoded._id);

        if (!captain) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = captain;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};
