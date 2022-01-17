// Método com Map (desta forma não importa a ordem dos dados)

const dataMap = new Map();

dataMap.set("nome", "Davi Rodrigues");
dataMap.set("estado", "Minas Gerais");
dataMap.set("idade", "18");
dataMap.set("nacionalidade", "Brasileiro");
dataMap.set("cidade", "João Monlevade");
dataMap.set("formacao", "ioasysCamp");

const validoMap = new Map();
validoMap.set("nome", "Davi Rodrigues");
validoMap.set("nacionalidade", "Brasileiro");
validoMap.set("estado", "Minas Gerais");
validoMap.set("cidade", "João Monlevade");
validoMap.set("idade", "18");
validoMap.set("formacao", "ioasysCamp");

const validarMap = () => {
  if (dataMap.size != validoMap.size) {
    return console.info("Inválido");
  }

  for (let [k, v] of dataMap) {
    if (validoMap.get(k) != v) {
      return console.info("Dados inválidos");
    }
  }
  console.info("Dados válidos");
};

validarMap();

// Método por objeto
const dadosInseridos = {
  nome: "Davi Rodrigues",
  idade: 18,
  nacionalidade: "Brasileiro",
  estado: "Minas Gerais",
  cidade: "João Monlevade",
  formacao: "ioasysCamp",
};

const dadosValidos = {
  nome: "Davi Rodrigues",
  idade: 18,
  nacionalidade: "Brasileiro",
  estado: "Minas Gerais",
  cidade: "João Monlevade",
  formacao: "ioasysCamp",
};

const validarObj = () => {
  let strValido = JSON.stringify(dadosValidos);
  let strInserido = JSON.stringify(dadosInseridos);
  if (strValido != strInserido) {
    console.info("Cadastro inválido");
  } else {
    console.info("Cadastro válido");
  }
};

validarObj();
