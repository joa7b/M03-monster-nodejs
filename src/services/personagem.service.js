const Personagens = require('../models/Personagem');

const findAllPersonagensService = async () => {
  const personagens = await Personagens.find();
  return personagens;
};

const findByIdPersonagensService = async (id) => {
  return await Personagens.find({_id:id});
};

const createPersonagemService = async (newPersonagem) => {
  const newId = (await Personagens.length) + 1;
  newPersonagem.id = newId;
  const personagem = new Personagens(newPersonagem);
  return await personagem.save();
};

const updatePersonagensService = async (id, personagemEdited) => {
  //personagemEdited['_id'] = id;
  return await Personagens.findOneAndUpdate({_id:id}, personagemEdited, {new: true});
};

const deletePersonagensService = async (id) => {
  return await Personagens.findOneAndDelete({_id:id});
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagensService,
  createPersonagemService,
  updatePersonagensService,
  deletePersonagensService,
};
