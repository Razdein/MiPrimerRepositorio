let numeros = [1, 2, 3, 4, 5, 6];

for (let n of numeros) {
  if (n % 2 === 0) {
    console.log(n + " es par");
  }
}

//dice los numeros pares de la lista

for (let n of numeros) {
  if (n % 2 != 0) {
    console.log(n + " es inpar");
  }
}

//dice los numeros impares de la lista


//la estructura es for(...) {...}
//dentro de los (), nombras c/u de los valores
//y con las {}, haces la operacion siguiente

//la estructura de if (...) {console.log(...);}
//dentro de los(), la condicion que queres que se cumpla
//dentro de console.log(), lo que el texto va a "mostrar"

//la estructura de if else es la misma que if pero puedes tener infinitos de estos

//la estructura de else {}
//dentro de los {}, poner la condicion que queres que se muestre
//o puede ser un console.log o un mensaje directamente