var videoGames = ["Switch", "PS5", "Xbox One", "PC"];

videoGames.pop(); // Remove o ultimo item do array e retorna ele
console.log(videoGames); // ["Switch", "PS5", "Xbox One"]

videoGames.push("3DS"); // Adiciona um novo item no final do array
console.log(videoGames); // ["Switch", "PS5", "Xbox One", "3DS"]

// For Loop
for (let x = 1; x <= 10; x++) {
  console.log(x);
}

// While Loop
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Loops com Arrays
var videoGamesLoop = ["Switch", "PS5", "Xbox One", "PC"];
for (let i = 0; i < videoGamesLoop.length; i++) {
  console.log(`[${i + 1}] ${videoGamesLoop[i]}`);
}

//Break
// O loop ira para caso encontre a palavra break
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "Xbox One") {
    console.log("Xbox One encontrado!");
    break;
  }
}

//forEach
var frutas = ["Maçã", "Banana", "Laranja", "Uva"];
frutas.forEach(function (fruta, i) {
  console.log(fruta, i);
});
