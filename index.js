const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

let personagens = require("./mocks/personagens");

app.get('/personagens', (req, res) => {
  res.send(personagens);
});

app.get('/personagens/:id', (req, res) => {
  let id = req.params.id;
  
  for (let n of personagens) {
    if (n.id == id) {
      res.send(n);
    }
  }

})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
