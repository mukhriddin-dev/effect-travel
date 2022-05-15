const mongoose = require('mongoose');

const connectDB = async = () => {
    try {
        const connections = await mongoose.connect(process.env.MONGO_URI, {
            userNewUrlParser: true
        })
        console.log(`MongoDb connected to : ${connections.connection.host}`);
    } catch (err) {
        console.log(err);
    }
}

mosdule.exports = connectDB;
