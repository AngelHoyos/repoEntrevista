function generarContraseña(palabraBase) {
    const caracteresEspeciales = "!@#$%^&*()";
    const numeros = "0123456789";
    
    let nuevaContraseña = palabraBase;
    nuevaContraseña += numeros[Math.floor(Math.random() * numeros.length)];
    nuevaContraseña += caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
    
    return nuevaContraseña;
}

function imprimirContraseña(contraseña) {
    console.log(`La contraseña generada es: ${contraseña}`);
}

let palabraBase = "seguridad";
let contraseña = generarContraseña(palabraBase);
imprimirContraseña(contraseña);
