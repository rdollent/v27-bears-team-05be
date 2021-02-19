const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const User = require('../../models/userModel')

/** NEEDS A AUTH MIDDLEWARE */
// @route GET /api/habits/:user_id
// @desc Create a habit for user
// @access Private
router.get('/:user_id',[
    check('name', 'Please include a name').exists(),
    check('frequency', 'Please include a frequency').exists(),
    check('')
], async(req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if(!user) {
            return res.status(404).json({ msg: 'User was not found!'})
        }
        
        res.json(user)
    } catch (error) {
        res.status(500).json({ msg: 'Server error!'})
    }
})

module.exports = router