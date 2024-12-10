let productos = {
  Papa: 200,
  Arroz: 150,
  Lentejas: 120,
  Aceite: 400
};
for (let producto in productos) {
  console.log(`${producto}: $${productos[producto]}`);
}
