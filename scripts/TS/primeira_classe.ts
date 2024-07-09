class Pessoa {
  nome: string;
  idade: number;
  altura: number;
  readonly status: boolean;

  constructor(nome: string, idade: number, altura: number, status: boolean) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.status = status;
  }
}

const diego = new Pessoa("Diego", 22, 1.78, true);
