"use strict";
const linguagem = "javascript";
const numero = 20;
console.log(numero.toFixed());
console.log(linguagem.toUpperCase());
// Tipo de dado
// No typescript existem tipos de dados e os métodos só podem ser usados
// Se o tipo de dado for o que o método permite usar
// Até os métodos que aparecem são limitados dependendo do tipo de dado que foi passado
const lista = ["Diego", 22, new Date()];
console.log(lista);
// Dentro desse console ele já informa os tipos de dados que são aceitos dentro desse array
// Mesmo não passando o tipo de dado especifico ele já entende automaticamente 
lista.push("Outra string"); // Caso eu tente mandar outra string para dentro da lista ele aceita pq já tem um tipo string 
//lista.push(true) // Caso eu tente mandar um valor que não existe lá ele já interfere dizendo que não tem como
//# sourceMappingURL=type_inference.js.map