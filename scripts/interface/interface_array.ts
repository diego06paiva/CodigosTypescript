interface ICategoria {
  // Defino interface
  nome: string;
  id: number;
  categoriaPai?: ICategoria;
}

const frontEnd = {
  // Objeto frontEnd
  nome: "Vue.js",
  id: 20,
};

const backEnd = {
  // Objeto backEnd
  nome: "NestJS",
  id: 30,
};

interface Menu {
  // Inteface Menu que recebe categorias e determina que tudo que seja categorias seja uma array
  categorias: ICategoria[];
}

let menu: Menu = {
  // Objeto menu que recebe a interface Menu e exige que tudo que esteja dentro do array
  // Siga os padrões de ICategoria
  categorias: [frontEnd, backEnd],
};
// Essa é uma das formas de trabalhar com array e interface

console.log("------------------------------------------------------");

interface ITodo {
  [indice: number]: string | ICategoria; // O tipo number dentro do array é para pegar o indice de cada posição
} // O tipo string é o retorno que vai ser aceito dentro da string

let minhasTarefas: ITodo = ["Estudar Typescript", "Estudar Vue.js", frontEnd];

console.log(minhasTarefas);
// Outra forma de trabalhar interfaces com array
