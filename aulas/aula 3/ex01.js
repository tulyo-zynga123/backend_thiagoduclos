const assistente = {
  nome: "Copiloto IA",
  idade: 1,
  cidade: "Servidor nuvem",
  curso: "IA"
};

console.log(`Dados iniciais`);
console.log(`Nome: ${assistente.nome}`);
console.log(`Idade: ${assistente.idade} ano`);
console.log(`Cidade: ${assistente.cidade}`);
console.log(`Curso: ${assistente.curso}`);

assistente.cidade = "São Paulo";

console.log(`\nDados atualizados`);
console.log(`Nome: ${assistente.nome}`);
console.log(`Idade: ${assistente.idade} ano`);
console.log(`Cidade Atualizada: ${assistente.cidade}`);
console.log(`Curso: ${assistente.curso}`);
