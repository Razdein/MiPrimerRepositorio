const btn = document.getElementById("modoOscuroBtn");
const contenido = document.getElementById("contenido");

btn.addEventListener("click", () => {
  contenido.classList.toggle("oscuro");
  btn.textContent = contenido.classList.contains("oscuro")
    ? "Modo claro"
    : "Modo oscuro";
});
