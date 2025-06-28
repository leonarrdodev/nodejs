const express = require('express');
const path = require('node:path');

const app = express();

//Array que armazenara os emails 
const storedEmails = [];


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/register', (req, res) => {
    const email = req.body.email;

    storedEmails.push(email);
    res.redirect('/registerSuccess');

})

app.get('/registerSuccess', (req, res) => {
    res.render('register', {emails: storedEmails});
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor iniciado!');
})

