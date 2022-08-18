const personagensService = require('../services/personagem.service');

const findAllPersonagensController = async (req, res) => {
  const allPersonagens = await personagensService.findAllPersonagensService();
  res.send(allPersonagens);
};

const findByIdPersonagensController = async (req, res) => {
  const idParam = req.params.id;

  if (!idParam) {
    return await res.status(400).send({ message: 'Id inválido.' });
  }

  const personagemSelecionado =
    await personagensService.findByIdPersonagensService(idParam);

  if (!personagemSelecionado) {
    return await res.status(404).send({ message: 'Personagem não encontrado.' });
  }

  res.send(personagemSelecionado);
};

const createPersonagensController = async (req, res) => {
  const personagem = req.body;

  if (
    !personagem ||
    !personagem.nome ||
    !personagem.personalidade ||
    !personagem.imagem ||
    !personagem.sobre
  ) {
    return await res.status(400).send({ message: 'Preencha todos os campos.' });
  }

  const novoPersonagem = await personagensService.createPersonagemService(personagem);
  res.send(novoPersonagem);
};

const updatePersonagensController = async(req, res) => {
  const idParam = req.params.id;

  if (!idParam) {
    return await res.status(400).send({ message: 'Id inválido.' });
  }

  const personagemEdit = req.body;

  if (
    !personagemEdit ||
    !personagemEdit.nome ||
    !personagemEdit.personalidade ||
    !personagemEdit.imagem ||
    !personagemEdit.sobre
  ) {
    return res.status(400).send({ message: 'Preencha todos os campos.' });
  }

  const updatePersonagem = await personagensService.updatePersonagensService(
    idParam,
    personagemEdit,
  );
  res.send(updatePersonagem);
};

const deletePersonagensController = async (req, res) => {
  const idParam = req.params.id;

  if (!idParam) {
    return await res.status(400).send({ message: 'Id inválido.' });
  }
  
  const personagemService = await personagensService.deletePersonagensService(idParam);
  res.send({ message: 'Personagem deletado.' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagensController,
  createPersonagensController,
  updatePersonagensController,
  deletePersonagensController,
};
