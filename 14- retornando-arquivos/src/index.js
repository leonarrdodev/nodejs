const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/teste', (req, res) => {
    res.sendFile(__dirname + '/views/teste.html')
})

app.listen(PORT, () => console.log('Servidor iniciado!'));