const express = require('express');
const router  = express.Router();
const db      = require('../db');

function autenticado(req, res, next) {
  if (req.session && req.session.usuarioId) return next();
  res.redirect('/usuarios/login');
}

router.get('/', (req, res) => {
  res.render('carros/lista', {
    carros: db.listarCarros(),
    usuario: req.session.usuarioNome || null,
  });
});

router.get('/gerenciar', autenticado, (req, res) => {
  res.render('carros/gerenciar', {
    carros: db.listarCarros(),
    usuario: req.session.usuarioNome,
    mensagem: req.session.mensagem || null,
  });
  req.session.mensagem = null;
});

router.post('/novo', autenticado, (req, res) => {
  const { marca, modelo, ano, qtde_disponivel } = req.body;
  db.criarCarro(marca, modelo, ano, qtde_disponivel);
  req.session.mensagem = '✅ Carro cadastrado com sucesso!';
  res.redirect('/carros/gerenciar');
});

router.post('/atualizar/:id', autenticado, (req, res) => {
  const { marca, modelo, ano, qtde_disponivel } = req.body;
  const r = db.atualizarCarro(req.params.id, marca, modelo, ano, qtde_disponivel);
  req.session.mensagem = r.erro ? '❌ ' + r.erro : '✅ Carro atualizado!';
  res.redirect('/carros/gerenciar');
});

router.post('/remover/:id', autenticado, (req, res) => {
  db.removerCarro(req.params.id);
  req.session.mensagem = '🗑️ Carro removido.';
  res.redirect('/carros/gerenciar');
});

router.post('/vender/:id', autenticado, (req, res) => {
  const r = db.venderCarro(req.params.id);
  if (r.esgotado && r.erro)   req.session.mensagem = '⚠️ Este carro já está esgotado!';
  else if (r.erro)            req.session.mensagem = '❌ ' + r.erro;
  else if (r.esgotado)        req.session.mensagem = '⚠️ Venda realizada! Carro ESGOTADO!';
  else                        req.session.mensagem = `✅ Venda registrada! Restam ${r.qtde} unidade(s).`;
  res.redirect('/carros/gerenciar');
});

module.exports = router;
