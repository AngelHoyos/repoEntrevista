function contarC(arr) {
  let contador = 0;
  arr.forEach(nombre => {
    contador += (nombre.match(/c/g) || []).length; 
  });
  console.log(contador); 
}

contarC(["Carlos", "Cristina", "Juan", "Cecilia"]); 
