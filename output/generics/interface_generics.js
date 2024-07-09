"use strict";
const string = {
    valor: "diego",
    RealizandoProcessamento(teste) {
        return teste;
    },
};
const number = {
    valor: 20,
    RealizandoProcessamento(arg) {
        return arg;
    },
};
// Interface com generics é assim que se faz
// Tem que passar o valor generico na interface e depois dizer qual o tipo na hora de fazer o objeto
