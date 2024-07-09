interface IProcessamentos<T> {
  valor: T;
  RealizandoProcessamento(arg: T): T;
}

const string: IProcessamentos<string> = {
  valor: "diego",
  RealizandoProcessamento(teste) {
    return teste;
  },
};

const number: IProcessamentos<number> = {
  valor: 20,
  RealizandoProcessamento(arg): number {
    return arg;
  },
};

// Interface com generics é assim que se faz
// Tem que passar o valor generico na interface e depois dizer qual o tipo na hora de fazer o objeto
