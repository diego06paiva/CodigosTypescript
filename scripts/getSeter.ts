class Permissao {
  constructor(private _nome: string, private _nivel: number) {}
  get nome() {
    return this._nome.toUpperCase();
  }

  set nome(NovoNome) {
    if (NovoNome.length < 5) {
      throw new Error("Deu erro");
    }

    this._nome = NovoNome;
  }
}
const permissao = new Permissao("Diego", 20);
console.log(permissao.nome); // Aqui é o get onde quando ele retorna o nome ele vem em letras maisculas assim como foi determinado
permissao.nome = "Di"; // Aqui é o set onde ele vai tentar executar uma mudança, mas vai acabar parando na sua avaliação
console.log(permissao.nome);
