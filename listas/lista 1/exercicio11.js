const ler = require('readline-sync');

function PodeVotar (idade) {
    return  idade => 16
}
const idade = ler.question ();
if (PodeVotar(idade) >16){
    console.log ("true")
}
else {console.log ("false")}
