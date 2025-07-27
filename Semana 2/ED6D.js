let mascota = {
    nombre: "Michi",
    especie: "Gato",
    edad: 5,
    gustos:function() {
        console.log("A " + this.nombre + " le gusta rasguñar los muebles");
    }
};

function calcularEdadGatoHumana(mascota) {
  let edadGato = mascota.edad;
  let edadHumana;

  if (edadGato === 1) {
    edadHumana = 15;
  } else if (edadGato === 2) {
    edadHumana = 24;
  } else if (edadGato > 2) {
    edadHumana = 24 + (edadGato - 2) * 4;
  } else {
    edadHumana = 0;
  }

  return edadHumana;
}

let resultado = calcularEdadGatoHumana(mascota);


mascota.gustos();
console.log(`${mascota.nombre} tiene ${resultado} años humanos.`);