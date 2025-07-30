const form = document.getElementById("formRegistro");
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const message = document.getElementById("message");
const errores = document.getElementById("errores");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const erroresDetectados = [];

  if (nombre.value.trim() === "") {
    erroresDetectados.push("El nombre es obligatorio ❌");
  }

  if (telefono.value.length < 8) {
    erroresDetectados.push("El teléfono debe tener al menos 8 dígitos ❌");
  }

  if (message.value.length < 10) {
    erroresDetectados.push(" El mensaje debe tener al menos 10 caracteres ❌");
  }

  if (erroresDetectados.length > 0) {
    errores.innerHTML = erroresDetectados.join("<br>");
  } else {
    errores.innerHTML = "Contacto enviado correctamente ✅";
    form.reset();
  }
});