const express   = require('express');
const mongoose  = require('mongoose');
const session   = require('express-session');
const path      = require('path');

const app = express();

// ── Conexão MongoDB ────────────────────────────────────────
// Troque a URI abaixo pela sua string do MongoDB Atlas
const MONGO_URI = 'mongodb+srv://SEUSUSUARIO:SUASENHA@cluster0.xxxxx.mongodb.net/carrosdb';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado com sucesso!'))
  .catch(err => console.error('❌ Erro ao conectar:', err));

// ── Configurações ──────────────────────────────────────────
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

// ── Rotas ──────────────────────────────────────────────────
app.get('/', (req, res) => res.redirect('/carros'));
app.use('/usuarios', require('./routes/usuarios'));
app.use('/carros',   require('./routes/carros'));

// ── Porta 80 ───────────────────────────────────────────────
app.listen(80, () => {
  console.log('🚀 Servidor rodando em http://localhost');
});
