const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 7.0 },
  { nome: "Diana", nota: 5.5 },
  { nome: "Eduardo", nota: 9.0 }
];

const alunosComSituacao = alunos.map(aluno => ({
  ...aluno,
  situacao: aluno.nota >= 7 ? "aprovado" : "reprovado"
}));

console.log("alunos com situação:", alunosComSituacao);

const totalAprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado").length;
console.log(`quantidade de aprovados: ${totalAprovados}`);

const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
const mediaGeral = somaNotas / alunos.length;

console.log(`média geral da turma: ${mediaGeral.toFixed(1)}`);
