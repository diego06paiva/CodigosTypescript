function enviarEmail(
  para: string,
  mensagem: string = "Nada", // Aqui caso o usuario não mande nada como mensagem por padrão já vem a mensagem especificada
  remetente?: string // Aqui foj passado o sinal de interrogação(?) isso indica que é opcional se vai por parametro ou não
): void {
  console.log({ para, mensagem, remetente });
}

enviarEmail("Diego@gmail.com");

// Parametros com valores opcionais e já com um padrão pré definido

export function EnviarEmail(mensagem: string): string {
  return `Mensagem: ${mensagem}`;
}
