let numeros = [1, 2, 3];
numeros.push(4);        // [1, 2, 3, 4]  
numeros.pop();          // [1, 2, 3]     
numeros.unshift(0);     // [0, 1, 2, 3]  
numeros.shift();        // [1, 2, 3]

console.log(numeros.splice(0));

// 🔹 push() → Agrega al final
// 🔹 pop() → Quita el último
// 🔹 shift() → Quita el primero
// 🔹 unshift() → Agrega al principio
// 🔹 indexOf() → Busca un valor
// 🔹 includes() → Verifica si existe un valor
// 🔹 splice() → Quita o reemplaza elementos