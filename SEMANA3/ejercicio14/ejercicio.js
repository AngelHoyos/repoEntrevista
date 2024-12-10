function Entrada() {
    const edad = parseInt(prompt("Ingresa tu edad"));
    const estatura = parseFloat(prompt("Ingresa tu estatura en centímetros"));
    const permisoParental = prompt("¿Tienes permiso parental? (si/no)").toLowerCase() === 'si';
  
    if (edad >= 18 && estatura > 150) {
      return 'Permiso de entrada concedido.';
    } else if (edad < 18 && permisoParental) {
      return 'Permiso de entrada concedido con permisos parentales.';
    }
  
    return 'Permiso de entrada denegado.';
  }
  
  console.log(Entrada());
  