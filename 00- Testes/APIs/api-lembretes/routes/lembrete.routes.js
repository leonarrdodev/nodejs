// 1. Importa o Express para criar o roteador.
const express = require('express');
// 2. Cria o objeto do roteador que agrupará nossas rotas.
const router = express.Router();

// 3. Importa o controller que contém a lógica para cada rota.
const lembreteController = require('../controllers/lembrete.controller.js');

// 4. Define as rotas e as associa a uma função do controller.

// Rota para LISTAR TODOS os lembretes (GET /api/lembretes)
// Rota para CRIAR UM NOVO lembrete (POST /api/lembretes)
router.route('/lembretes')
    .get(lembreteController.listarTodos)
    .post(lembreteController.criarLembrete);

// Rota para BUSCAR UM ÚNICO lembrete por ID (GET /api/lembretes/:id)
// Rota para ATUALIZAR UM lembrete por ID (PUT /api/lembretes/:id)
// Rota para DELETAR UM lembrete por ID (DELETE /api/lembretes/:id)
router.route('/lembretes/:id')
    .get(lembreteController.buscarPorId)
    .put(lembreteController.atualizarLembrete)
    .delete(lembreteController.deletarLembrete);


// 5. Exporta o roteador configurado para ser usado no arquivo principal do servidor.
module.exports = router;