const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUser,
    getOwnInfo,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getOwnInfo);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/:id").get(getUser);

module.exports = router;
