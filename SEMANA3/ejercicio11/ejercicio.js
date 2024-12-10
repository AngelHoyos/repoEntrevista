function generarNumeroAleatorio() {
    let numero = Math.floor(Math.random() * 20) + 1;
    return numero;
  }
  
  let numero = generarNumeroAleatorio();
  console.log('El número aleatorio entre 1 y 20 ', numero);
  