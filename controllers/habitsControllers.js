const Habit = require("../models/habitModel");

/**
 *
 * @desc Get all habits for user logged in
 * @route GET /api/habits/
 * @access Protected
 */

const getHabits = async (req, res, next) => {
    try {
        let { _id }  = req.user;
        const habits = await Habit.find({user: _id});
        // res.status(200);
        res.json(habits);
    } catch (err) {
        res.status(500);
        return next(new Error("Server error!"));
    }
};

/**
 * @desc Add habit for user logged in
 * @route POST /api/habits/add
 * @access Protected
 */

const createHabit = async (req, res, next) => {
    try {
        const { name, frequency, timeline, category, user, goal } = req.body;

        if (!name || !frequency || !timeline || !category || !goal) {
            res.status(400);
            return next(new Error("Missing fields!"));
        }

        const habit = new Habit({
            name: name,
            frequency: frequency,
            timeline: timeline,
            category: category,
            goal: goal,
            user: user
        });
        await habit.save();
        return res.json(habit);
    } catch (error) {
        res.status(500);
        return next(new Error("Invalid habit data!"));
    }
};

module.exports = {
    createHabit,
    getHabits,
};
