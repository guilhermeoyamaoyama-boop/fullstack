const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();

// Configurações
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Para ler dados do formulário
app.use(express.static('public')); // Para servir arquivos estáticos

// BD: Conexão e Criação da Tabela
const db = new sqlite3.Database('./blog.db');
db.run("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, resumo TEXT, conteudo TEXT)");

// Rota padrão (/) direcionando para projetos
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

// BD: Buscar todos os posts e exibir no blog.ejs
app.get('/blog', (req, res) => {
    db.all("SELECT * FROM posts", [], (err, rows) => {
        if (err) return console.error(err.message);
        res.render('blog', { posts: rows }); // Envia os posts para o EJS
    });
});

// Rota para o formulário
app.get('/cadastrar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastrar_post.html'));
});

// BD: Cadastrar um novo post
app.post('/salvar-post', (req, res) => {
    const { titulo, resumo, conteudo } = req.body;
    db.run("INSERT INTO posts (titulo, resumo, conteudo) VALUES (?, ?, ?)", [titulo, resumo, conteudo], (err) => {
        if (err) return console.error(err.message);
        res.redirect('/blog'); // Volta para o blog após salvar
    });
});

// Porta 80
app.listen(80, () => {
    console.log("Servidor rodando na porta 80");
});