const express = require('express')
const playlistsRouter = require('./routes/playlistRoutes')
const app = express()
app.use(express.json())

app.use('/', playlistsRouter)
module.exports = app