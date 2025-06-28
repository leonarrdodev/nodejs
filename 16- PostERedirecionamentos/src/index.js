// Importa o framework Express, que facilita a criação de servidores e rotas
const express = require('express');

// Importa o módulo path do Node.js para lidar com caminhos de arquivos de forma segura
const path = require('node:path');

// Cria uma instância da aplicação Express
const app = express();

// Array em memória para armazenar os usuários cadastrados
// OBS: ao reiniciar o servidor, os dados serão perdidos
const storedUsers = [];

// Configura o EJS como a engine de visualização (template engine)
// Com isso, você poderá renderizar arquivos .ejs em rotas usando res.render()
app.set('view engine', 'ejs');

// Define o caminho absoluto da pasta onde ficam os arquivos .ejs (as views)
// __dirname representa o diretório atual deste arquivo (server.js, por exemplo)
app.set('views', path.join(__dirname, 'views'));

// Middleware para analisar dados enviados por formulários (body-parser integrado ao Express)
// Isso permite acessar req.body.username, por exemplo
app.use(express.urlencoded({ extended: true }));

// Rota principal "/" (homepage)
// Quando o usuário acessar a raiz do site, será renderizado o arquivo views/index.ejs
app.get('/', (req, res) => {
    // Variáveis que serão passadas para o template EJS
    const title = 'Homepage';
    const message = 'mensagem dinamica com EJS';

    // Renderiza a view 'index.ejs', passando os dados como objeto
    // No template, você pode acessar <%= title %> e <%= message %>
    res.render('index', { title, message });
});

// Rota que exibe o formulário de cadastro de usuário
// Será renderizado o arquivo views/form.ejs
app.get('/formulario', (req, res) => {
    res.render('form');
});

// Rota que processa o envio do formulário (método POST)
// Quando o usuário enviar o formulário, os dados serão capturados aqui
app.post('/register', (req, res) => {
    // Captura os dados enviados pelo formulário via body
    const username = req.body.username;
    const password = req.body.password;

    // Armazena o novo usuário no array
    storedUsers.push({ username, password });

    // Redireciona para a página de usuários após o cadastro
    res.redirect('/usuarios');
});

// Rota que lista todos os usuários cadastrados
// Será renderizado o arquivo views/users.ejs com a lista de usuários
app.get('/usuarios', (req, res) => {
    // Renderiza a view e passa o array de usuários
    res.render('users', { users: storedUsers });
});

// Define a porta onde o servidor vai escutar as requisições
const PORT = 3000;

// Inicia o servidor e exibe uma mensagem no terminal
app.listen(PORT, () => {
    console.log('Servidor iniciado!');
});
