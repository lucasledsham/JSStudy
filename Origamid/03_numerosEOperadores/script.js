var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

console.log(exp);

//OPERADORES ARITMETICOS
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

var somando = 10 + 5 + 15 + 3;
console.log(somando);
var dividindo = 24 / 5;
console.log(dividindo);
var modulando = 34434329 % 3;
console.log(modulando);

//Operadores Aritméticos (Strings)
var somaComString = '100' + 50; // 10050
var subtracaoComString = '100' - 50; // 50
var multiplicacaocomString = '100' * '2'; // 200
var divisaoComString = 'Comprei 10' / 2; // NaN (Not a Number)

// A ordem importa
// Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var x = 10;
console.log(--x);
console.log(x);

// Operadores Aritméticos Unários
// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(-idade + 5); // -23
// O - antes de um número torna ele negativo

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

var idadeString = '33';
var idadeInt = parseInt(idadeString);
console.log(idadeInt);