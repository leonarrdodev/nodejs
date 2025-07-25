const express = require('express');
const path = require('node:path');

const app = express();

//Configs iniciais
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//Rotas
app.get('/', (req, res) => {
    res.render('index');
})










const PORT = 3000;

app.listen(PORT, () => console.log('Servidor iniciado!!'))