const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const { modifyCompletion } = require("../controllers/completionControllers");

// router.route("/").get(protect, createCompletion);
router.route("/add").post(protect, modifyCompletion);
router.route("/delete").post(protect, modifyCompletion);

module.exports = router;
