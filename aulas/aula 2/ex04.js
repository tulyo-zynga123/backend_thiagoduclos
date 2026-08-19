function executarOperacao(a, b, operacao) {
  const resultado = operacao(a, b);
  console.log("O resultado é:", resultado);
  return resultado;
}

executarOperacao(10, 5, (a, b) => a + b); 

executarOperacao(10, 5, (a, b) => a - b); 

executarOperacao(10, 5, (a, b) => a * b);
