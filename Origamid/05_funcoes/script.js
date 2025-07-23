function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(4));

function texto() {
  console.log('Texto por Funcao');
}
texto();//Chamando a funcao

function pi() {
  return 3.14;
}
var total = 5 * pi();// 15.7

function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}
console.log(imc(68.75, 1.75));
console.log(imc(99, 1.83));

// Parênteses executa a função
function corFavorita(cor) {
  var frase;
  if(cor === 'azul') {
    frase = 'Você gosta do céu';
  } else if(cor === 'verde') {
    frase = 'Você gosta de mato';
  } else {
    frase = 'Você não gosta de nada';
  }
  return frase;
}
console.log(corFavorita()); // retorna 'Você não gosta de nada'
// Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

// Argumentos podem ser funções
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

// Pode ou não retornar um valor
// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
imc2(80, 1.80); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined

// Valores retornados
// Uma função pode retornar qualquer tipo de dado e até outras funções.
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(61));

// Escopo
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
// console.log(totalPaises); // erro, totalPaises não definido
console.log(precisoVisitar(21));

// Escopo Léxico
// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
console.log(dados());

// outrosDados(); // retorna um erro
