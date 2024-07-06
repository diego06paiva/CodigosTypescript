interface IUsuarios {
  nome: string;
  idade: number;
  status: boolean;
}

interface IDados extends IUsuarios {
  time: string;
}

let P1: IDados;

P1 = {
  idade: 22,
  nome: "Diego",
  status: true,
  time: "Vasco da Gama",
};

console.log(P1);
