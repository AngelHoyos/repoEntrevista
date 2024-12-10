function calcularArea(largo, ancho) {
    return largo * ancho;
}

function calcularPerimetro(largo, ancho) {
    return 2 * (largo + ancho);
}

let largo = 5;
let ancho = 3;

console.log(`El área del rectángulo es: ${calcularArea(largo, ancho)} unidades cuadradas.`);
console.log(`El perímetro del rectángulo es: ${calcularPerimetro(largo, ancho)} unidades.`);
