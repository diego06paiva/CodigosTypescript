interface IPessoa {
  nome: string;
  idade: number;
  status: boolean;
}
let DadosPessoais: IPessoa;

DadosPessoais = {
  nome: "Diego",
  idade: 22,
  status: true,
};

// A interface é como se fosse um contrato que fazemos onde vamos passar dentro dela
// Só o tipo que determinamos antes
// Nesse caso somos obrigados a passar todos os tipos que pedimos

console.log("---------------------------------------------------------");

// Essa interface não muda em quase nada em relação a uma interface normal
// A diferença é que essa aqui tem um parametro que é opcional

interface Iprodutos {
  nomeProduto: string;
  precoProduto: number;
  statusProduto: boolean;
  descontoProduto?: boolean; // Parametro opcional
}
let Produtos: Iprodutos;

Produtos = {
  nomeProduto: "Celular",
  precoProduto: 2500,
  statusProduto: true,
};

console.log("---------------------------------------------------------");

interface ICursos {
  descricaoCurso?: string;
  readonly precoCurso: number;
  nomeCurso: string;
  cargaHoraria: number;
  classificacao: number | string;
}
let curso: ICursos;

curso = {
  descricaoCurso: "De Typescript",
  precoCurso: 32,
  nomeCurso: "Da Udemy",
  cargaHoraria: 12,
  classificacao: 5 + "estrelas",
};

// Nesse caso em interface o reandonly serve para informar que o tipo é só leitura
// E não pode ser alterado
