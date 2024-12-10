let habitaciones = [
    { numero: 101, tipo: "Suite", disponible: true, reservas: [] },
    { numero: 102, tipo: "Doble", disponible: false, reservas: [{ cliente: "Juan", diasReservados: 2 }] }
  ];
  
  function reservarHabitación(numero) {
    let habitacion = habitaciones.find(h => h.numero === numero);
    if (habitacion.disponible) {
      let cliente = prompt("Ingrese su nombre:");
      let dias = prompt("Ingrese los días reservados:");
      habitacion.reservas.push({ cliente, diasReservados: dias });
      habitacion.disponible = false;
      alert("Reserva exitosa");
    } else {
      alert("La habitación no está disponible");
    }
  }
  
  function cancelarReserva(cliente) {
    habitaciones.forEach(habitacion => {
      habitacion.reservas = habitacion.reservas.filter(reserva => reserva.cliente !== cliente);
      habitacion.disponible = true;
    });
  }
  
  function habitacionesDisponibles() {
    return habitaciones.filter(h => h.disponible).map(h => h.numero);
  }
  