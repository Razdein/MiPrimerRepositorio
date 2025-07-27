let persona = {
  nombre: "Andrés",
  edad: 25,
  profesion: "Desarrollador"
};

persona.edad = 27; //podes modficar una variable fuera del let
persona.pais = "Argentina"; //o introducir una completamente nueva

console.log(persona.nombre);  
console.log(persona["edad"]);
console.log(persona.profesion);
console.log(persona.pais);