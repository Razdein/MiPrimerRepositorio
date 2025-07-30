const form = document.getElementById("formRegistro");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const clave = document.getElementById("clave");
const errores = document.getElementById("errores");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const erroresDetectados = [];

  if (nombre.value.trim() === "") {
    erroresDetectados.push("❌ El nombre es obligatorio.");
  }

  if (!email.value.includes("@")) {
    erroresDetectados.push("❌ El email debe ser válido.");
  }

  if (clave.value.length < 6) {
    erroresDetectados.push("❌ La contraseña debe tener al menos 6 caracteres.");
  }

  if (!/[A-Z]/.test(clave.value)) {
    erroresDetectados.push("❌ La contraseña debe tener al menos 1 mayúscula.");
  }

  if (erroresDetectados.length > 0) {
    errores.innerHTML = erroresDetectados.join("<br>");
  } else {
    errores.innerHTML = "Formulario enviado correctamente ✅";
    form.reset();
  }
})