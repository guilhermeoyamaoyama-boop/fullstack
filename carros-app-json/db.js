// db.js — banco de dados usando arquivo JSON local
const fs   = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'data', 'db.json');

function lerDB() {
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
}

function gravarDB(dados) {
  fs.writeFileSync(DB_PATH, JSON.stringify(dados, null, 2), 'utf-8');
}

// ── USUÁRIOS ──────────────────────────────────────────────

function criarUsuario(nome, login, senha) {
  const { v4: uuidv4 } = require('uuid');
  const bcrypt = require('bcryptjs');
  const db = lerDB();
  if (db.usuarios.find(u => u.login === login)) return { erro: 'Login já cadastrado.' };
  db.usuarios.push({ id: uuidv4(), nome, login, senha: bcrypt.hashSync(senha, 10) });
  gravarDB(db);
  return { sucesso: true };
}

function buscarUsuarioPorLogin(login) {
  return lerDB().usuarios.find(u => u.login === login) || null;
}

// ── CARROS ────────────────────────────────────────────────

function listarCarros() {
  return lerDB().carros;
}

function criarCarro(marca, modelo, ano, qtde_disponivel) {
  const { v4: uuidv4 } = require('uuid');
  const db = lerDB();
  const novo = { id: uuidv4(), marca, modelo, ano: Number(ano), qtde_disponivel: Number(qtde_disponivel) };
  db.carros.push(novo);
  gravarDB(db);
  return novo;
}

function atualizarCarro(id, marca, modelo, ano, qtde_disponivel) {
  const db = lerDB();
  const i = db.carros.findIndex(c => c.id === id);
  if (i === -1) return { erro: 'Carro não encontrado.' };
  db.carros[i] = { ...db.carros[i], marca, modelo, ano: Number(ano), qtde_disponivel: Number(qtde_disponivel) };
  gravarDB(db);
  return { sucesso: true };
}

function removerCarro(id) {
  const db = lerDB();
  db.carros = db.carros.filter(c => c.id !== id);
  gravarDB(db);
  return { sucesso: true };
}

function venderCarro(id) {
  const db = lerDB();
  const i = db.carros.findIndex(c => c.id === id);
  if (i === -1) return { erro: 'Carro não encontrado.' };
  const carro = db.carros[i];
  if (carro.qtde_disponivel <= 0) return { erro: 'Já esgotado.', esgotado: true };
  carro.qtde_disponivel -= 1;
  gravarDB(db);
  return { sucesso: true, esgotado: carro.qtde_disponivel === 0, qtde: carro.qtde_disponivel };
}

module.exports = { criarUsuario, buscarUsuarioPorLogin, listarCarros, criarCarro, atualizarCarro, removerCarro, venderCarro };
