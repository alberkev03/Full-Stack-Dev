let fruta1 = prompt("En los siguientes 3 cuadros, coloca tus 3 frutas favoritas.");
let fruta2 = prompt();
let fruta3 = prompt();

let listaFrutas = [fruta1, fruta2, fruta3];
let listaOutput = listaFrutas.join(", ");
alert("Tus frutas favoritas: " + listaOutput);

