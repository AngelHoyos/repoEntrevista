function quitarVocales(texto) {
    return texto.replace(/[aeiouáéíóú]/gi, '');
  }
  
  console.log('Texto sin vocales', quitarVocales('Hola a todos')); // 'Hll mnd'
  