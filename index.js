// Imports
require('dotenv').config()
const express = require('express')

//Set Express
const app = express()

// Set up port
const port = process.env.PORT || 3000

// Middleware for parsing JSON request bodies
app.use(express.json())

// Imports Routes
app.use('/api/v1', require('./routes/blogs.route'))

// stating server
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})

const database = require('./config/DataBaseConnection')
database();

app.get('/', (req, res) => {
    res.send(`<h1>This is home page for Blog App</h1>`)
})