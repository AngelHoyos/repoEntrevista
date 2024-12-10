let nombres = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0;

nombres.forEach(nombre => {
  if (nombre === "Maria") {
    contador++;
  }
});

console.log(contador); // Muestra cuántas veces aparece "Maria"
