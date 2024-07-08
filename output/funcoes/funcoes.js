"use strict";
// É assim que se declara uma função em Typescript
// Esse tipo dentro dos parametros da função é o tipo que ele vai aceitar como dado a se passar (string)
// O tipo fora dos parametros é o tipo que ele espera a ser retornado
function mostrarMensagem(texto) {
    console.log(texto); // Tipo a ser pego pelo usuario
    return true; // Tipo de retorno que ele vai receber
}
console.log(mostrarMensagem("texto de true"));
function mostrarMensagens(texto) {
    // Modo de declarar função que aceita dois tipos nos parametros
    return `${texto}`;
}
console.log(mostrarMensagens(10));
console.log("------------------------------------------------------");
// Nas arrowfunction não vai mudar quase nada em relação a função de sintaxe normal
const show = (numeros) => {
    return numeros;
};
console.log(show(222));
