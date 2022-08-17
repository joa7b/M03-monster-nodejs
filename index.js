const express = require('express');
const port = process.env.PORT||3000;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/personagem.route');

app.use(express.json());
app.use(cors());
app.use('/', routes);

// GET all
app.get('/personagens', (req, res) => {
  res.send(personagens);
});

// GET by id
app.get('/personagens/:id', (req, res) => {
  let id = req.params.id;

  for (let n of personagens) {
    if (n.id == id) {
      res.send(n);
    }
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
