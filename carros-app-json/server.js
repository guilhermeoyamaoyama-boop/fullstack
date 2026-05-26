const express = require('express');
const session = require('express-session');
const path    = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'segredo_super_secreto',
  resave: false,
  saveUninitialized: false,
}));

// Rota raiz vai direto para lista de carros
app.get('/', (req, res) => res.redirect('/carros'));

app.use('/usuarios', require('./routes/usuarios'));
app.use('/carros',   require('./routes/carros'));

app.listen(80, () => {
  console.log('✅ Servidor rodando em http://localhost');
  console.log('📁 Banco de dados: data/db.json');
});
