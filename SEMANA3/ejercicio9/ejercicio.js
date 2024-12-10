function Vocales(texto) {
    let vocales = 'aeiou';
    let cantidadVocales = 0;
    
    for (let i = 0; i < texto.length; i++) {
      if (vocales.includes(texto[i].toLowerCase())) {
        cantidadVocales++;
      }
    }
    
    return cantidadVocales;
  }
  
  console.log('La cantidad de vocales en "Hola y Adios" es:', Vocales('Hola y Adios')); 
  