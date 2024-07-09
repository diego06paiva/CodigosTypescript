class Domicilio {
  public cor: string;
  public endereco: object;

  constructor(cor: string, endereco: object) {
    this.cor = cor;
    this.endereco = endereco;
  }

  public TocarInterfone(): string {
    return "Interfone tocado!";
  }
}

class casa extends Domicilio {
  protected AtenderInterfone(mensagem: string): string {
    // Método para atender interfone
    return mensagem;
  }

  public EntrarNaCasa() {
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
