const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual o primeiro número da operação? ", (primeiro) => {
  rl.question("Qual o segundo número da operação? ", (segundo) => {
    rl.question("Qual operação deseja fazer? ", (op) => {
      let resultado = calcular(primeiro, segundo, op);
      console.log(`O resultado foi: ${resultado}`);
      rl.close();
    });
  });
});

const calcular = (n1, n2, op) => {
  if (op === "+") {
    return n1 + n2;
  }
  if (op === "-") {
    return n1 - n2;
  }
  if (op === "*") {
    return n1 * n2;
  }
  if (op === "/") {
    return n1 / n2;
  }
};
