let tareas = [
  { nombre: "Estudiar JS", completado: false },
  { nombre: "Practicar CSS", completado: true },
  { nombre: "Practicar HTML", completado: true },
];

for(let tarea of tareas) {
    console.log(tarea.nombre + " → Completado: " + tarea.completado);
}