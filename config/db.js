const mongoose = require('mongoose')
const mongoURI = env.process.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected...')
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB