//Dois valores = false(0) ou true(1)
var possuiGraduacao = true;
var possuiDoutorado = false;
if (possuiDoutorado) {
  console.log("Possui Graduacao e Doutorado");
} else if (possuiGraduacao) {
  console.log('Possui Graduacao, mas nao possui Doutorado');
  
} else {
  console.log("Nao possui Graduacao");
}

var nome = 'Lucas';
if (nome) {
  console.log(nome);
} else {
  console.log('Nao possui nome');
}

// Truthy e Falsy
// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if(''); // ou "" ou ``

// Operador Lógico de Negação !
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false
// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!''); // false
// Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

// Operadores de comparação
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false
// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

// Operadores Lógicos &&
// && Compara se uma expressão e a outra é verdadeira
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
// Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

// Operadores Lógicos ||
// || Compara se uma expressão ou outra é verdadeira
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true
// Retorna o primeiro valor true que encontrar