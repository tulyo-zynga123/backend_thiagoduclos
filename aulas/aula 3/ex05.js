const readlineSync = require('readline-sync');

const produtos = [];

for (let i = 0; i < 3; i++) {
  const nome = readlineSync.question('Nome: ');
  const preco = parseFloat(readlineSync.question('Preço: '));
  produtos.push({ nome, preco });
}

const caros = produtos.filter(p => p.preco > 20);
console.log('Produtos acima de 20 reais:', caros);
