enum Permission  {
    ADMIN = "Permissão de administrador", 
    USER = "Permissão de auxiliar adm", 
    READONLY = "Permissão apenas para ler" 
}

//console.log(Permission.ADMIN)
//console.log(Permission.USER)
//console.log(Permission.READONLY)

let nivelUser = 2

if(nivelUser === 3){
    console.log(Permission.ADMIN)
}

else if (nivelUser === 2){
    console.log(Permission.USER)
}
else if (nivelUser === 1){
    console.log(Permission.READONLY)
}
else {
    console.log("Não tem esse número")
}

// Teste lógico para demonstrar como o enum funciona
// Enum é um tipo de dado que permite definir um conjunto de constantes nomeadas