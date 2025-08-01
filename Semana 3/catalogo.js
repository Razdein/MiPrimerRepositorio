const productos = [
  { id: 1, nombre: "Leche", precio: 1400 },
  { id: 2, nombre: "Papel Higienico", precio: 2650 },
  { id: 3, nombre: "Queso Mozzarella", precio: 5000 },
  { id: 4, nombre: "Bananas", precio: 2600 },
  { id: 5, nombre: "Aceite", precio: 3500},
  { id: 6, nombre: "Azúcar", precio: 890},
  { id: 7, nombre: "Cerveza", precio: 3000}
];


document.getElementById("btnFiltrar").addEventListener("click", () => {
  const max = Number(document.getElementById("filtroPrecio").value);
  const filtrados = filtrarPorPrecio(max);
  mostrar(filtrados);
});

function filtrarPorPrecio(max) {
  return productos.filter(p => p.precio <= max);
}

function mostrar(lista) {
  const ul = document.getElementById("resultado");
  ul.innerHTML = "";
  lista.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio}`;
    ul.appendChild(li);
  });
}