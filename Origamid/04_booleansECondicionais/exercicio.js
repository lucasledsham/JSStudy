// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 24;
var idadeAmigo = 13;
if (minhaIdade < idadeAmigo) {
  console.log('E menor');
} else if (minhaIdade == idadeAmigo) {
  console.log('E igual');
} else {
  console.log('E maior');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//truthy
var idade = 28;//truthy
var possuiDoutorado = false;//falsy
var empregoFuturo;//falsy
var dinheiroNaConta = 0;//falsy

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');//Falso
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}