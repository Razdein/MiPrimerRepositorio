let libro = {
    Título: "Crimen y Castigo",
    Autor: "Fiódor Dostoyevski",
    resumen:function() {
        console.log("Este libro fue escrito por " + this.Autor);
    }
};

libro.Tapa = "Tapa Dura";

libro.resumen();
console.log(libro.Título);
console.log(libro.Autor);
console.log(libro.Tapa);