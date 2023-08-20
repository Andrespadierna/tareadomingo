// Función para calcular el subtotal, IVA y total
function calcularTotal() {
    var subtotal = 0;
    var iva = 0;
    var total = 0;

    // Recorremos los 5 productos
    for (var i = 1; i <= 5; i++) {
        var nombreProducto = prompt("Ingrese el nombre del producto " + i + ":");
        var precioProducto = parseFloat(prompt("Ingrese el precio del producto " + i + ":"));

        subtotal += precioProducto;
    }

    // Calculamos el IVA y el total
    iva = subtotal * 0.19;
    total = subtotal + iva;

    // Mostramos los resultados
    console.log("Subtotal (sin IVA): $" + subtotal.toFixed(2));
    console.log("IVA (19%): $" + iva.toFixed(2));
    console.log("Total a pagar: $" + total.toFixed(2));
}

// Llamamos a la función para calcular e imprimir los resultados
calcularTotal();