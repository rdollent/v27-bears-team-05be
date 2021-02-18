const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

/**
 * @desc Create a new user
 * @route POST /api/user/register
 */

const registerUser = async (req, res, next) => {
    const { username, email, password } = req.body;

    // checks to see if user exists with email or username
    const userExists = await User.findOne({ $or: [{ email }, { username }] });

    if (userExists) {
        res.status(400);
        return next(new Error("User already exists!"));
    }

    const user = await User.create({
        username,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        return next(new Error("Invalid user data!"));
    }
};

/**
 * @desc Auth user & get token
 * @route POST /api/user/login
 */

const loginUser = async (req, res, next) => {
    const { username, password } = req.body;

    // checks to see if username exists and if hashed passwords match
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        return next(new Error("Invalid username or password!"));
    }
};

module.exports = {
    registerUser,
    loginUser,
};
