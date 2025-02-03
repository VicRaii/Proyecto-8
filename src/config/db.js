const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected to database')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message)
    console.log('Failed to connect to database')
  }
}

module.exports = { connectDB }
