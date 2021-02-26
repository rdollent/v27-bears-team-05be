const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const { createHabit, getHabits } = require("../controllers/habitsControllers");

router.route("/").get(protect, getHabits);
router.route("/add").post(protect, createHabit);

module.exports = router;
