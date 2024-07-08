namespace Autenticacao {
  interface IloginRegistro {
    nome: string;
    idade: number;
  }

  interface INovoUsuario {
    nome: string;
    idade: number;
  }
  export class LoginRegistro {
    login(usuario: IloginRegistro) {
      return usuario;
    }

    registro(NovoUsuario: INovoUsuario) {
      return NovoUsuario;
    }
  }

  export class recuperacao {
    recuperarSenha(usuario:) {
      return usuario;
    }
    recuperarUsuario(recuperarSenha) {
      return recuperarSenha;
    }
  }
}
