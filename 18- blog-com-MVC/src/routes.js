const express = require('express')
const postsController = require('./controllers/postsController')
const adminController = require('./controllers/adminController')

const router = express.Router()
//Rotas do blog
router.get('/', postsController.index)
router.get('/posts/:id', postsController.show)

//rotas do admin
router.get('/admin', adminController.index)


module.exports = router