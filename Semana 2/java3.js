function calcularEdad(anioNacimiento) {
  const anioActual = new Date().getFullYear();
  return anioActual - anioNacimiento;
}

console.log("Tu edad es:", calcularEdad(2004));