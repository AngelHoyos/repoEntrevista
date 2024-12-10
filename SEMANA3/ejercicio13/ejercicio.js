function PositivoNegativo(numeros) {
    if (numeros >= 0) {
      return "Positivo";
    } else {
      return "Negativo";
    }
  }
  
  let numero = parseInt(prompt("Ingresa un numero"));
  
  console.log(`El numero ${numero} es`, PositivoNegativo(numero));
  