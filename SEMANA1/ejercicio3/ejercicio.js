let precio = parseFloat(prompt("Ingrese el precio del electrodoméstico"));
let meses = parseInt(prompt("Ingrese el plazo en meses"));
let credito = precio * Math.pow(1.05, meses);
let cuotaMensual = credito / meses;

console.log(`El precio total a crédito es: ${credito.toFixed(2)}`);
console.log(`La cuota mensual será: ${cuotaMensual.toFixed(2)}`);
