const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 80;

// Banco de dados
const db = new sqlite3.Database("./database.db");

// Criar tabela
db.run(`
CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    resumo TEXT,
    conteudo TEXT
)
`);

// Configurações
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/pages", express.static("pages"));

// Página inicial
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "projects.html"));
});

// Página do blog
app.get("/blog", (req, res) => {

    db.all("SELECT * FROM posts", [], (err, rows) => {

        if (err) {
            console.log(err);
            return res.send("Erro no banco");
        }

        res.render("blog", { posts: rows });
    });
});

// Página cadastro
app.get("/cadastrar_post", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "cadastrar_post.html"));
});

// Salvar post
app.post("/salvar_post", (req, res) => {

    const { titulo, resumo, conteudo } = req.body;

    db.run(
        "INSERT INTO posts (titulo, resumo, conteudo) VALUES (?, ?, ?)",
        [titulo, resumo, conteudo],
        (err) => {

            if (err) {
                console.log(err);
                return res.send("Erro ao salvar");
            }

            res.redirect("/blog");
        }
    );
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});