function generarContraseña() {
    let longitud = parseInt(prompt("¿Cuántos caracteres debe tener la generarContraseña?"));
    
    if (isNaN(longitud) || longitud <= 0) {
        console.log("Por favor, ingresa un número válido mayor a 0.");
        return;
    }

    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let generarContraseña = "";
    
    for (let i = 0; i < longitud; i++) {
        let randomIndex = Math.floor(Math.random() * caracteres.length);
        generarContraseña += caracteres[randomIndex];
    }

    console.log('La generarContraseña generada es:', generarContraseña);
}

generarContraseña();
