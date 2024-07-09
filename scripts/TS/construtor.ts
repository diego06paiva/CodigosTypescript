class Pedido {
  constructor(
    public produto: string,
    public valorTotal: number,
    public previsaoEntrega: Date
  ) {}
}

const MeuPedido = new Pedido("Celular", 250, new Date("2020-04-12"));
console.log(MeuPedido);

// Um jeito mais simples de fazer uma classe com constructor
// Só precisar passar se o método privativo dela
