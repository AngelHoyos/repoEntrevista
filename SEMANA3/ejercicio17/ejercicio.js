function miFuncion(num1, num2, operacion) {
    if (operacion === 'suma') {
        return num1 + num2;
    } else if (operacion === 'resta') {
        return num1 - num2;
    } else if (operacion === 'multiplicacion') {
        return num1 * num2;
    } else if (operacion === 'division') {
        if (num2 === 0) {
            return "Error: No se puede dividir por cero.";
        }
        return num1 / num2;
    } else {
        return "Error: Operación inválida.";
    }
}

console.log(miFuncion(2, 5, "suma"));          // 7
console.log(miFuncion(2, 5, "resta"));         // -3
console.log(miFuncion(2, 5, "multiplicacion"));// 10
console.log(miFuncion(2, 5, "division"));      // 0.4
console.log(miFuncion(2, 0, "division"));      // Error: No se puede dividir por cero.
console.log(miFuncion(2, 5, "potencia"));      // Error: Operación inválida.
