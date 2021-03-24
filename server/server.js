const path = require('path')
const express = require('express')

const server = express()

const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')
const jobsRoutes = require('./routes/jobs')


// Middle ware
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// Routes
server.use('/api/v1', authRoutes)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/jobs', jobsRoutes)

//Catch All
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server