/*
//EJE 1
let numero = parseInt(prompt("Introduce un número:"));

if (isNaN(numero)) {// Validar si el número es válido
  console.log("Debes ingresar un número válido");
} else {
  let contador = 1;

  while (contador <= numero) {// Mostrar los múltiplos de 5 hasta el número introducido por el usuario
    if (contador % 5 === 0) {
      console.log(contador);
    }
    contador++;
  }
}


//EJE 2
let numero1 = parseInt(prompt("Introduce el primer número (entre 1 y 50):"));
let numero2 = parseInt(prompt("Introduce el segundo número (entre 1 y 50):"));

if (isNaN(numero1) || isNaN(numero2) || numero1 < 1 || numero1 > 50 || numero2 < 1 || numero2 > 50) {// Validar si los números son válidos
  console.log("ingrese números válidos entre 1 y 50");
} else {
  // Mostrar los números del 1 al 50, agregando "¡Lotería!" cuando se encuentren los números indicados por el usuario
  for (let i = 1; i <= 50; i++) {
    if (i === numero1 || i === numero2) {
      console.log(i + " ¡Lotería!");
    } else {
      console.log(i);
    }
  }
}


//EJE 3
let numeros = []; // Arreglo para almacenar los números

while (true) {
  let numero = parseInt(prompt("Ingresa un número (ingresa 0 para terminar):"));

  if (numero === 0) {
    break; // Finaliza el bucle si se ingresa el número 0
  }

  if (!isNaN(numero)) {
    numeros.push(numero); // Agrega el número al arreglo si es un valor numérico
  }
}
console.log("Números capturados:", numeros); // Muestra la lista de números en la consola


//EJE 4
let palabras = []; // Arreglo para almacenar las palabras

while (true) {
  let entrada = prompt("Ingresa una letra o palabra (deja vacío para terminar):");

  if (entrada === "") {
    break; // Finaliza el bucle si no se ingresa ningún valor
  }

  palabras.push(entrada); // Agrega la entrada al arreglo
}

let resultado = palabras.join(""); // Concatena las palabras en un solo string sin espacios

console.log("Palabras capturadas:", resultado); // Muestra la concatenación de palabras en la consola
*/

//EJE 5
while (true) {
    let dia = prompt("Introduce un día de la semana (ej: lunes, martes, domingo):");
  
    if (dia === "domingo") {
      alert("Ve a descansar");
      break; // Termina el programa si se introduce domingo
    }
  
    switch (dia) {
      case "lunes":
        alert("Hoy es lunes.");
        break;
      case "martes":
        alert("Hoy es martes.");
        break;
      case "miércoles":
        alert("Hoy es miércoles.");
        break;
      case "jueves":
        alert("Hoy es jueves.");
        break;
      case "viernes":
        alert("Hoy es viernes.");
        break;
      case "sábado":
        alert("Hoy es sábado.");
        break;
      default:
        alert("Día no reconocido. Por favor, introduce un día válido.");
    }
  }