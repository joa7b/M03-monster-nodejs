const personagensService = require('../services/personagem.service');

const findAllPersonagensController = async (req, res) => {
  const allPersonagens = await personagensService.findAllPersonagensService();
  res.send(allPersonagens);
};

const findByIdPersonagensController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({ message: 'Id inválido.' });
  }

  const personagemSelecionado =
    personagensService.findByIdPersonagensService(idParam);

  if (!personagemSelecionado) {
    return res.status(404).send({ message: 'Personagem não encontrado.' });
  }

  res.send(personagemSelecionado);
};

const createPersonagensController = (req, res) => {
  const personagem = req.body;

  if (
    !personagem ||
    !personagem.nome ||
    !personagem.personalidade ||
    !personagem.imagem ||
    !personagem.sobre
  ) {
    return res.status(400).send({ message: 'Preencha todos os campos.' });
  }

  const novoPersonagem = personagensService.createPersonagemService(personagem);
  res.send(novoPersonagem);
};

const updatePersonagensController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({ message: 'Id inválido.' });
  }

  const personagemEdit = req.body;

  if (
    !personagem ||
    !personagem.nome ||
    !personagem.personalidade ||
    !personagem.imagem ||
    !personagem.sobre
  ) {
    return res.status(400).send({ message: 'Preencha todos os campos.' });
  }

  const updatePersonagem = personagensService.updatePersonagensService(
    idParam,
    personagemEdit,
  );
  res.send(updatePersonagem);
};

const deletePersonagensController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({ message: 'Id inválido.' });
  }
  
  personagensService.deletePersonagensService(idParam);
  res.send({ message: 'Personagem deletado.' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagensController,
  createPersonagensController,
  updatePersonagensController,
  deletePersonagensController,
};
