let suma = 0;
let contador = 0;
let numero;

do {
  numero = parseFloat(prompt("Ingresa un numero (0 para terminar)"));
  if (numero !== 0) {
    suma += numero;
    contador++;
  }
} while (numero !== 0);

if (contador > 0) {
  let promedio = suma / contador;
  console.log(
    `El promedio de los numeros ingresados es ${promedio.toFixed(2)}`
  );
} else {
  console.log("No se ingresaron números");
}
