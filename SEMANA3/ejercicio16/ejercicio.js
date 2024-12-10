function facturacion() {
    let monto = parseFloat(prompt("Ingresa el monto de la factura:"));
    let medioPago = prompt("Ingresa el medio de pago (E = Efectivo, D = Débito, C = Crédito):").toUpperCase();
    let descuento = 0;

    if (monto >= 200 && monto <= 400) {
        if (medioPago === "E") {
            descuento = 0.3;
        } else if (medioPago === "D") {
            descuento = 0.2;
        } else if (medioPago === "C") {
            descuento = 0.1;
        }
    } else if (monto > 400) {
        descuento = 0.4;
    }

    let precioFinal = monto - (monto * descuento);
    return precioFinal;
}

let precioConDescuento = facturacion();
console.log('Precio con descuento $' + precioConDescuento.toFixed(2));
