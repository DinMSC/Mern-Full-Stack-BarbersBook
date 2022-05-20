const User = require('../models/SignUpModels');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

// logika ruta
const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashPass) {
        if (err) {
            res.json({
                error: err,
            });
        }
        const user = User.create({
            fullName: req.body.fullName,
            phone: req.body.phone,
            email: req.body.email,
            password: hashPass,
        });
        res.json({
            _id: user.id,
            token: generateToken(user._id),
            message: 'User Added !',
        });
    });
};

const login = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    const user = User.findOne({
        $or: [{ email: username }, { phone: username }],
    }).then((user) => {
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {
                    res.json({
                        error: err,
                    });
                }
                if (result) {
                    res.json({
                        _id: user.id,
                        message: 'Loggin Sucesessful',
                        token: generateToken(user._id),
                    });
                } else {
                    res.json({
                        message: 'Password does not match!',
                    });
                }
            });
        } else {
            res.json({
                message: 'No User Found!',
            });
        }
    });
};

const getMyInfo = asyncHandler(async (req, res) => {
    const { _id, fullName } = await User.findById(req.user.id);

    res.status(200).json({
        id: _id,
    });
});

// generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '2h',
    });
};

module.exports = {
    register,
    login,
    getMyInfo,
};
