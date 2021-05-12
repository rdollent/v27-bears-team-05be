const Completion = require("../models/completionModel");

/**
 * @desc Add date completion for habit
 * @route POST /api/habits/completion
 * @access Protected
 */

const modifyCompletion = async (req, res, next) => {
    try {
        const { habitId } = req.body;
        /** add or delete routes */
        let path = req.path;
        let option = {};

        if (path === '/add') {
            option = { $addToSet: { dates: [ new Date().toLocaleDateString()]}};
        } 
        else if (path === '/delete') {
            option = { $pull: { dates: { $in: [ new Date().toLocaleDateString() ] } } };
        }

        if (!habitId) {
            res.status(400);
            return next(new Error("Missing fields!"));
        }

        const completion = await Completion.findOneAndUpdate(
            { habit: habitId },
            option,
            // new true will return document after update was applied
            // upsert will create object if it doesn't exist
            { new: true, upsert: true }
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
    modifyCompletion
};
