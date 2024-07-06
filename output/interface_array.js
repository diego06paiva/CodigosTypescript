"use strict";
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
let menu = {
    // Objeto menu que recebe a interface Menu e exige que tudo que esteja dentro do array
    // Siga os padrões de ICategoria
    categorias: [frontEnd, backEnd],
};
// Essa é uma das formas de trabalhar com array e interface
console.log("------------------------------------------------------");
let minhasTarefas = ["Estudar Typescript", "Estudar Vue.js", frontEnd];
console.log(minhasTarefas);
// Outra forma de trabalhar interfaces com array
