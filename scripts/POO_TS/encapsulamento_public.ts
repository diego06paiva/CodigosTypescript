class Veiculo {
  public cor: string;

  constructor(cor: string) {
    this.cor = cor;
  }

  public AbrirPorta(): boolean {
    return false;
  }
}

const Carro = new Veiculo("Preto");
console.log(Carro);
console.log(Carro.AbrirPorta());

// Encapsulamento com método publico
// Pode ser acessado por qualquer um
