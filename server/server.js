const path = require('path')
const express = require('express')

const server = express()

const usersRoutes = require('./routes/users')
const jobsRoutes = require('./routes/jobs')


// Middle ware
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

// Routes
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/jobs', jobsRoutes)

//Catch All
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})
