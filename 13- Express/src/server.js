    
    // Importa o módulo Express, que facilita a criação de servidores web com Node.js
    const express = require('express');

    // Cria uma instância da aplicação Express, que será o nosso servidor
    const server = express();

    // Define uma rota GET para o caminho "/" (página inicial)
    // Quando alguém acessar http://localhost:3000/, esta função será executada
    server.get('/', (req, res) => {
        // Envia uma resposta de texto simples para o navegador
        res.send('Servidor Express funcionando\nVocê está na pagina inicial');
    });

    // Define uma rota GET para o caminho "/artigos"
    // Quando alguém acessar http://localhost:3000/artigos, esta função será executada
    server.get('/artigos', (req, res) => {
        // Envia uma resposta de texto informando que está na página de artigos
        res.send('Você está na pagina de artigos');
    });

    // Define a porta onde o servidor vai escutar as requisições HTTP
    const PORT = 3000;

    // Inicia o servidor na porta definida
    // Quando o servidor for iniciado com sucesso, exibe uma mensagem no terminal
    server.listen(PORT, () => {
        console.log(`Servidor Express iniciando em http://localhost:${PORT}`);
    });
