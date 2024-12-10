function aplicarOperacion(numero, callback) {
  callback(numero);
}

// Prueba
aplicarOperacion(5, (numero) => console.log("Número recibido:", numero)); // Número recibido: 5
