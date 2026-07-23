const produtos = [
  { id: 1, nome: "teclado mecânico", preco: 250 },
  { id: 2, nome: "mouse optico", preco: 80 },
  { id: 3, nome: "monitor 24'", preco: 850 },
  { id: 4, nome: "fone de ouvido", preco: 90 },
  { id: 5, nome: "suporte para notebook", preco: 120 }
];

const produtoId3 = produtos.find(p => p.id === 3);
console.log("A) Produto de ID 3:", produtoId3);

const caros = produtos.filter(p => p.preco > 100);
console.log("B) Produtos acima de 100:", caros);

const nomes = produtos.map(p => p.nome);
console.log("C) Nomes dos produtos:", nomes);

console.log("D) Produtos formatados:");
produtos.forEach(p => {
  console.log(`produto: ${p.nome} | preço: R$ ${p.preco.toFixed(2)}`);
});
