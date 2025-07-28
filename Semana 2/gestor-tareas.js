let tareas = [];

const form = document.getElementById("formTarea");
const input = document.getElementById("inputTarea");
const lista = document.getElementById("listaTareas");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const texto = input.value.trim();

  if (texto !== "") {
    tareas.push(texto);
    input.value = "";
    mostrarTareas();
  }
});

function mostrarTareas() {
  lista.innerHTML = "";

  tareas.forEach(function(tarea, index) {
    const li = document.createElement("li");
    li.textContent = tarea;
    li.style.cursor = "pointer";

    li.addEventListener("click", function() {
      tareas.splice(index, 1);
      mostrarTareas();
    });

    lista.appendChild(li);
  });
}

// Evento	Cuándo se dispara
// click	Cuando el usuario hace clic
// submit	Cuando se envía un formulario
// mouseover	Cuando el mouse pasa por encima de un elemento
// keydown	Cuando se presiona una tecla
// change	Cuando cambia el valor de un input, select, etc.

//Método .push() agrega un nuevo elemento al final del array
//Método .splice() Sirve para eliminar, reemplazar o insertar elementos en cualquier posición del array.