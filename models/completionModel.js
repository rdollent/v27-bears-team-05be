const mongoose = require("mongoose");

// Schema for a habit completion
let completionSchema = new mongoose.Schema({
    dates: [Date],
    habit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Habit"
    }
});



let Completion = mongoose.model("Completion", completionSchema);

module.exports = Completion;
