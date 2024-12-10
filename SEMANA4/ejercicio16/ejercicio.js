function cadenaConMasTimina(arr) {
  let maxT = 0;
  let cadena = "";
  arr.forEach(dna => {
    let tCount = (dna.match(/T/g) || []).length; // Cuenta las T
    if (tCount > maxT) {
      maxT = tCount;
      cadena = dna;
    }
  });
  console.log(cadena); // Muestra la cadena con más T
}

cadenaConMasTimina(["ATCG", "CGTA", "TATAT", "AGCT"]); // Llama a la función
