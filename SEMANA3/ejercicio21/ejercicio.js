function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function imprimirResultado(numero) {
    if (esPrimo(numero)) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }
}

let numero = 7;
imprimirResultado(numero);
