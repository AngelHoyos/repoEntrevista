let parqueadero = [];

function ingresarVehiculo(vehiculo) {
  parqueadero.push(vehiculo);
}

function eliminarVehiculo(placa) {
  parqueadero = parqueadero.filter(v => v.placa !== placa);
}

function calcularPago(placa) {
  let vehiculo = parqueadero.find(v => v.placa === placa);
  let horas = (new Date() - new Date(vehiculo.entrada)) / 3600000;
  return horas * 2500;
}
