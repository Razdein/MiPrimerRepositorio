function suma (a, b) {
    console.log(arguments);
    return a + b;
}

resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);