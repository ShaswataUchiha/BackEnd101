// Imports
require('dotenv').config()
const mongoose = require('mongoose')


const dBConnection = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {console.log("Database connection established")})
    .catch(() => {console.log("Error connecting to database")})
}

module.exports = dBConnection;