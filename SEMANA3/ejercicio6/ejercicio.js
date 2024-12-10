function esVocal(letra) {
    let vocal = ['a', 'e', 'i', 'o', 'u'];
    if (vocal.includes(letra.toLowerCase())) {
      return 'es vocal';
    } else {
      return 'no es vocal';
    }
  }
  
  console.log('La letra "m" no es vocal', esVocal('m'));
  console.log('La letra "i" es vocal', esVocal('i'));
  