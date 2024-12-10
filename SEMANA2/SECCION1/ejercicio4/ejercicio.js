let angulo1 = parseInt(prompt("Ingresa el primer ángulo"));
let angulo2 = parseInt(prompt("Ingresa el segundo ángulo"));
let angulo3 = parseInt(prompt("Ingresa el tercer ángulo"));
let suma=angulo1 + angulo2 + angulo3;
if (suma=== 180) {
  console.log("Los ángulos corresponden a un triángulo");
} else {
  console.log("Los ángulos no corresponden a un triángulo");
}
