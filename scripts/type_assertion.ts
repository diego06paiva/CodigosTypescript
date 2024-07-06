const site: unknown = "htttp:localhost:3000";
let siteFavoritos: string[] = [];

siteFavoritos.push(site as string);
siteFavoritos.push(<string>site);

// Ele não reconhece o tipo por ser unknow
// A sintaxe "site as string" diz para o typescript tratar a váriavel como uma string
// Ambas as sintaxes funcionam

// Afirmações do tipo
