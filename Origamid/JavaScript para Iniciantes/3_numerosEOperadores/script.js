// Numbers
let idade = 26;
let gols = 1000;
let pi = 3.14; // Numero decimal se usa .
let exp = 2e10; // 20000000000

// Operadores Aritmeticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// Operador Aritmeticos Strings
var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * "2"; // 200
console.log(typeof multiplicacao); // Number
var divisao = "Comprei 10" / 2; // NaN (Not a Number)

// A ordem importa
// Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
// Parênteses para priorizar uma expressão

// Operadores Aritméticos Unários
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
// Mesma coisa para o decremento --x

// let i = 1;
// while (i <= 50) {
//   console.log(i++);
// }

// O + e - tenta transformar o valor seguinte em número

var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade2 = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
// O - antes de um número torna ele negativo

console.log("-".repeat(70));
