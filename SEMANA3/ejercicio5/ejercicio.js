function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    
    let total = 1;
    let i = 2;
    
    while (i <= numero) {
        total *= i;
        i++;
    }
    
    return total;
}

console.log('El factorial de 10 es:', calcularFactorial(10));
