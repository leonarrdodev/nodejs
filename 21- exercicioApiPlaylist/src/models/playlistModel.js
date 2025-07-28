const playlists = require('../data/playlist')

module.exports = {
  getAll: () => {
    return playlists
  },

  getById: (id) => {
    return playlists.find(playlist => playlist.id === +id) || null
  },

  create: (newPlaylist) => {
    playlists.push(newPlaylist)
    return newPlaylist
  },

  update: (id, newData) => {
    const playlist = playlists.find(playlist => playlist.id === +id)
    if (!playlist) return null

    if (newData.name) {
      playlist.name = newData.name
    }
    if (newData.tags) {
      playlist.tags = newData.tags
    }

    return playlist
  },

  remove: (id) => {
    const index = playlists.findIndex(playlist => playlist.id === +id)
    if (index === -1) return false
      playlists.splice(index, 1)
    return true
  },

  addSong: (playlistId, song) => {
    const playlist = playlists.find(p => p.id === +playlistId)
    if (!playlist) return null

    playlist.songs.push(song)
    return playlist
  },


  removeSong: (playlistId, songTitle) => {
    const playlist = playlists.find(p => p.id === +playlistId)
    if (!playlist) return null

    playlist.songs = playlist.songs.filter(song => song.title !== songTitle)
    return playlist
  }
}
