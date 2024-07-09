"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const joao = new Cliente("Diego", new Date("2002-04-15"), "@gmail", "vasco");
// É assim que se aplica a herança
// Um dos pilares da orientação a objetos
