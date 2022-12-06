const mongoose = require('mongoose')

const MongoDBInit = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`mongo DB is running on ${conn.connection.host}`)
}


module.exports = MongoDBInit