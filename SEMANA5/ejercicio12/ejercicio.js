let estudiantes = [
  { nombre: "Juan", edad: 20, matricula: "A001", calificaciones: [8, 9, 10] },
  { nombre: "Ana", edad: 21, matricula: "A002", calificaciones: [7, 6, 8] }
];

function calcularPromedio(matricula) {
  let estudiante = estudiantes.find(e => e.matricula === matricula);
  let suma = estudiante.calificaciones.reduce((a, b) => a + b, 0);
  return suma / estudiante.calificaciones.length;
}

function actualizarCalificaciones(matricula, nuevasCalificaciones) {
  let estudiante = estudiantes.find(e => e.matricula === matricula);
  estudiante.calificaciones = nuevasCalificaciones;
}
