const mongoose = require('mongoose')

const MongoDB_URL = 'mongodb+srv://viviannnlyr23:wojiaoDAYE13@cluster0.mkyx4qn.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MongoDB_URL)

        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB