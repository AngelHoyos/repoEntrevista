function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

function esAprobado(promedio) {
    return promedio >= 6;
}

function mostrarResultado(aprobado) {
    if (aprobado) {
        console.log("El estudiante ha aprobado.");
    } else {
        console.log("El estudiante ha reprobado.");
    }
}

let notas = [7, 6, 5];
let promedio = calcularPromedio(notas);
let aprobado = esAprobado(promedio);
mostrarResultado(aprobado);
