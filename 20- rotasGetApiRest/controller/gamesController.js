// Array estático contendo a lista de jogos com id, nome, gêneros e ano
const games = [
  { id: 1, name: 'Legend of Mana', genres: ['action-rpg'], year: 1999 },
  { id: 2, name: 'World of Warcraft', genres: ['mmorpg'], year: 2004 },
  { id: 3, name: 'Metal Gear Solid', genres: ['stealth', 'action-adventure'], year: 1998 },
  { id: 4, name: 'Sonic Adventure 2', genres: ['platformer'], year: 2001 },
  { id: 5, name: 'Age of Empires 2', genres: ['real-time-strategy'], year: 1999 }
]

// Exporta um objeto com os métodos que serão usados como controladores
module.exports = {
    // GET /games - retorna todos os jogos
    index: (req, res) => {
        res.json(games) // Envia a lista completa de jogos em formato JSON
    },

    // GET /games/:id - retorna um jogo específico pelo ID
    show: (req, res) => {
        const {id} = req.params // Extrai o id da URL
        const game = games.find(game => game.id === +id) // Procura o jogo com o ID correspondente (conversão com +id para garantir número)

        if(!game){
            // Se o jogo não for encontrado, responde com erro 404 e mensagem
            res.status(404)
            res.json({message: 'Game not found!'})
        } else{
            // Caso contrário, retorna o jogo encontrado
            res.json(game)
        }
    },

    // POST /games - cria um novo jogo
    save: (req, res) => {
        const {name, genres, year} = req.body // Extrai dados do corpo da requisição

        const newGame = {
            id: Math.floor(Math.random() * 9999999), // Gera um ID aleatório (não ideal para produção)
            name,
            genres,
            year
        }

        games.push(newGame) // Adiciona o novo jogo ao array
        res.status(201) // Define status HTTP para "Created"
        res.json(newGame) // Retorna o novo jogo criado
    },

    // PUT /games/:id - (em branco, deve ser implementado futuramente)

    // DELETE /games/:id - (em branco, deve ser implementado futuramente)

    // POST /games/:id/genres - adiciona um novo gênero ao jogo específico
    addGenre: (req, res) => {
        const {id} = req.params // Extrai o ID da URL
        const {genre} = req.body // Extrai o gênero do corpo da requisição

        // Procura o índice do jogo no array
        const gameIndex = games.findIndex(game => game.id === +id)

        if(gameIndex === -1){
            // Se não encontrar o jogo, retorna erro 404
            return res.status(404).json({message: 'Game not found!'})
        }

        // Validação: o gênero deve ser uma string e não pode já existir na lista do jogo
        if(typeof genre !== 'string' || games[gameIndex].genres.includes(genre)){
            return res.status(400).json({message: 'Invalid genre!'})
        }

        // Adiciona o novo gênero ao array de gêneros do jogo
        games[gameIndex].genres.push(genre)

        // Retorna o jogo atualizado
        res.json(games[gameIndex])
    }
}
