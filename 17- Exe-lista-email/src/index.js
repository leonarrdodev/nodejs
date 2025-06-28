const express = require('express');
const path = require('node:path');

const app = express();

//Array que armazenara os emails 
const storedEmails = [];
let currentEmail

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/register', (req, res) => {
    currentEmail = req.body.email;
    storedEmails.push({email: currentEmail});
    console.log(storedEmails);
    
    res.redirect('/registerSuccess');

})

app.get('/registerSuccess', (req, res) => {
    res.render('register', {email: currentEmail});
})

app.get('/allEmails', (req, res) => {
    res.render('allEmails', {emails: storedEmails})
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor iniciado!');
})

