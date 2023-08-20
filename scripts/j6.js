// Arreglo para almacenar las edades de los estudiantes
let edadesEstudiantes = [];

// Solicitar al usuario ingresar las edades de los 10 estudiantes
for (let i = 0; i < 10; i++) {
    let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i + 1}:`));
    edadesEstudiantes.push(edad);
}

// Contadores para estudiantes mayores y menores de edad
let mayoresDeEdad = 0;
let menoresDeEdad = 0;

// Calcular cuántos estudiantes son mayores y cuántos son menores de edad
for (let i = 0; i < edadesEstudiantes.length; i++) {
    if (edadesEstudiantes[i] >= 18) {
        mayoresDeEdad++;
    } else {
        menoresDeEdad++;
    }
}

// Mostrar los resultados
console.log(`Estudiantes mayores de edad: ${mayoresDeEdad}`);
console.log(`Estudiantes menores de edad: ${menoresDeEdad}`);