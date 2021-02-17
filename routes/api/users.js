const express = require('express')
const router = express.Router()


const User = require('../../models/userModel')

// @route GET /api/users/:id
// @desc Get a user by id
// @access Private?/Public?
router.get('/:id', async(req, res) => {
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


module.exports = router;