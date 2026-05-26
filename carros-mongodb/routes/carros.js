const express = require('express');
const router  = express.Router();
const Carro   = require('../models/Carro');

// Middleware — protege rotas de gerência
function autenticado(req, res, next) {
  if (req.session && req.session.usuarioId) return next();
  res.redirect('/usuarios/login');
}

// GET /carros — lista pública
router.get('/', async (req, res) => {
  const carros = await Carro.find().sort({ marca: 1 }); // READ
  res.render('carros/lista', { carros, usuario: req.session.usuarioNome || null });
});

// GET /carros/gerenciar — painel protegido
router.get('/gerenciar', autenticado, async (req, res) => {
  const carros = await Carro.find().sort({ marca: 1 }); // READ
  res.render('carros/gerenciar', {
    carros,
    usuario: req.session.usuarioNome,
    mensagem: req.session.mensagem || null,
  });
  req.session.mensagem = null;
});

// POST /carros/novo — CREATE
router.post('/novo', autenticado, async (req, res) => {
  const { marca, modelo, ano, qtde_disponivel } = req.body;
  await Carro.create({ marca, modelo, ano, qtde_disponivel }); // CREATE
  req.session.mensagem = '✅ Carro cadastrado com sucesso!';
  res.redirect('/carros/gerenciar');
});

// POST /carros/atualizar/:id — UPDATE
router.post('/atualizar/:id', autenticado, async (req, res) => {
  const { marca, modelo, ano, qtde_disponivel } = req.body;
  await Carro.findByIdAndUpdate(req.params.id, { marca, modelo, ano, qtde_disponivel }); // UPDATE
  req.session.mensagem = '✅ Carro atualizado!';
  res.redirect('/carros/gerenciar');
});

// POST /carros/remover/:id — DELETE
router.post('/remover/:id', autenticado, async (req, res) => {
  await Carro.findByIdAndDelete(req.params.id); // DELETE
  req.session.mensagem = '🗑️ Carro removido.';
  res.redirect('/carros/gerenciar');
});

// POST /carros/vender/:id — UPDATE (decrementa quantidade)
router.post('/vender/:id', autenticado, async (req, res) => {
  const carro = await Carro.findById(req.params.id); // READ
  if (!carro) {
    req.session.mensagem = '❌ Carro não encontrado.';
    return res.redirect('/carros/gerenciar');
  }
  if (carro.qtde_disponivel > 0) {
    carro.qtde_disponivel -= 1;
    await carro.save(); // UPDATE
    if (carro.qtde_disponivel === 0)
      req.session.mensagem = '⚠️ Venda realizada! Carro ESGOTADO!';
    else
      req.session.mensagem = `✅ Venda registrada! Restam ${carro.qtde_disponivel} unidade(s).`;
  } else {
    req.session.mensagem = '⚠️ Este carro já está esgotado!';
  }
  res.redirect('/carros/gerenciar');
});

module.exports = router;
