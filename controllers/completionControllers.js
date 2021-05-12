const Completion = require("../models/completionModel");

/**
 * @desc Add date completion for habit
 * @route POST /api/habits/completion
 * @access Protected
 */

const addCompletion = async (req, res, next) => {
    try {
        const { habitId } = req.body;

        if (!habitId) {
            res.status(400);
            return next(new Error("Missing fields!"));
        }

        const completion = await Completion.findOneAndUpdate(
            { habit: habitId },
            { $addToSet: { dates: [ new Date().toLocaleDateString()]}},
            // new true will return document after update was applied
            // upsert will create object if it doesn't exist
            { new: true, upsert: true }
            );
        return res.json(completion);
        // await habit.save();
        // return res.json(habit);
    } catch (error) {
        res.status(500);
        return next(new Error("Invalid habit data!"));
    }
};


const deleteCompletion = async (req, res, next) => {
    try {
        const { habitId } = req.body;

        if (!habitId) {
            res.status(400);
            return next(new Error("Missing fields!"));
        }

        const completion = await Completion.findOneAndUpdate(
            { habit: habitId },
            { $pull: { dates: { $in: [ new Date().toLocaleDateString() ] } } },
            // new true will return document after update was applied
            // upsert will create object if it doesn't exist
            { new: true, upsert: true, multi: true }
            );
        return res.json(completion.dates);
        // await habit.save();
        // return res.json(habit);
    } catch (error) {
        res.status(500);
        return next(new Error("Invalid habit data!"));
    }
};

module.exports = {
    addCompletion,
    deleteCompletion
};
