let personas = {
  162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
  4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
  786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
};
for (let id in personas) {
  for (let clave in personas[id]) {
    console.log(`${clave}: ${personas[id][clave]}`);
  }
  console.log("---------");
}
