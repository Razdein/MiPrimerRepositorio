const usuarios = [
    {id: 1, nombre: "Juan", edad: 18, email: "juancito18@gmail.com"},
    {id: 2, nombre: "Pedro", edad: 16, email: "pedrito_pocchia@gmail.com"},
    {id: 3, nombre: "Pablo", edad: 25, email: ""},
    {id: 4, nombre: "Franco", edad: 12, email: "francau@gmail.com"},
    {id: 5, nombre: "Susana", edad: 80, email:""},
    {id: 6, nombre: "Celeste", edad: 23, email: "celes05@gmail.com"},
];
const nombres = usuarios.map(usuario => usuario.nombre);
console.log(usuarios);

const mayores = usuarios.filter(u => u.edad >= 18);
console.log(mayores);

const correo = usuarios.filter(usuario => usuario.email !== "");
console.log(correo);