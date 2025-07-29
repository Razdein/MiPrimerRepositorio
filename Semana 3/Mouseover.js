const caja = document.getElementById("caja");

caja.addEventListener("mouseover", () => {
  caja.style.backgroundColor = "lightgreen";
  console.log("Mouse sobre la caja");
});

caja.addEventListener("mouseout", () => {
  caja.style.backgroundColor = "lightblue";
  console.log("Mouse fuera de la caja");
});

//esto sirve para detectar cada vez que el mouse pasar por dentro y fuera de la caja