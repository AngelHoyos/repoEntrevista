let continentes = {
  Asia: ["China", "India", "Japón", "Corea del Sur", "Indonesia"],
  Europa: ["España", "Francia", "Italia", "Alemania", "Reino Unido"],
  América: ["Argentina", "Brasil", "Canadá", "México", "Chile"],
  África: ["Nigeria", "Sudáfrica", "Egipto", "Kenia", "Uganda"],
  Oceanía: ["Australia", "Nueva Zelanda", "Fiji", "Papúa Nueva Guinea", "Samoa"]
};
let continente = prompt("Ingrese un continente:");
alert(`Países de ${continente}: ${continentes[continente].join(", ")}`);
