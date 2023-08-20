let cliente = prompt
("Ingrese su compra, (1) si deseas un carro o moto, (2) si deseas una bicicleta o una patineta y (3) si su compra sera de un sccoter electrico ")

if (cliente === "1") {
    console.log("Su descuento sera de 15%");
} else if (cliente === "2") {
console.log("Su descuento sera de 10%");
} else if (cliente === "3") {
    console.log("Su descuento sera de 5%")
} else {
    console.log("No escogiste un numero dentro de nuestro rango")
}