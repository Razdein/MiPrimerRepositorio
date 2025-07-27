let auto = {
  marca: "Toyota",
  modelo: "Corolla",
  encender: function() {
    console.log("El auto está encendido");
  }
};

auto.color = "Rojo";

auto.encender(); // Llama al método
console.log(auto.modelo);
console.log(auto.color);


let persona = {
  nombre: "Lucía",
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};
//this.(nombre de la variable) llama a dicha variable
persona.saludar();