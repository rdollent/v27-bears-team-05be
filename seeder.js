const users = require("./data/users");
const habits = require("./data/habits");
const connectDB = require("./config/db");
require("dotenv").config();
require("colors");
const User = require("./models/userModel");
const Habit = require("./models/habitModel");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(
    "Warning!".yellow.inverse +
        " You are about to erase the data currently in the database and reset it to the seeder data." +
        " Enter Y in the prompt to continue. ".green.bold,
    (answer) => {
        if (answer !== "Y") {
            process.exit(0);
        }
        connectDB();
        importData();
    }
);

rl.on("close", () => {
    process.exit(0);
});

const importData = async () => {
    try {
        await Habit.deleteMany();
        await User.deleteMany();
        console.log("Data deleted...".yellow.bold);
        const createdUsers = await User.insertMany(users);
        const sampleHabits = habits.map((habit, index) => ({
            ...habit,
            user: createdUsers[index % createdUsers.length]._id,
        }));
        await Habit.insertMany(sampleHabits);
        console.log("Data imported!".green.bold);
        process.exit(0);
    } catch (err) {
        console.error(`${err.message}`.red.inverse);
        process.exit(1);
    }
};
