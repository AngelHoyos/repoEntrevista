let numero1 = parseInt(prompt("Ingresa el primer número"));
let numero2 = parseInt(prompt("Ingresa el segundo número"));

if (numero1 > numero2) {
  console.log(`${numero1} es mayor que ${numero2}`);
} else if (numero2 > numero1) {
  console.log(`${numero2} es mayor que ${numero1}`);
} else {
  console.log("Ambos números son iguales");
}
