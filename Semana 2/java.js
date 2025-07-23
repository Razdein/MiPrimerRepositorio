
let usuario = "andrew";

if (usuario === "andrew") {
  console.log("Bienvenido, administrador");
} else {
  console.log("Acceso restringido");
}


let precio = 1000;
let descuento = 50;
let precioFinal = precio - (precio * descuento/100);

console.log ("Precio final con descuento", precioFinal);

if (descuento >= 50) {
    console.log("Oferta especial!");
} else {
    console.log("");
}