const Playlists = require('../models/playlistModel')


function findIndexPlaylistById(id){
  return playlists.findIndex(p => p.id === +id)
}

module.exports = {
  getAll: (req, res) => {
    const allPlaylists = Playlists.getAll()
    res.status(200).json(allPlaylists)
  },

  getById: (req, res) => {
    const {id} = req.params
    const playlist = Playlists.getById(+id)
    if(playlist){
      res.status(200).json(playlist)
    } else{
      res.status(404).json({message: 'Playlist not found!'})
    }
  },

  create: (req, res) => {
    const {name, tags = [], songs = []} = req.body

    if(name === '' || typeof name !== 'string'){
      return res.status(400).json({message: 'Invalid format!'})
    }

    const newPlaylist = {
      id: Math.floor(Math.random() * 9999999),
      name, 
      tags,
      songs
    }

    Playlists.create(newPlaylist)
    res.status(201).json(newPlaylist)

  },

  update: (req, res) => {
    const { id } = req.params
    const newData = req.body

    if (
      ('name' in newData && (typeof newData.name !== 'string' || newData.name.trim() === '')) ||
      ('tags' in newData && !Array.isArray(newData.tags))
    ) {
      return res.status(400).json({ message: 'Invalid format!' })
    }

    const updatedPlaylist = Playlists.update(+id, newData)

    if (updatedPlaylist === null) {
      return res.status(404).json({ message: 'Playlist not found!' })
    }

    res.status(200).json(updatedPlaylist)
  },

  remove: (req, res) => {
    const {id} = req.params

    const removedPlaylist = Playlists.remove(+id)

    if(removedPlaylist){
      res.status(204).end()
    } else{
      res.status(404).json({ message: 'Playlist not found!' })
    }
  },

  addSong: (req, res) => {
    const { id } = req.params
    const { title, year, artist, album } = req.body

    if (
      !title || typeof title !== 'string' ||
      !artist || typeof artist !== 'string' ||
      !album || typeof album !== 'string' ||
      typeof year !== 'number' || !Number.isInteger(year)
    ) {
      return res.status(400).json({ message: 'Invalid format!' })
    }

    const newSong = { title, year, artist, album }
    const updatedPlaylist = Playlists.addSong(+id, newSong)

    if (!updatedPlaylist) {
      return res.status(404).json({ message: 'Playlist not found!' })
    }

    res.status(200).json(updatedPlaylist)
  },

  removeSong: (req, res) => {
    const { id, title } = req.params

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ message: 'Invalid song title' })
    }

    const updatedPlaylist = Playlists.removeSong(+id, title)

    if (!updatedPlaylist) {
      return res.status(404).json({ message: 'Playlist not found or song not found!' })
    }

    res.status(200).json(updatedPlaylist)
  }
}