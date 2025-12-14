// exemplo01.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar() {
  rl.question('Digite algo (ou "s" para sair): ', (resposta) => {
    if (resposta.trim().toLowerCase() === 's') {
      console.log('Programa encerrado.');
      rl.close();
      process.exit(0);
    } else {
      console.log('Você digitou:', resposta);
      perguntar();
    }
  });
}

perguntar();
