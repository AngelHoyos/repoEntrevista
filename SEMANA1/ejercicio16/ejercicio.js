let aCoef = parseFloat(prompt("Ingresa el valor de a"));
let bCoef = parseFloat(prompt("Ingresa el valor de b"));
let cCoef = parseFloat(prompt("Ingresa el valor de c"));
let discriminante = Math.pow(bCoef, 2) - (4 * aCoef * cCoef); // Usamos Math.pow para calcular el cuadrado de b
if (discriminante < 0) {
    console.log("No tiene soluciones reales");
} else {
    let raiz1 = (-bCoef + Math.sqrt(discriminante)) / (2 * aCoef); // Usamos Math.sqrt para la raíz cuadrada
    let raiz2 = (-bCoef - Math.sqrt(discriminante)) / (2 * aCoef);
    console.log("Las raíces de la ecuación son: " + raiz1 + " y " + raiz2);
}