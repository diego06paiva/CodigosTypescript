"use strict";
const filmesCategoria = ["Terror", "Comédia", "Aventura", "Drama"];
// Tipo array padrão que cria um tipo array e dentro dele eu passo o tipo que vou aceitar dentro da lista
// Note que na frente da string tem um [] e isso determina que uma array e atrás desse [] vem justamente o tipo
const filmesCategoria1 = ["Terror", "Comédia", "Aventura", "Drama", 10];
// Tipo de array que aceita mais de um tipo a sintaxe é a mesma do union types
// Preciso passar o pipe | e por os tipos dentro de parenteses e pronto, já está funcionando
// E ele vai aceitar mais de um tipo
filmesCategoria.push("Aventura");
// filmesCategoria.push(2012)
// Exemplo de que como ele um tipo de array string não vai aceitar outros valores lá dentro além de string
const filmeAno = ["vingadores", 2012];
// Outro jeito de escrever o código acima
// Ele tambem é uma array que aceita dois tipos de valores
// Mas tem uma sintaxe diferente com <> e escrito literalmete array ali
// Tipo array
//# sourceMappingURL=array.js.map