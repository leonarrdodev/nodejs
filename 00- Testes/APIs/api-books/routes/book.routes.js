const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book.controller.js')


router.get('/books', bookController.listarTodosLivros)
router.get('/books/:id', bookController.buscarPorId)
router.post('/books', bookController.criarLivro)
router.put('/books/:id', bookController.atualizarLivro)
router.delete('/books/:id', bookController.removerLivro)

module.exports = router