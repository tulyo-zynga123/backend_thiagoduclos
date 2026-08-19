function validarSenha(senha) {
  return senha.length >= 8;
}

const senhaDigitada = "12345678";

if (validarSenha(senhaDigitada)) {
  console.log("senha valida");
} else {
  console.log("senha fraca – minimo 8 caracteres");
}
