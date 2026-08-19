const produtos = [
  { id: 1, nome: "Notebook", preco: 4500.00 },
  { id: 2, nome: "Smartphone", preco: 2500.00 },
  { id: 3, nome: "Fone bluetooth", preco: 300.00 },
  { id: 4, nome: "Mouse gamer", preco: 150.00 }
];

console.log("Lista de produtos inicial");
for (let i = 0; i < produtos.length; i++) {
  console.log(`ID: ${produtos[i].id} | nome: ${produtos[i].nome} | preço: R$ ${produtos[i].preco.toFixed(2)}`);
}
produtos.push({ id: 5, nome: "Teclado mecânico", preco: 400.00 });

console.log("\n atualização");
console.log(`novo tamanho do array de produtos: ${produtos.length}`);
