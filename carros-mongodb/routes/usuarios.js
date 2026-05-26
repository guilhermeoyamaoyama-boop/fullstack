const express  = require('express');
const router   = express.Router();
const Usuario  = require('../models/Usuario');

// GET /usuarios/cadastro
router.get('/cadastro', (req, res) => {
  res.render('usuarios/cadastro', { erro: null, sucesso: null });
});

// POST /usuarios/cadastro — CREATE
router.post('/cadastro', async (req, res) => {
  const { nome, login, senha } = req.body;
  try {
    const existe = await Usuario.findOne({ login }); // READ — verifica se login já existe
    if (existe)
      return res.render('usuarios/cadastro', { erro: 'Login já cadastrado.', sucesso: null });

    await Usuario.create({ nome, login, senha }); // CREATE
    res.render('usuarios/cadastro', { erro: null, sucesso: 'Usuário cadastrado com sucesso!' });
  } catch (err) {
    res.render('usuarios/cadastro', { erro: 'Erro: ' + err.message, sucesso: null });
  }
});

// GET /usuarios/login
router.get('/login', (req, res) => {
  res.render('usuarios/login', { erro: null });
});

// POST /usuarios/login — READ
router.post('/login', async (req, res) => {
  const { login, senha } = req.body;
  try {
    const usuario = await Usuario.findOne({ login }); // READ
    if (!usuario)
      return res.render('usuarios/login', { erro: 'Usuário não encontrado.' });

    const senhaOk = await usuario.compararSenha(senha);
    if (!senhaOk)
      return res.render('usuarios/login', { erro: 'Senha incorreta.' });

    req.session.usuarioId   = usuario._id;
    req.session.usuarioNome = usuario.nome;
    res.redirect('/carros/gerenciar');
  } catch (err) {
    res.render('usuarios/login', { erro: 'Erro: ' + err.message });
  }
});

// GET /usuarios/logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/usuarios/login');
});

module.exports = router;
