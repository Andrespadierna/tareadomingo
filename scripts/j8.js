// Definimos un arreglo de personas con sus propiedades
const personas = [
    { nombre: 'Persona1', hijos: 2 },
    { nombre: 'Persona2', hijos: 0 },
    { nombre: 'Persona3', hijos: 1 },

    // Agrega más personas aquí con sus datos
  ];
  
  // Variables para contar personas con y sin hijos, y para calcular el total de hijos
  let personasConHijos = 0;
  let personasSinHijos = 0;
  let totalHijos = 0;
  
  // Recorremos el arreglo de personas y realizamos los cálculos
  for (const persona of personas) {
    if (persona.hijos > 0) {
      personasConHijos++;
      totalHijos += persona.hijos;
    } else {
      personasSinHijos++;
    }
  }
  
  // Calculamos el promedio de hijos (evitamos dividir por cero)
  const promedioHijos = personasConHijos > 0 ? totalHijos / personasConHijos : 0;
  
  // Mostramos los resultados en la consola
  console.log(`Personas con hijos: ${personasConHijos}`);
  console.log(`Personas sin hijos: ${personasSinHijos}`);
  console.log(`Promedio de hijos: ${promedioHijos.toFixed(2)}`);