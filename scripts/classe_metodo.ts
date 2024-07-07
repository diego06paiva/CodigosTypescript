class Professor {
  nome: string;
  idade: number;
  materia: string;

  constructor(nome: string, idade: number, materia: string) {
    this.nome = nome;
    this.idade = idade;
    this.materia = materia;
  }

  SeApresenta(): string {
    return `Oi eu sou o ${this.nome}`;
  }
}

const diegoo = new Professor("Diego", 22, "historia");
console.log(diegoo.SeApresenta());
