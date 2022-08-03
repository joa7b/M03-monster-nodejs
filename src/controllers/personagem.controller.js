const personagensService = require('../services/personagem.service');

const findAllPersonagensController = (req, res) => {
  const allPersonagens = personagensService.findAllPersonagensService();
  res.send(allPersonagens);
};

const findByIdPersonagensController = (req, res) => {
  const idParam = req.params.id;
  const personagemSelecionado =
    personagensService.findByIdPersonagensService(idParam);
  res.send(personagemSelecionado);
};

const createPersonagensController = (req, res) => {
    const personagem = req.body;
    const novoPersonagem = personagensService.createPersonagemService(personagem);
    res.send(novoPersonagem);
};

const updatePersonagensController = (req, res) => {
    const idParam = +req.params.id;
    const personagemEdit = req.body;
    const updatePersonagem = personagensService.updatePersonagensService(idParam, personagemEdit);
    res.send(updatePersonagem);
};

const deletePersonagensController = (req, res) => {};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagensController,
  createPersonagensController,
  updatePersonagensController,
  deletePersonagensController
};
