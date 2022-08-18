const mongoose = require('mongoose');

const PersonagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  personalidade: {
    type: String,
    require: true,
  },
  imagem: {
    type: String,
    require: true,
  },
  sobre: {
    type: String,
    require: true,
  },
});

const Personagem = mongoose.model('monster-api.personagens', PersonagemSchema);

module.exports = Personagem;
