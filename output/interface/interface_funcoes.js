"use strict";
let PrimeiraSoma;
PrimeiraSoma = (numero1, numero2) => {
    return numero1 + numero2;
};
console.log(PrimeiraSoma(20, 20));
// Interface servindo para fazer função
console.log("-----------------------------------------------");
let calculadora;
calculadora = {
    somar: (num1, num2) => {
        return num1 + num2;
    },
    subtracao: (num1, num2) => {
        return num1 - num2;
    },
    multiplicar: (num1, num2) => {
        return num1 * num2;
    },
    dividir: (num1, num2) => {
        return num1 / num2;
    },
};
console.log(calculadora.multiplicar(20, 20));
// É assim que usa interface com função
