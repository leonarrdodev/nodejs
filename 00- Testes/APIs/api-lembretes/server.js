// Importa o express
const express = require('express');

// Cria a instância do aplicativo express
const app = express();

// Middleware para o Express entender JSON no corpo das requisições
app.use(express.json());

// =================================================================
// >> PASSO CRUCIAL <<
// 1. Importe o arquivo de rotas que você acabou de criar.
const lembreteRoutes = require('./routes/lembrete.routes.js');

// 2. "Use" as rotas. Diga para o Express que qualquer requisição
//    que comece com /api deve ser gerenciada pelo seu roteador.
app.use('/api', lembreteRoutes);
// =================================================================

// Define a porta do servidor
const PORT = 3000;

// Inicia o servidor e o faz "ouvir" na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});