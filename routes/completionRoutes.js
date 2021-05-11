const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const { addCompletion, deleteCompletion } = require("../controllers/completionControllers");

// router.route("/").get(protect, createCompletion);
router.route("/add").post(protect, addCompletion);
router.route("/delete").post(protect, deleteCompletion);

module.exports = router;
