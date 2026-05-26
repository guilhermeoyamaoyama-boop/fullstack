const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcryptjs');
const db      = require('../db');

router.get('/cadastro', (req, res) => {
  res.render('usuarios/cadastro', { erro: null, sucesso: null });
});

router.post('/cadastro', (req, res) => {
  const { nome, login, senha } = req.body;
  if (!nome || !login || !senha)
    return res.render('usuarios/cadastro', { erro: 'Preencha todos os campos.', sucesso: null });

  const resultado = db.criarUsuario(nome, login, senha);
  if (resultado.erro)
    return res.render('usuarios/cadastro', { erro: resultado.erro, sucesso: null });

  res.render('usuarios/cadastro', { erro: null, sucesso: 'Usuário cadastrado com sucesso!' });
});

router.get('/login', (req, res) => {
  res.render('usuarios/login', { erro: null });
});

router.post('/login', (req, res) => {
  const { login, senha } = req.body;
  const usuario = db.buscarUsuarioPorLogin(login);
  if (!usuario)
    return res.render('usuarios/login', { erro: 'Usuário não encontrado.' });
  if (!bcrypt.compareSync(senha, usuario.senha))
    return res.render('usuarios/login', { erro: 'Senha incorreta.' });

  req.session.usuarioId   = usuario.id;
  req.session.usuarioNome = usuario.nome;
  res.redirect('/carros/gerenciar');
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/usuarios/login');
});

module.exports = router;
