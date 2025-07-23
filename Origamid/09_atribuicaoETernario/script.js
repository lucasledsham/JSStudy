var numero = 20;
var numero2 = 10;

numero += 10; // 30
numero /= numero2; // 3
console.log(numero);

// Operador Ternario
// Abreviado de condicionais if e else
// condicao ? true : false
var idade = 16;
var podeBeber = idade >= 18 ? true : false;
console.log(podeBeber); // Retorna false

//Valores true ou false nao precisam ser colocados, pois ja retorna booleano
var idade = 61;
var fazerExame = idade >= 60;
console.log(fazerExame);

var nota = 67;
var aprovado = nota >= 60 ? "Aprovado" : "Reprovado";
console.log(aprovado);
