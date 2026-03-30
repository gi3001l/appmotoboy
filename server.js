const express = require(‘express’);
const app = express();
app.use(express.json());

let motoboys = [];
let pedidos = [];

// Rota teste
app.get(‘/‘, (req, res) => {
  res.send(‘Servidor rodando 🚀’);
});

// Listar motoboys
app.get(‘/motoboys’, (req, res) => {
  res.send(motoboys);
});

// Atualizar localização
app.post(‘/motoboy/localizacao’, (req, res) => {
  const { id, lat, lng } = req.body;

  let motoboy = motoboys.find(m => m.id === id);

  if (!motoboy) {
    motoboy = { id, nome: “Motoboy “ + id };
    motoboys.push(motoboy);
  }

  motoboy.lat = lat;
  motoboy.lng = lng;

  res.send({ ok: true });
});

// Criar pedido
app.post(‘/pedido’, (req, res) => {
  const pedido = req.body;

  pedidos.push(pedido);

  res.send({ ok: true });
});

app.listen(3000, () => console.log(‘Servidor rodando na porta 3000’));
