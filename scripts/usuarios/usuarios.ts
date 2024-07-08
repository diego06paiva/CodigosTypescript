import { IBancoDeDados } from "../interface/IBancoDeDados";
import { EnviarEmail } from "../funcoes/funcoes_padrao";

let usuarios: IBancoDeDados;

usuarios = {
  ip: "12",
  usuario: "Diego",
  senha: 123,
  tipoBanco: "teste",
};

// Importando a interface IBancoDeDados
console.log(usuarios);

console.log(EnviarEmail("Testando mensagem"));
