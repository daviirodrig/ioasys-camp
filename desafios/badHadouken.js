const nome = "Davi Rodrigues";
const idade = 18;
const nacionalidade = "Brasileiro";
const estado = "Minas Gerais";
const cidade = "João Monlevade";
const formacao = "ioasysCamp";

const cadastroUsuario = () => {
  if (nome === "Davi Rodrigues") {
    if (idade === 18) {
      if (nacionalidade === "Brasileiro") {
        if (estado === "Minas Gerais") {
          if (cidade === "João Monlevade") {
            if (formacao === "ioasysCamp") {
              console.log("Cadastrado!");
            } else console.log("Não cadastrado");
          } else console.log("Não cadastrado");
        } else console.log("Não cadastrado");
      } else console.log("Não cadastrado");
    } else console.log("Não cadastrado");
  } else console.log("Não cadastrado");
};
