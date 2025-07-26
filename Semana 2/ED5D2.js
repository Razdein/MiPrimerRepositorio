let notas = [8, 9, 10, 7];
let suma = 0;

for (let nota of notas) {
  console.log(suma += nota);
}

let promedio = suma / notas.length; 
console.log("El Promedio es ", promedio);

//calcula el promedio de una lista de notas, sumandolas una en una.