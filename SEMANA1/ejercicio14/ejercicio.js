let min = parseInt(prompt("Ingresa el valor mínimo"));
let max = parseInt(prompt("Ingresa el valor máximo"));
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min; 
console.log("El número aleatorio es: " + numeroAleatorio);
