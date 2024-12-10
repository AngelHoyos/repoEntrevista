let productos = prompt("Ingresa el nombre del producto (lentejas, crema, arroz, vino)").toLowerCase();

if (productos === "lentejas" || productos === "arroz") {
  console.log(`${productos} no paga IVA.`);
} else if (productos === "vino" || productos === "crema") {
  console.log(`${productos} paga IVA.`);
} else {
  console.log("Producto no válido.");
}
