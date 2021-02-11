const mongoose = require('mongoose');

// Schema for a user
let userSchema = new mongoose.Schema({
    username: { type: String, required: [true, 'username required'] },
    password: { type: String, required: [true, 'password required'] },
    email: { type: String, required: [true, 'email required'] },
    habits: {
        name: String,
        frequency: Number,
        timeline: Number,
        category: {
            title: String
        },
        currentStreak: Number,
        completions: {
            date: Date,
            isCompleted: Boolean,
            rating: Number,
            note: String
        }
    }

})
;

let User = mongoose.model('User', userSchema);

module.exports = User;