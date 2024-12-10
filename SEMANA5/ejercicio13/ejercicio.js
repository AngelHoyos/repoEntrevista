let citas = {
  "12345": { nombre: "Juan", cita: { dia: "Lunes", hora: "10:00" } },
  "67890": { nombre: "Ana", cita: { dia: "Martes", hora: "12:00" } }
};

let documento = prompt("Ingrese su documento:");
let cita = citas[documento];
alert(`Cita de ${cita.nombre}: ${cita.cita.dia} a las ${cita.cita.hora}`);
let cambio = confirm("¿Desea cambiar su cita?");
if (cambio) {
  let nuevoDia = prompt("Ingrese el nuevo día:");
  let nuevaHora = prompt("Ingrese la nueva hora:");
  cita.cita.dia = nuevoDia;
  cita.cita.hora = nuevaHora;
  alert("Cambio realizado exitosamente");
}
