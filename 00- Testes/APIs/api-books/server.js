const express = require('express')
const app = express()

app.use(express.json())

const bookRoutes = require('./routes/book.routes.js')

app.use('/', bookRoutes)

const PORT = 3000

app.listen(PORT, () => console.log('Servidor iniciado!'))