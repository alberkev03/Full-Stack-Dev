/* Aprendido: Los objetos se crean DESPUES de declarar las variables en caso de ser prompt */

let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");
let edad = prompt("Ingresa tu edad:");
let cliente = confirm("¿Es cliente?");

let usuario = {
    nombre,
    apellido,
    edad,
    cliente,
}

console.log(usuario);
