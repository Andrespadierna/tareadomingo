// Pedir al usuario que ingrese un número entre 1 y 12
var numero = parseInt(prompt("Por favor, ingresa un número entre 1 y 12:", 1));

// Verificar si el número está dentro del rango válido
if (numero >= 1 && numero <= 12) {
    // Definir constantes para los nombres de los meses y los signos del zodiaco
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    const signosZodiaco = [
        "Capricornio - Acuario", "Acuario - Piscis", "Piscis - Aries",
        "Aries - Tauro", "Tauro - Géminis", "Géminis - Cáncer",
        "Cáncer - Leo", "Leo - Virgo", "Virgo - Libra",
        "Libra - Escorpio", "Escorpio - Sagitario", "Sagitario - Capricornio"
    ];

    var mes = meses[numero - 1];
    var signos = signosZodiaco[numero - 1];

    // Imprimir el resultado
    console.log("Mes: " + mes);
    console.log("Signos del Zodiaco: " + signos);
} else {
    console.log("Número fuera de rango. Por favor, ingresa un número entre 1 y 12.");
}