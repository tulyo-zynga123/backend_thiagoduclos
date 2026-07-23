const readline = require('readline-sync');

const secreto = 42;
let tentativas = 0;
let acertou = false;

console.log("=== jogo da adivinhação ===");

while (!acertou) {
    let palpite = Number(readline.question("digite o seu palpite: "));
    tentativas++;

    if (palpite === secreto) {
        console.log(`parabéns! Você acertou em ${tentativas} tentativa(s).`);
        acertou = true;
    } else if (secreto > palpite) {
        console.log("o número secreto é maior!");
    } else {
        console.log("o número secreto é menor!");
    }
}
