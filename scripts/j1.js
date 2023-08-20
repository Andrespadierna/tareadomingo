// Solicitar al usuario ingresar el número del mes
var numeroMes = parseInt(prompt("Ingresa el número del mes (1 al 12):"));

// Validar la entrada del usuario
if (numeroMes >= 1 && numeroMes <= 12) {
    // Array con la cantidad de días en cada mes
    var diasPorMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Determinar si el mes tiene 30 o 31 días
    var mensaje = "";
    if (numeroMes === 2) {
        mensaje = "El mes de febrero tiene 28 o 29 días.";
    } else if (diasPorMes[numeroMes] === 30) {
        mensaje = "El mes tiene 30 días.";
    } else {
        mensaje = "El mes tiene 31 días.";
    }

    // Mostrar el resultado
    console.log(mensaje);
} else
    console.log("Número de mes inválido. Por favor, ingresa un número del 1 al 12.");