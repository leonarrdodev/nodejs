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
        // Envia a lista completa de jogos em formato JSON
        res.json(games) 
    },

    // GET /games/:id - retorna um jogo específico pelo ID
    show: (req, res) => {
        // Extrai o id da URL
        const {id} = req.params 
        // Procura o jogo com o ID correspondente (conversão com +id para garantir que a comparação seja entre números)
        const game = games.find(game => game.id === +id) 

        if(!game){
            // Se o jogo não for encontrado, responde com erro 404 (Not Found) e uma mensagem
            return res.status(404).json({message: 'Game not found!'})
        } else{
            // Caso contrário, retorna o jogo encontrado
            return res.json(game)
        }
    },

    // POST /games - cria um novo jogo
    save: (req, res) => {
        // Extrai dados do corpo da requisição (body)
        const {name, genres, year} = req.body 

        const newGame = {
            // Gera um ID aleatório (nota: em uma aplicação real, usar um método mais robusto como UUID)
            id: Math.floor(Math.random() * 9999999), 
            name,
            genres,
            year
        }

        // Adiciona o novo jogo ao array 'games'
        games.push(newGame) 
        // Retorna o novo jogo criado com status 201 (Created)
        return res.status(201).json(newGame) 
    },

    // PUT /games/:id - atualiza um jogo existente pelo ID
    update: (req, res) => {
        // Extrai o ID do jogo da URL e os dados para atualizar do corpo da requisição
        const {id} = req.params
        const {name, year} = req.body

        // Encontra o índice (posição) do jogo no array
        const gameIndex = games.findIndex(game => game.id === +id)

        // Se o findIndex não encontrar o jogo, ele retorna -1. Neste caso, retornamos um erro 404
        if(gameIndex === -1){
            return res.status(404).json({message: 'Game not found!'})
        }

        // Atualiza o nome do jogo apenas se um novo nome for fornecido no corpo da requisição
        if(typeof name === 'string'){
            games[gameIndex].name = name
        }

        // Atualiza o ano do jogo apenas se um novo ano for fornecido no corpo da requisição
        if(typeof year === 'number'){
            games[gameIndex].year = year
        }

        // Retorna o objeto do jogo com os dados atualizados
        return res.json(games[gameIndex])
    },

    // DELETE /games/:id - deleta um jogo específico pelo ID
    delete: (req, res) => {
        // Extrai o ID da URL
        const {id} = req.params
        // Encontra o índice do jogo que será deletado
        const gameIndex = games.findIndex(game => game.id === +id)

        // Se o jogo não for encontrado, retorna erro 404
        if(gameIndex === -1){
            return res.status(404).json({message: 'Game not found!'})
        }

        // Usa o método splice para remover o item do array
        // O primeiro parâmetro é o índice do item, e o segundo é a quantidade de itens a remover
        games.splice(gameIndex, 1)

        // Retorna uma resposta com status 204 (No Content), indicando que a operação foi bem-sucedida, mas não há conteúdo para retornar
        return res.status(204).end()
    },

    // POST /games/:id/genres - adiciona um novo gênero a um jogo específico
    addGenre: (req, res) => {
        // Extrai o ID do jogo da URL e o gênero a ser adicionado do corpo da requisição
        const {id} = req.params
        const {genre} = req.body

        // Procura o índice do jogo no array
        const gameIndex = games.findIndex(game => game.id === +id)

        // Se não encontrar o jogo, retorna erro 404
        if(gameIndex === -1){
            return res.status(404).json({message: 'Game not found!'})
        }

        // Validação: o gênero deve ser uma string e não pode já existir na lista do jogo
        if(typeof genre !== 'string' || games[gameIndex].genres.includes(genre)){
            return res.status(400).json({message: 'Invalid or existing genre!'})
        }

        // Adiciona o novo gênero ao array de gêneros do jogo
        games[gameIndex].genres.push(genre)

        // Retorna o jogo atualizado
        return res.json(games[gameIndex])
    },

    //DELETE /games/:id/genres/:name - deleta um gênero de um jogo específico
    deleteGenre: (req, res) => {
        // Extrai o ID do jogo e o nome do gênero da URL
        const {id, name} = req.params
        // Encontra o índice do jogo no array
        const gameIndex = games.findIndex(game => game.id === +id)

        // Se o jogo não for encontrado, retorna erro 404
        if(gameIndex === -1){
            return res.status(404).json({message: 'Game not found!'})
        }

        // Valida se o gênero a ser removido de fato existe na lista de gêneros do jogo
        if(!games[gameIndex].genres.includes(name)){
            return res.status(400).json({message: 'Genre not found in this game!'})
        }

        // Cria um novo array de gêneros, filtrando e mantendo apenas os que são diferentes do gênero a ser removido
        games[gameIndex].genres = games[gameIndex].genres.filter(genre => genre !== name)
        
        // Retorna o jogo atualizado com status 200 (OK)
        return res.status(200).json(games[gameIndex])
    }
}