const lista = document.getElementById("tareas");
const botonAgregar = document.getElementById("agregar");
let contador = 4;

// Delegación de eventos: escuchar clics en la <ul>
lista.addEventListener("click", function(evento) {
  if (evento.target.tagName === "LI") {
    alert("Hiciste clic en: " + evento.target.textContent);
  }
});

// Agregar elementos nuevos a la lista
botonAgregar.addEventListener("click", () => {
  const nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = "Tarea " + contador++;
  lista.appendChild(nuevaTarea);
});