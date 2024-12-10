let empleados = [
    { nombre: "Juan", id: "E001", horasTrabajadas: [8, 8, 8, 8, 8] },
    { nombre: "Ana", id: "E002", horasTrabajadas: [9, 9, 9, 9, 9] }
  ];
  
  function agregarHoras(id, horas) {
    let empleado = empleados.find(e => e.id === id);
    empleado.horasTrabajadas.push(...horas);
  }
  
  function calcularPago(id) {
    let empleado = empleados.find(e => e.id === id);
    let totalHoras = empleado.horasTrabajadas.reduce((a, b) => a + b, 0);
    return totalHoras * 5000;
  }
  
  function empleadosConHorasExtras() {
    return empleados.filter(e => e.horasTrabajadas.reduce((a, b) => a + b, 0) > 40);
  }
  