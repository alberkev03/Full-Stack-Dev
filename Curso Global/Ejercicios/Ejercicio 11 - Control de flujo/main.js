/* No es un ejercicio. Revisión simple de control de flujo*/


/* Estructuras condicionales: if, else, elseif */
let edad = 14;
if (edad >= 21) {
    console.log("Eres mayor que " + 21);
}
else if (edad < 21 && edad > 12) {
    console.log("Tienes menos de 21 pero más de 12");
}
else if (edad < 12)
    console.log("Tienes menos de 12 años.");
else {
    console.log("Eres un niño.");
}

/* Switch */
let adulto = 19;
switch (adulto) {
    case 21: 
        console.log("Eres un adulto")
        break;
    case 20: 
        console.log("Eres casi un adulto")
        break;
    case 19: 
        console.log("Tienes 19")
        break;
    default: console.log("No especificadco");
}    