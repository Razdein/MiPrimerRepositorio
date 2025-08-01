const numeros = [7, 25, 3, 45, 10, 30, 21, 8];
console.log("Los numeros son: " + numeros);

const duplicados = numeros.map(function(numero) {
  return numero * 2;
});
console.log("Los numeros multiplicados por dos dan: " + duplicados);

const pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log("Los numeros pares son " + pares);

const suma = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
}, 0);
console.log("La suma total de los numeros es " + suma);

