console.log("Hello World!");

// Variaveis guardam dados na memoria
// Inicia, com a palavra var, let ou const

let nome = "Lucas";
let idade = 26;
let possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);

//Organizando codigo
console.log(
  `Nome: ${nome}\nIdade: ${idade}\nPossui faculdade? ${possuiFaculdade}`
);

let preco = 25;
let totalComprado = 5;
let totalPreco = preco * totalComprado;
console.log(`Preco total: R$${totalPreco}`);

// Criando varias variaveis com um so let
let sobrenome, cidade, pais;
// Se nao colocar valor apos criar variavel fica como undefined
sobrenome = "Ledsham";
cidade = "Belo Horizonte";
pais = "Brasil";
// Fazendo chamadas das variaveis
console.log(`Nome: ${nome} ${sobrenome}\nCidade: ${cidade}\nPais: ${pais}`);

// Constante - Nao eh possivel alterar o valor da variavel
const time = "Atletico-MG";
// time = "Cruzeiro"; Vai dar erro no codigo

console.log(
  "---------------------------------------------------------------------"
);
