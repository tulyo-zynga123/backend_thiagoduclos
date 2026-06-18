const readline = require('readline-sync');

let numero = readline.questionInt('digite um número para a contagem regressiva: ');

for (let i = numero; i >= 1; i--) {
    console.log(i);
}

console.log('Fim!');
