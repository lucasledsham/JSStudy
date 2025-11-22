// Tipos de Dados
// Todos sao primitivos exceto os objetos
let nome = "Lucas"; // String
let idade = 26; // Number
let possuiFaculdade = true; // Booleno
let time; // undefined
let comidade = null; // Null
let simbolo = Symbol(); // Symbol
let novoObjeto = {}; // Object

// Verificar tipo da variavel
console.log(typeof nome); // Retorna String

// Concatenando Strings
let sobrenome = "Ledsham";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);
// Com ${}
let gols = 1000;
let frase = `Romario fez ${gols} gols!`;
console.log(frase);

console.log("--------------------------------------");
