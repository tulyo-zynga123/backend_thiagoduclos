const alunos = [
  { id: 1, nome: "Ana", nota: 8.5 },
  { id: 2, nome: "Bruno", nota: 6.0 },
  { id: 3, nome: "Carla", nota: 9.2 },
  { id: 4, nome: "Daniel", nota: 5.5 },
  { id: 5, nome: "Eva", nota: 7.0 }
];

const resultado = alunos.map(aluno => ({
  nome: aluno.nome,
  nota: aluno.nota,
  situacao: aluno.nota >= 6 ? "Aprovado" : "Reprovado"
})
);

console.log(resultado);
