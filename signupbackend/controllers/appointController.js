const User = require('../models/SignUpModels');
const Appoint = require('../models/AppointmentModel');
const asyncHandler = require('express-async-handler');

// create Appoint,  PRIVATE
const setAppoint = asyncHandler(async (req, res) => {
    const appoints = await Appoint.create({
        times: req.body.times,
        name: req.body.name,
        treatment: req.body.treatment,
        price: req.body.price,
        user: req.user.id,
    });
    res.status(200).json(appoints);
});

// gets Goals, route is /api/goals PRIVATE
const getAppoint = asyncHandler(async (req, res) => {
    const appoints = await Appoint.find({ user: req.user.id });
    res.status(200).json(appoints);
});

module.exports = {
    setAppoint,
    getAppoint,
};
