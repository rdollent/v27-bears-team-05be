const mongoose = require("mongoose");

// Schema for a habit completion
let completionSchema = new mongoose.Schema({
    date: Date,
    isCompleted: Boolean,
    rating: Number,
    note: String,
    habit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Habit"
},
});



let Completion = mongoose.model("Completion", completionSchema);

module.exports = Completion;
