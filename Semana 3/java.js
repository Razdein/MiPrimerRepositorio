const botones = document.querySelectorAll("button");

botones.forEach((btn) => {
  console.log(btn.textContent);
});
//solo lee el contenido del texto de los botones y los muestra en la consola

const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Hola desde JS!";
document.body.appendChild(nuevoElemento);

//solo agrega un pequeño mensaje al final de un texto p.
