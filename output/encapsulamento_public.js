"use strict";
class Veiculo {
    constructor(cor) {
        this.cor = cor;
    }
    AbrirPorta() {
        return false;
    }
}
const Carro = new Veiculo("Preto");
console.log(Carro);
console.log(Carro.AbrirPorta());
// Encapsulamento com método publico
// Pode ser acessado por qualquer um
