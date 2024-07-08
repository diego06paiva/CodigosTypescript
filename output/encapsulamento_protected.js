"use strict";
class Domicilio {
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    TocarInterfone() {
        return "Interfone tocado!";
    }
}
class casa extends Domicilio {
    AtenderInterfone(mensagem) {
        // Método para atender interfone
        return mensagem;
    }
    EntrarNaCasa() {
        return this.AtenderInterfone("Oi, quem é?"); // Só pode atender o interfone quem está dentro da casa
    }
}
const casaHomer = new casa("Azul", { rua: 262, N: 22, bairro: "Cidade Nova" });
console.log(casaHomer);
console.log(casaHomer.TocarInterfone());
console.log(casaHomer.EntrarNaCasa());
// Encapsulamento com metodo privado
// O método AtenderInterfone só pode ser acessado por quem está dentro da classe casa
//
