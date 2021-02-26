const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        const token = req.headers.authorization.split(" ")[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            return next();
        } catch (err) {
            res.status(401);
            return next(
                new Error(err.message || "Not authorized, token failed")
            );
        }
    }
    res.status(401);
    return next(new Error("Not authorized, no token"));
};

exports.protect = protect;
