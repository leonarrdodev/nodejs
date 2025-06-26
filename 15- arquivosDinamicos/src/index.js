// Importa o framework Express, que facilita a criação de servidores e rotas
const express = require('express');

// Importa o módulo path do Node.js para lidar com caminhos de arquivos de forma segura
const path = require('node:path');

// Cria uma instância da aplicação Express
const app = express();

// Configura o EJS como a engine de visualização (template engine)
// Com isso, você poderá renderizar arquivos .ejs em rotas usando res.render()
app.set('view engine', 'ejs');

// Define o caminho absoluto da pasta onde ficam os arquivos .ejs (as views)
// __dirname é o diretório atual do arquivo
app.set('views', path.join(__dirname, 'views'));

// Rota principal "/"
// Quando o usuário acessar a página inicial, será renderizado o arquivo views/index.ejs
app.get('/', (req, res) => {
    // Variáveis que serão passadas para o template EJS
    const title = 'Homepage';
    const message = 'mensagem dinamica com EJS';

    // Renderiza a view 'index.ejs', passando os dados como objeto
    // No template, você pode acessar <%= title %> e <%= message %>
    res.render('index', { title, message });
});

// Define a porta onde o servidor vai escutar as requisições
const PORT = 3000;

// Inicia o servidor e exibe uma mensagem no terminal
app.listen(PORT, () => {
    console.log('Servidor iniciado!');
});
