const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            /**
            Mongoose's findOneAndUpdate() long pre-dates the MongoDB driver's findOneAndUpdate() function, 
            so it uses the MongoDB driver's findAndModify() function instead. 
            You can opt in to using the MongoDB driver's findOneAndUpdate() function using the useFindAndModify global option.
             */
            useFindAndModify: false
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
