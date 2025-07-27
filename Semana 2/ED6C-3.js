function presentar(persona) {
    return "Hola, soy " + persona.nombre + " y tengo " + persona.edad + " años";
}
let alumno = {nombre: "María", edad: 30};
console.log(presentar(alumno));