let  sumaMayores=0
let  sumaMenores=0
let  contadorMayores=0
let  contadorMenores=0
let promayores=0
let promenores=0
let  estudiantes = prompt("Ingrese cantidad de estudiantes");
for (let i=1 ; i<=estudiantes ; i++){
    let codig = Number(prompt ("Ingrese el codigo" + i));
    let edad= Number(prompt ("Ingrese la edad" + i));

    if (edad > 21)  {
        sumaMayores=sumaMayores+edad
        contadorMayores=contadorMayores+1
    } else {
        sumaMenores=sumaMenores+edad
        contadorMenores=contadorMenores+1
    }
    
} 
if (contadorMayores > 0) {
    promayores = sumaMayores / contadorMayores
    console.log("El promedio de los estudiantes mayores de 21 es " + promayores)
} else {
    console.log("No hay estudiantes mayores de 21")
}

if (contadorMenores > 0) {
    promenores = sumaMenores / contadorMenores 
    console.log("El promedio de los menores de 21 es " + promenores)
} else {
    console.log("No hay estudiantes menores de 21")
}