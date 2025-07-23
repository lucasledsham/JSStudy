var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

console.log(typeof(nome));
console.log(typeof(idade));
console.log(typeof(comida));
console.log(typeof(simbolo));

var primeiroNome = 'Lucas';
var sobreNome = 'Nunes';
var nomeCompleto = primeiroNome + ' ' + sobreNome;
console.log(nomeCompleto);
console.log(primeiroNome + ' ' + sobreNome);//Imprimindo sem criar variavel
console.log(`Nome: ${nome}`);

var ano = 2025;
var mes = 8;
console.log(ano + mes);

var frase1 = 'Esse e o "melhor" jogo';

var gols = 1000;
console.log(`Pele fez ${gols} gols`)