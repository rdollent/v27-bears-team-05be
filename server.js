const express = require('express')
const cors = require('cors')
const colors = require('colors')
const connectDB = require('./config/db')

const app = express()

connectDB()

app.use(cors())

// Init middleware
app.use(express.json({ extended: false }))

// Test api route
app.get('/', (req, res) => res.send('API running'))

// Define routes
// app.use('/api/users', require('./routes/api/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`.green))