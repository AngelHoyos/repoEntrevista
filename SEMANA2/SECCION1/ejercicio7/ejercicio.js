let numero = parseInt(prompt("Ingresa un número entre 1 y 15"));

if (numero < 2) {
  console.log(`${numero} no es primo`);
} else if (numero === 2 || numero === 3) {
  console.log(`${numero} es primo`);
} else if (numero % 2 === 0 ||  numero % 3 === 0 ||  numero % 5 === 0 ||  numero % 7 === 0) {
  console.log(`${numero} no es primo`);
} else {
  console.log(`${numero} es primo`);
}
