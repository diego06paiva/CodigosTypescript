"use strict";
let DadosPessoais;
DadosPessoais = {
    nome: "Diego",
    idade: 22,
    status: true,
};
// A interface é como se fosse um contrato que fazemos onde vamos passar dentro dela
// Só o tipo que determinamos antes
// Nesse caso somos obrigados a passar todos os tipos que pedimos
console.log("---------------------------------------------------------");
let Produtos;
Produtos = {
    nomeProduto: "Celular",
    precoProduto: 2500,
    statusProduto: true,
};
console.log("---------------------------------------------------------");
let curso;
curso = {
    descricaoCurso: "De Typescript",
    precoCurso: 32,
    nomeCurso: "Da Udemy",
    cargaHoraria: 12,
    classificacao: 5 + "estrelas",
};
// Nesse caso em interface o reandonly serve para informar que o tipo é só leitura
// E não pode ser alterado
