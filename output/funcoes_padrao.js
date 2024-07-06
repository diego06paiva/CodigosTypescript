"use strict";
function enviarEmail(para, mensagem = "Nada", // Aqui caso o usuario não mande nada como mensagem por padrão já vem a mensagem especificada
remetente // Aqui foj passado o sinal de interrogação(?) isso indica que é opcional se vai por parametro ou não
) {
    console.log({ para, mensagem, remetente });
}
enviarEmail("Diego@gmail.com");
// Parametros com valores opcionais e já com um padrão pré definido
