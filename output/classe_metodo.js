"use strict";
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    SeApresenta() {
        return `Oi eu sou o ${this.nome}`;
    }
}
const diegoo = new Professor("Diego", 22, "historia");
console.log(diegoo.SeApresenta());
