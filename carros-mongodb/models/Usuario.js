const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({
  nome:  { type: String, required: true },
  login: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
}, { timestamps: true });

// Criptografa a senha antes de salvar
usuarioSchema.pre('save', async function (next) {
  if (!this.isModified('senha')) return next();
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

// Método para comparar senha no login
usuarioSchema.methods.compararSenha = function (senhaTexto) {
  return bcrypt.compare(senhaTexto, this.senha);
};

module.exports = mongoose.model('Usuario', usuarioSchema);
