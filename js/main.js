// ============================================================ //
// PRÁCTICA CONDICIONALES                                       //
// Enunciados: 1.3.4-a-condicionales-en-javascript.md (1 al 5)  //
//             1.3.9-practicas.md (ejercicios 5, 6 y 7)         //
// Los resultados salen por la consola del navegador (F12).     //
// Los ejercicios 5, 6 y 7 de 1.3.9 piden datos con prompt().   //
// ============================================================ //


// =========== ejercicio 1=============== //

// Ejercicio 1: Verificar si un número es positivo, negativo o cero
// Escribe una función llamada verificarNumero que reciba un número
// y devuelva si el número es positivo, negativo o cero.

/**
 * Dice si un número es positivo, negativo o cero.
 * Se mira primero el > 0, luego el < 0 y lo que queda solo puede ser 0.
 * @param {number} numero - Número a comprobar.
 * @returns {string} "positivo", "negativo" o "cero".
 */
function verificarNumero(numero) {

    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

console.log(verificarNumero(8));    // positivo
console.log(verificarNumero(-3));   // negativo
console.log(verificarNumero(0));    // cero
console.log(verificarNumero(1));    // positivo (el 1 es el límite que antes fallaba)


// ================ ejercicio 2============== //

// Ejercicio 2: Edad legal para votar
// Escribe una función llamada puedeVotar que reciba la edad de una persona
// y devuelva "Puede votar" o "No puede votar" (18 años o más).

/**
 * Comprueba si una persona tiene edad de votar.
 * @param {number} edad - Edad de la persona en años.
 * @returns {string} "Puede votar" si tiene 18 o más, si no "No puede votar".
 */
function puedeVotar(edad) {

    if (edad >= 18) {
        return "Puede votar";
    } else {
        return "No puede votar";
    }
}

console.log(puedeVotar(25));   // Puede votar
console.log(puedeVotar(18));   // Puede votar (justo el límite)
console.log(puedeVotar(17));   // No puede votar
console.log(puedeVotar(0));    // No puede votar


// ================ ejercicio 3============== //

// Ejercicio 3: Mayor de dos números
// Escribe una función llamada mayorDeDos que reciba dos números y devuelva
// el mayor de los dos. Si son iguales, devuelve un mensaje indicando que son iguales.

/**
 * Devuelve el mayor de dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number|string} El mayor, o un mensaje si son iguales.
 */
function mayorDeDos(a, b) {

    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Los dos números son iguales";
    }
}

console.log(mayorDeDos(4, 9));    // 9
console.log(mayorDeDos(10, 2));   // 10
console.log(mayorDeDos(5, 5));    // Los dos números son iguales
console.log(mayorDeDos(-1, -7));  // -1


// ================ ejercicio 4============== //

// Ejercicio 4: Determinar si un número es divisible por 5
// Escribe una función llamada esDivisiblePorCinco que reciba un número
// y devuelva true si es divisible por 5 o false si no lo es.

/**
 * Comprueba si un número es divisible entre 5 (resto 0).
 * @param {number} numero - Número a comprobar.
 * @returns {boolean} true si es divisible por 5, false si no.
 */
