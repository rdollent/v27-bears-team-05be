const User = require('../models/userModel')
const Habit = require('../models/habitModel')

const createHabit = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.user_id)

        if(!user) {
            res.status(400);
            return next(new Error("User not found!"));
        }

        const {
            name,
            frequency,
            timeline,
            categoryTitle,
        } = req.body;

        const habitFields = {}

        if(name) habitFields.name = name
        if(frequency) habitFields.frequency = frequency
        if(timeline) habitFields.category.title = categoryTitle
        if(categoryTitle) habitFields.category.title = categoryTitle
        habitFields.currentStreak = 0
        habitFields.user = user

        let habit = new Habit(habitFields)
        await habit.save()
        return res.json(habit)
    } catch (error) {
        res.status(500)
        return next(new Error("Invalid habit data!"));
    }
}

module.exports = {
    createHabit
}