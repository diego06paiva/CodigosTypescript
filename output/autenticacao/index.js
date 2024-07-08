"use strict";
var Autenticacao;
(function (Autenticacao) {
    class LoginRegistro {
        login(usuario) {
            return usuario;
        }
        registro(NovoUsuario) {
            return NovoUsuario;
        }
    }
    Autenticacao.LoginRegistro = LoginRegistro;
    class recuperacao {
        recuperarSenha(usuario) {
            return usuario;
        }
        recuperarUsuario(recuperarSenha) {
            return recuperarSenha;
        }
    }
    Autenticacao.recuperacao = recuperacao;
})(Autenticacao || (Autenticacao = {}));
