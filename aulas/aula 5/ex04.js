const express = require('express');
const app = express();

const produtos = [
  { id: 1, nome: "Teclado", preco: 150.00 },
  { id: 2, nome: "Mouse", preco: 80.50 },
  { id: 3, nome: "Monitor", preco: 899.90 },
  { id: 4, nome: "Headset", preco: 220.00 }
];

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.get('/produtos/caros', (req, res) => {
  const caros = produtos.filter(p => p.preco > 100);
  res.json(caros);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
