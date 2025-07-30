// 1. Importa o Model para que o Controller possa interagir com a camada de dados.
const LembreteModel = require('../models/lembrete.model.js');

/**
 * Controller para Listar Todos os Lembretes
 */
function listarTodos(req, res) {
    try {
        // Delega a busca de todos os lembretes para o Model.
        const lembretes = LembreteModel.findAll();
        // Retorna a lista em formato JSON com status 200 (OK).
        res.status(200).json(lembretes);
    } catch (error) {
        console.error("Erro ao listar lembretes:", error);
        res.status(500).json({ message: "Ocorreu um erro interno no servidor." });
    }
}

/**
 * Controller para Buscar um Lembrete por ID
 */
function buscarPorId(req, res) {
    try {
        // Pega o ID dos parâmetros da rota (ex: /lembretes/1)
        const { id } = req.params;
        const lembrete = LembreteModel.findById(id);

        // Se o Model não retornar um lembrete, envia erro 404 (Não Encontrado).
        if (!lembrete) {
            return res.status(404).json({ message: 'Lembrete não encontrado.' });
        }

        // Se encontrou, retorna o lembrete com status 200.
        res.status(200).json(lembrete);
    } catch (error) {
        console.error("Erro ao buscar lembrete por ID:", error);
        res.status(500).json({ message: "Ocorreu um erro interno no servidor." });
    }
}

/**
 * Controller para Criar um Novo Lembrete
 */
function criarLembrete(req, res) {
    try {
        // Pega os dados do novo lembrete do corpo (body) da requisição.
        const novoLembreteDados = req.body;

        // Validação simples para garantir que o título foi enviado.
        if (!novoLembreteDados.titulo) {
            return res.status(400).json({ message: 'O campo "titulo" é obrigatório.' });
        }

        const lembreteCriado = LembreteModel.create(novoLembreteDados);
        // Retorna o objeto recém-criado com status 201 (Created).
        res.status(201).json(lembreteCriado);
    } catch (error) {
        console.error("Erro ao criar lembrete:", error);
        res.status(500).json({ message: "Ocorreu um erro interno no servidor." });
    }
}

/**
 * Controller para Atualizar um Lembrete
 */
function atualizarLembrete(req, res) {
    try {
        const { id } = req.params;
        const dadosParaAtualizar = req.body;
        const lembreteAtualizado = LembreteModel.update(id, dadosParaAtualizar);

        // Se o Model retornar null, significa que não encontrou o ID.
        if (!lembreteAtualizado) {
            return res.status(404).json({ message: 'Lembrete não encontrado para atualização.' });
        }

        res.status(200).json(lembreteAtualizado);
    } catch (error) {
        console.error("Erro ao atualizar lembrete:", error);
        res.status(500).json({ message: "Ocorreu um erro interno no servidor." });
    }
}

/**
 * Controller para Deletar um Lembrete
 */
function deletarLembrete(req, res) {
    try {
        const { id } = req.params;
        const sucesso = LembreteModel.remove(id);

        // Se o Model retornar false, o ID não foi encontrado.
        if (!sucesso) {
            return res.status(404).json({ message: 'Lembrete não encontrado para exclusão.' });
        }

        // Se a exclusão for bem-sucedida, retorna status 204 (No Content).
        res.status(204).send();
    } catch (error) {
        console.error("Erro ao deletar lembrete:", error);
        res.status(500).json({ message: "Ocorreu um erro interno no servidor." });
    }
}

// Exporta todas as funções para serem usadas nas rotas.
module.exports = {
    listarTodos,
    buscarPorId,
    criarLembrete,
    atualizarLembrete,
    deletarLembrete
};