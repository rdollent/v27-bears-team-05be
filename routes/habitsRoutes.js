const express = require("express");
const router = express.Router();

const { createHabit } = require("../controllers/habitsControllers");

router.route('/:user_id').post(createHabit);

module.exports = router;