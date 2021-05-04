const mongoose = require("mongoose");

// Schema for a habit
let habitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    frequency: {
        type: String,
        required: true,
    },
    timeline: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    goal: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

let Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
