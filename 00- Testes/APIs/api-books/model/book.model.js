let books = [
  {id: 1234, titulo: 'Harry Potter', ano: 1997, numeroPaginas: 984}
]

module.exports = {
  findAll: () => {
    return books
  },

  findById: (id) => {
    return books.find(book => book.id === +id)
  },

  create: (dadosLivro) => {
    const novoLivro = {
      id: Math.floor(Math.random() * 9999),
      titulo: dadosLivro.titulo,
      ano: dadosLivro.ano,
      numeroPaginas: dadosLivro.numeroPaginas
    }

    books.push(novoLivro)
    return novoLivro
  },

  update: (id, dadosParaAtualizar) => {
    const index = books.findIndex(book => book.id === +id)

    if(index !== -1){
      books[index] = {...books[index], ...dadosParaAtualizar}
      return books[index]
    }

    return null
  },

  remove: (id) => {
    const index = books.findIndex(book => book.id === +id)
    if(index !== -1){
      books.splice(index, 1)
      return true
    }
    return false
  }
}