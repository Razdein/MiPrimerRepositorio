const input = document.querySelector("#miInput");

input.addEventListener("input", () => {
  console.log("Texto cambiado:", input.value);
});

//esto detecta lo qu esta escrito en el input y lo muestra en la consola

document.addEventListener("keydown", (e) => {
  console.log("Tecla presionada:", e.key);
});

//esto detecta cualquier tecla presionada y lo muestra en la consola