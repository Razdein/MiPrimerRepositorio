const form = document.getElementById("formContacto");
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const lista = document.getElementById("listaContactos");
const errores = document.getElementById("errores");

let contactos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const erroresDetectados = [];

  if (nombre.value.trim() === "" || telefono.value.length < 8) return;

  const nuevoContacto = {
    nombre: nombre.value.trim(),
    telefono: telefono.value.trim(),
  };

  contactos.push(nuevoContacto);
  mostrarContactos();
  form.reset();
});

function mostrarContactos() {
  lista.innerHTML = "";

  contactos.forEach((contacto, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${contacto.nombre}</strong> - ${contacto.telefono}
      <button onclick="eliminarContacto(${index})">❌</button>
    `;
    lista.appendChild(li);
  });
}

function eliminarContacto(indice) {
  contactos.splice(indice, 1);
  mostrarContactos();
}