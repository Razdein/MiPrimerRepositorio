const productos = [
  { id: 1, nombre: "Fideos", precio: 1450 },
  { id: 2, nombre: "Té", precio: 1700 },
  { id: 3, nombre: "Yerba", precio: 2000 },
  { id: 4, nombre: "Azúcar", precio: 890 },
  { id: 5, nombre: "Galletitas", precio: 1650},
  { id: 6, nombre: "Queso Rallado", precio: 4000},
  { id: 7, nombre: "Caballa", precio: 3200}
];

function filtrarPorPrecio(maxPrecio) {
  return productos.filter(p => p.precio <= maxPrecio);
}

console.log(filtrarPorPrecio(2000));