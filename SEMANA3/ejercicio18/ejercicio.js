function contarBasesADN(cadena) {
    let contador = {
        A: 0,
        C: 0,
        G: 0,
        T: 0
    };

    for (let i = 0; i < cadena.length; i++) {
        let base = cadena[i].toUpperCase();  // Aseguramos que la letra sea mayúscula
        if (contador.hasOwnProperty(base)) {
            contador[base]++;
        }
    }

    return `Cantidad de A: ${contador.A}, Cantidad de C: ${contador.C}, Cantidad de G: ${contador.G}, Cantidad de T: ${contador.T}`;
}

console.log(contarBasesADN("AACAGT"));
