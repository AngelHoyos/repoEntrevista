let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];

arreglo1.forEach(item => {
  if (item === "Pera" || item === "Limón") {
    frutas.push(item);
  } else {
    verduras.push(item);
  }
});

arreglo2.forEach(item => {
  if (item === "Manzana" || item === "Banano") {
    frutas.push(item);
  } else {
    verduras.push(item);
  }
});

console.log("Frutas:", frutas);
console.log("Verduras:", verduras);
