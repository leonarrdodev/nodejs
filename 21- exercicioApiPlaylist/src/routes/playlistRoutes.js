const express = require('express')
const playlistsController = require('../controllers/playlistController')

const router = express.Router()


router.get('/playlists', playlistsController.getAll)

// GET playlist por id
router.get('/playlists/:id', playlistsController.getById)

// POST criar playlist
router.post('/playlists', playlistsController.create) //testar rota

// PUT atualizar playlist
router.put('/playlists/:id', playlistsController.update)

// DELETE remover playlist
router.delete('/playlists/:id', playlistsController.remove)

// POST adicionar música na playlist
router.post('/playlists/:id/songs', playlistsController.addSong)

// DELETE remover música da playlist (pelo título)
router.delete('/playlists/:id/songs/:title', playlistsController.removeSong)


module.exports = router