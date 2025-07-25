// Importa o módulo Express
const express = require('express');

// Importa o módulo 'path' do Node.js para manipular caminhos de diretórios
const path = require('node:path');

// Inicializa o aplicativo Express
const app = express();


// Configura o mecanismo de visualização como EJS (Embedded JavaScript)
app.set('view engine', 'ejs');

// Define o diretório onde estão os arquivos de visualização (views)
app.set('views', path.join(__dirname, 'views'));


// Define a pasta 'public' para servir arquivos estáticos (CSS, imagens, JS)
app.use(express.static('public'));

// Permite que o Express entenda os dados enviados por formulários HTML
app.use(express.urlencoded({ extended: true }));

// Cria um array para armazenar os e-mails cadastrados (em memória)
let emails = [];


// ------------------------- ROTAS ------------------------- //


// Rota GET para a página inicial (formulário de cadastro)
app.get('/', (req, res) => {
    res.render('index'); // Renderiza o arquivo 'views/index.ejs'
});


// Rota POST para cadastrar e-mail
app.post('/signup', (req, res) => {
    const { email } = req.body; // Extrai o campo 'email' do formulário

    if (email) {
        emails.push(email); // Adiciona o e-mail no array
        res.redirect('/success'); // Redireciona para a página de sucesso
    } else {
        res.redirect('/'); // Se vazio, volta para o formulário
    }
});


// Rota GET para exibir mensagem de sucesso após o cadastro
app.get('/success', (req, res) => {
    res.render('success'); // Renderiza 'views/success.ejs'
});


// Rota GET para exibir todos os e-mails cadastrados
app.get('/emails', (req, res) => {
    res.render('emails', { emails: emails }); // Envia os e-mails para a view
});


// Rota POST para deletar um e-mail
app.post('/emails/delete', (req, res) => {
    const { email } = req.body; // Pega o e-mail enviado pelo formulário

    // Filtra o array, removendo o e-mail informado
    emails = emails.filter(item => item !== email);

    // Redireciona de volta para a lista de e-mails
    res.redirect('/emails');
});


// Define a porta do servidor
const PORT = 3000;

// Inicia o servidor e exibe uma mensagem no console
app.listen(PORT, () => {
    console.log('Servidor iniciado!');
});
