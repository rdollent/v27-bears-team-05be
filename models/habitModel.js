const mongoose = require("mongoose");

// Schema for a habit
let habitSchema = new mongoose.Schema({
    name: String,
    frequency: Number,
    timeline: Number,
    category: {
        title: String,
    },
    currentStreak: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }
});



let Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
