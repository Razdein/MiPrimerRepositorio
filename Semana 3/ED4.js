const productos = [
  { id: 1, nombre: "Café", precio: 1200 },
  { id: 2, nombre: "Té", precio: 900 },
  { id: 3, nombre: "Medialuna", precio: 700 },
  { id: 4, nombre: "Sandwich", precio: 2500 }
];

const nombres = productos.map(p => p.nombre);
console.log(nombres);

const baratos = productos.filter(p => p.precio < 1000);
console.log(baratos);

const sandwich = productos.find(p => p.nombre === "Sandwich");
console.log(sandwich);

console.log(productos.some(p => p.precio < 500));
console.log(productos.every(p => p.precio > 100));
