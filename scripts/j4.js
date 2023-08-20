function calcularPrecioVenta(cantidad) {
    const precioUnitario = 250;
    let descuento = 0;
    
    if (cantidad >= 1 && cantidad <= 100) {
        descuento = 0.03;
    } else if (cantidad <= 200) {
        descuento = 0.05;
    } else if (cantidad <= 300) {
        descuento = 0.08;
    } else {
        descuento = 0.1;
    }
    
    const precioTotal = cantidad * precioUnitario * (1 - descuento);
    
    return precioTotal;
}

const cantidadHuevos = parseInt(prompt("Ingrese la cantidad de huevos a llevar:"));
const precioTotalVenta = calcularPrecioVenta(cantidadHuevos);
console.log(`El precio total de venta para ${cantidadHuevos} huevos es: ${precioTotalVenta.toFixed(2)}`);