function esDivisiblePorCinco(numero) {

    if (numero % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(esDivisiblePorCinco(25));   // true
console.log(esDivisiblePorCinco(7));    // false
console.log(esDivisiblePorCinco(0));    // true (0 entre 5 es 0, sin resto)
console.log(esDivisiblePorCinco(-10));  // true


// ================ ejercicio 5============== //

// Ejercicio 5: Clasificar nota de examen
// Escribe una función llamada clasificarNota que reciba una nota entre 0 y 100
// y devuelva una clasificación:
//   Nota >= 90: "Excelente"
//   Nota >= 70 y < 90: "Buena"
//   Nota >= 50 y < 70: "Regular"
//   Nota < 50: "Insuficiente"

/**
 * Clasifica una nota de examen entre 0 y 100.
 * Se va de la nota más alta a la más baja con else if, así que cada
 * rama ya sabe que no cumple las anteriores y no hace falta poner "< 90", etc.
 * @param {number} nota - Nota entre 0 y 100.
 * @returns {string} "Excelente", "Buena", "Regular", "Insuficiente"
 *                   o un aviso si la nota no está entre 0 y 100.
 */
function clasificarNota(nota) {

    if (nota < 0 || nota > 100) {
        return "Nota no válida: tiene que estar entre 0 y 100";
    } else if (nota >= 90) {
        return "Excelente";
    } else if (nota >= 70) {
        return "Buena";
    } else if (nota >= 50) {
        return "Regular";
    } else {
        return "Insuficiente";
    }
}

console.log(clasificarNota(95));    // Excelente
console.log(clasificarNota(90));    // Excelente (límite)
console.log(clasificarNota(89));    // Buena
console.log(clasificarNota(70));    // Buena (límite)
console.log(clasificarNota(69));    // Regular
console.log(clasificarNota(50));    // Regular (límite)
console.log(clasificarNota(49));    // Insuficiente
console.log(clasificarNota(0));     // Insuficiente
console.log(clasificarNota(100));   // Excelente
console.log(clasificarNota(101));   // Nota no válida
console.log(clasificarNota(-5));    // Nota no válida


// ============================================================ //
// PRÁCTICAS 1.3.9 QUE USAN CONDICIONALES                        //
// ============================================================ //

// =========== 1.3.9 - EJERCICIO 5 ================ //

// EJERCICIO 5: programa que 1. solicite 3 notas por teclado, 2. saque la media
// y 3. muestre: menor que 5 'SUSPENSO'; >= 5 y < 7 'APROBADO';
// >= 7 y <= 10 'sobresaliente'.

/**
 * Calcula la media de tres notas.
 * @param {number} nota1 - Primera nota.
 * @param {number} nota2 - Segunda nota.
 * @param {number} nota3 - Tercera nota.
 * @returns {number} La media aritmética.
 */
function mediaTresNotas(nota1, nota2, nota3) {

    return (nota1 + nota2 + nota3) / 3;
}

/**
 * Dice qué calificación corresponde a una nota (o media) de 0 a 10.
 * @param {number} nota - Nota de 0 a 10.
 * @returns {string} "SUSPENSO", "APROBADO", "sobresaliente" o un aviso si no es válida.
 */
function calificarMedia(nota) {

    if (nota < 0 || nota > 10) {
        return "Nota no válida: tiene que estar entre 0 y 10";
    } else if (nota < 5) {
        return "SUSPENSO";
    } else if (nota < 7) {
        return "APROBADO";
    } else {
        return "sobresaliente";
    }
}

console.log(calificarMedia(mediaTresNotas(2, 3, 4)));    // media 3  -> SUSPENSO
console.log(calificarMedia(mediaTresNotas(5, 6, 7)));    // media 6  -> APROBADO
console.log(calificarMedia(mediaTresNotas(8, 9, 10)));   // media 9  -> sobresaliente
console.log(calificarMedia(5));                          // APROBADO (límite)
console.log(calificarMedia(7));                          // sobresaliente (límite)
console.log(calificarMedia(10));                         // sobresaliente (límite)

// Parte interactiva: pedimos las 3 notas con prompt (devuelve texto, lo pasamos a Number)
let notaUno = prompt("Ejercicio 5 (1.3.9): escribe la primera nota (0 a 10)");
let notaDos = prompt("Ejercicio 5 (1.3.9): escribe la segunda nota (0 a 10)");
let notaTres = prompt("Ejercicio 5 (1.3.9): escribe la tercera nota (0 a 10)");

// Si alguna se ha dejado vacía, se ha cancelado o no es un número, avisamos y no calculamos
if (notaUno === null || notaDos === null || notaTres === null ||
    notaUno === "" || notaDos === "" || notaTres === "" ||
    isNaN(Number(notaUno)) || isNaN(Number(notaDos)) || isNaN(Number(notaTres))) {
    console.log("Ejercicio 5 (1.3.9): hay que escribir las tres notas como números.");
} else {
    let media = mediaTresNotas(Number(notaUno), Number(notaDos), Number(notaTres));
    console.log(`La media es ${media}: ${calificarMedia(media)}`);
}


// =========== 1.3.9 - EJERCICIO 6 ================ //

// EJERCICIO 6: ingreso de un número por teclado. Muestra por pantalla
// si ese número es de 1 cifra, 2 cifras o 3 cifras.

/**
 * Dice cuántas cifras tiene un número entero (hasta 3).
 * Se compara con 10 y 100 en vez de contar caracteres. Los negativos
 * se pasan a positivo antes, porque el signo menos no es una cifra.
 * @param {number} numero - Número entero.
 * @returns {string} "1 cifra", "2 cifras", "3 cifras", o un aviso si no encaja.
 */
function contarCifras(numero) {

    if (numero % 1 !== 0) {
        return "Escribe un número entero (sin decimales)";
    }
    if (numero < 0) {
        numero = -numero;           // -45 se trata como 45
    }

    if (numero < 10) {
        return "1 cifra";
    } else if (numero < 100) {
        return "2 cifras";
    } else if (numero < 1000) {
        return "3 cifras";
    } else {
        return "Más de 3 cifras";
    }
}

console.log(contarCifras(7));     // 1 cifra
console.log(contarCifras(0));     // 1 cifra
console.log(contarCifras(42));    // 2 cifras
console.log(contarCifras(999));   // 3 cifras
console.log(contarCifras(-45));   // 2 cifras
console.log(contarCifras(1000));  // Más de 3 cifras
console.log(contarCifras(3.5));   // aviso de decimales

let respuestaCifras = prompt("Ejercicio 6 (1.3.9): escribe un número entero");

if (respuestaCifras === null || respuestaCifras === "" || isNaN(Number(respuestaCifras))) {
    console.log("Ejercicio 6 (1.3.9): no has escrito un número válido.");
} else {
    console.log(`${respuestaCifras}: ${contarCifras(Number(respuestaCifras))}`);
}


// =========== 1.3.9 - EJERCICIO 7 ================ //

// EJERCICIO 7: solicita al usuario que escriba un color. Si ese color existe
// que lo traduzca al inglés, si no que muestre un mensaje de error.
// (Los colores que conoce el programa son los de abajo en el switch.)

/**
 * Traduce un color del español al inglés con un switch.
 * Se pasa a minúsculas para que "Rojo" y "ROJO" valgan igual que "rojo".
 * @param {string} color - Color en español.
 * @returns {string} El color en inglés, o un mensaje de error si no lo conoce.
 */
function traducirColor(color) {

    switch (color.toLowerCase()) {
        case "rojo":
            return "red";
        case "azul":
            return "blue";
        case "verde":
            return "green";
        case "amarillo":
            return "yellow";
        case "negro":
            return "black";
        case "blanco":
            return "white";
        case "naranja":
            return "orange";
        case "morado":
            return "purple";
        case "rosa":
            return "pink";
        case "gris":
            return "gray";
        default:
            return "Error: ese color no lo conozco";
    }
}

console.log(traducirColor("rojo"));      // red
console.log(traducirColor("Verde"));     // green (mayúscula inicial)
console.log(traducirColor("AZUL"));      // blue
console.log(traducirColor("turquesa"));  // Error: ese color no lo conozco
console.log(traducirColor(""));          // Error: texto vacío

let respuestaColor = prompt("Ejercicio 7 (1.3.9): escribe un color en español");

if (respuestaColor === null) {
    console.log("Ejercicio 7 (1.3.9): has cancelado, no hay color que traducir.");
} else {
    console.log(`${respuestaColor} -> ${traducirColor(respuestaColor)}`);
}
