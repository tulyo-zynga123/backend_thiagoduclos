const produtos = [
  { id: 1, nome: "Camiseta", preco: 39.90 },
  { id: 2, nome: "Tênis", preco: 120.00 },
  { id: 3, nome: "Boné", preco: 25.00 },
  { id: 4, nome: "Calça jeans", preco: 89.90 },
  { id: 5, nome: "Meias", preco: 15.00 }
];

const produtoId3 = produtos.find(produto => produto.id === 3);
console.log("Produto com ID 3:", produtoId3 ? produtoId3.nome : "Não encontrado");

const produtosCaros = produtos.filter(produto => produto.preco > 50.00);
console.log("Produtos acima de 50 reais:", produtosCaros);
