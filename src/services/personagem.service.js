const Personagens = require('../models/Personagem')

const findAllPersonagensService = async () => {
  const personagens = await Personagens.find();
  return personagens;
};

const findByIdPersonagensService = (id) => {
  return personagens.find((personagem) => personagem.id == id);
};

const createPersonagemService = (newPersonagem) => {
  const newId = personagens.length + 1;
  newPersonagem.id = newId;
  personagens.push(newPersonagem);
  return newPersonagem;
};

const updatePersonagensService = (id, personagemEdited) => {
  personagemEdited['id'] = id;
  const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);
  personagens[personagemIndex] = personagemEdited;
  return personagemEdited
}

const deletePersonagensService = (id) => {
  const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);
  return personagens.splice(personagemIndex, 1);
}

module.exports = {
  findAllPersonagensService,
  findByIdPersonagensService,
  createPersonagemService,
  updatePersonagensService,
  deletePersonagensService
};
