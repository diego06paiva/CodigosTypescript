"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcoes_padrao_1 = require("../funcoes/funcoes_padrao");
let usuarios;
usuarios = {
    ip: "12",
    usuario: "Diego",
    senha: 123,
    tipoBanco: "teste",
};
// Importando a interface IBancoDeDados
console.log(usuarios);
console.log((0, funcoes_padrao_1.EnviarEmail)("Testando mensagem"));
