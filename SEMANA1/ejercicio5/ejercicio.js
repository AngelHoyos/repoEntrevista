let radio = parseFloat(prompt("Ingrese el radio del círculo"));
let area = Math.PI * Math.pow(radio, 2);
let perimetro = 2 * Math.PI * radio;

console.log(`Area: ${area.toFixed(2)}`);
console.log(`Perimetro: ${perimetro.toFixed(2)}`);
