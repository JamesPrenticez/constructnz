const path = require('path')
const express = require('express')
const fileUpload = require('express-fileupload');
const cors = require('cors')

const server = express()

const jobsRoutes = require('./routes/jobs')
const productsRoutes = require('./routes/products')
const selectionsRoutes = require('./routes/selections')
const catchAll = require('./routes/catchAll')

// Middle ware
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors())
server.use(fileUpload())

module.exports = server

// Routes
server.use('/', jobsRoutes)
server.use('/', catchAll)