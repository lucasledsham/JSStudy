var nome = "Lucas";
var idade = 25;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var total = preco * totalComprado;
console.log(total);

var primeiroNome = "Lucas",
  sobrenome = "Nunes",
  cidade = "BH";
console.log(primeiroNome, cidade);

var semDefinir;
console.log(semDefinir);

//Hoisting - No JS pode criar uma variavel depois de utiliza-la na linha de codigo
console.log(pais);//Retorna undefined
var pais = 'Brasil';

//var e let podem alterar o valor da variavel
var time = 'Flamengo';
time = 'Galo';
console.log(time);
//cont eh o mesmo valor sempre, nao pode ser alterado