let respuesta;
do {
  respuesta = prompt("Desea salir? (S/N) ").toUpperCase();
  if (respuesta === "S") {
    console.log("Adios!");
  } else {
    console.log("El programa continua");
  }
} while (respuesta !== "S");
