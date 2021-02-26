const Habit = require("../models/habitModel");

/**
 *
 * @desc Get all habits for user logged in
 * @route GET /api/habits/
 * @access Protected
 */

const getHabits = async (req, res, next) => {
    try {
        const habits = await Habit.find({ user: req.user._id });
        res.status(200);
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
        const { name, frequency, timeline, category } = req.body;

        if (!name || !frequency || !timeline || !category) {
            res.status(400);
            return next(new Error("Missing fields!"));
        }

        const habit = new Habit({
            name,
            frequency,
            timeline,
            category,
            user: req.user._id,
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
