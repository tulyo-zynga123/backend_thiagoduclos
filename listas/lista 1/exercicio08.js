const tabuleiro8x8 = " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # ";
console.log("--- tabuleiro 8x8 ---");
console.log(tabuleiro8x8);

function gerarTabuleiro(n) {
    let tabuleiro = "";
    for (let linha = 0; linha < n; linha++) {
        for (let coluna = 0; coluna < n; coluna++) {

            if ((linha + coluna) % 2 === 0) {
                tabuleiro += " ";
            } else {
                tabuleiro += "#";
            }
        }
        if (linha < n - 1) {
            tabuleiro += "\n";
        }
    }
    return tabuleiro;
}
console.log("\n--- tabuleiro 4x4 ---");
console.log(gerarTabuleiro(4));
