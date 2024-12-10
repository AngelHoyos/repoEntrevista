function evaluacion() {
    let totalNotas = 0;
  
    for (let i = 1; i <= 5; i++) {
      let nota = parseInt(prompt(`Ingresa la nota ${i} (entre 1 y 5):`));
      totalNotas += nota;
    }
  
    const promedio = totalNotas / 5;
  
    if (promedio >= 3) {
      return "Aprobado";
    } else {
      return "Reprobado";
    }
  }
  
  const resultado = evaluacion();
  console.log('El estudiante fue:', resultado);
  