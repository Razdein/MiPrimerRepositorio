const productos = [
  { id: 1, nombre: "Café", favorito: false },
  { id: 2, nombre: "Té", favorito: false },
  { id: 3, nombre: "Medialuna", favorito: false },
  { id: 4, nombre: "Sandwich", favorito: false},
];

function renderProductos() {
  const ul = document.getElementById("lista");
  ul.innerHTML = "";
  productos.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.nombre} ${p.favorito ? "⭐" : ""}
      <button onclick="toggleFavorito(${i})">Favorito</button>
    `;
    ul.appendChild(li);
  });
}

function toggleFavorito(indice) {
  productos[indice].favorito = !productos[indice].favorito;
  renderProductos();
}

renderProductos();