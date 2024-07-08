"use strict";
class Pedido {
    constructor(produto, valorTotal, previsaoEntrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
    }
}
const MeuPedido = new Pedido("Celular", 250, new Date("2020-04-12"));
console.log(MeuPedido);
// Um jeito mais simples de fazer uma classe com constructor
// Só precisar passar se o método privativo dela
