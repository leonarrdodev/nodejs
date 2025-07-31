const booksModel = require('../model/book.model.js')

module.exports = {
  listarTodosLivros: (req, res) => {
    try {
      const livros = booksModel.findAll()
      res.status(200).json(livros)
    } catch(error){
      console.error('Erro ao listar livros', error)
      res.status(500).json({message: 'Ocorreu um erro interno no servidor'})
    }
  },

  buscarPorId: (req, res) => {
    try{
      const {id} = req.params
      const livro = booksModel.findById(id)
      if(!livro){ 
        return res.status(404).json({message: 'Livro não encontrado'})
      }
      res.status(200).json(livro)
    } catch(error){
        console.error("Erro ao buscar livro por ID:", error);
        res.status(500).json({ message: "Ocorreu um erro interno no servidor." });
    }
  }, 

  criarLivro: (req, res) => {
    try{
        const dadosNovoLivro = req.body

        if(!dadosNovoLivro.titulo){
          return res.status(400).json({message: 'O campo titulo é obrigatorio'})
        }

        const livroCriado = booksModel.create(dadosNovoLivro)
        res.status(200).json(livroCriado)
    } catch(error){
        console.error("Erro ao criar livro:", error);
        res.status(500).json({ message: "Ocorreu um erro interno no servidor." });
    }
  },
  atualizarLivro: (req, res) => {
    try{
      const {id} = req.params
      const dadosAtualizar = req.body
      const livroAtualizado = booksModel.update(id, dadosAtualizar)

      if(!livroAtualizado){
        return res.status(404).json({message: 'Livro não encontrado'})
      }

      res.status(200).json(livroAtualizado)
    } catch(error){
      console.error('Erro ao atualizar livro', error)
      res.status(500).json({message: 'Ocorreu um erro interno no servidor'})
    }
  },

  removerLivro: (req, res) => {
    try{ 
      const {id} = req.params
      const sucesso = booksModel.remove(id)

      if(!sucesso){
        return res.status(404).json({message: 'Livro não encontrado'})
      }

      res.status(204).send()
    } catch(error){
      console.error("Erro ao deletar livro:", error);
        res.status(500).json({ message: "Ocorreu um erro interno no servidor." });
    }
  }
}


