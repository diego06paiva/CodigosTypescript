interface ISoma {
  (num1: number, num2: number): number;
}
let PrimeiraSoma: ISoma;

PrimeiraSoma = (numero1, numero2): number => {
  return numero1 + numero2;
};

console.log(PrimeiraSoma(20, 20));
// Interface servindo para fazer função

console.log("-----------------------------------------------");

interface ICalculo {
  somar(a: number, b: number): number;
  subtracao(a: number, b: number): number;
  multiplicar(a: number, b: number): number;
  dividir(a: number, b: number): number;
}
let calculadora: ICalculo;

calculadora = {
  somar: (num1, num2) => {
    return num1 + num2;
  },
  subtracao: (num1, num2) => {
    return num1 - num2;
  },
  multiplicar: (num1, num2) => {
    return num1 * num2;
  },
  dividir: (num1, num2) => {
    return num1 / num2;
  },
};

console.log(calculadora.multiplicar(20, 20));
// É assim que usa interface com função
