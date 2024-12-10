function sumar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
  }
  
  // Prueba
  sumar(3, 4, (resultado) => console.log("Resultado de la suma:", resultado)); // Resultado de la suma: 7
  