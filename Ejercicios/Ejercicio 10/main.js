let usuario = {};

usuario.nombre = prompt("Ingresa tu nombre:");
usuario.apellido = prompt("Ingresa tu apellido:");
usuario.edad = parseInt(prompt("Ingresa tu edad:"));
usuario.cliente = confirm("¿Es cliente?");

console.log(usuario);
