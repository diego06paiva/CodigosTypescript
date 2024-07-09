class Empresa {
  prestaServico() {
    return `Presta serviço`;
  }
}

class padaria extends Empresa {
  prestaServico() {
    return `Vendendo pão`;
  }
}
console.log(new Empresa().prestaServico);
console.log(new padaria().prestaServico);

// Polimorfismo
// Dois metodos com o mesmo nome que fazem coisas diferentes
