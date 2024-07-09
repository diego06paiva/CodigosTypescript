export function debug(classe: unknown) {
  console.log("A clas foi criada", classe);
}
@debug
class PrimeiraClasse {
  constructor() {}
}
