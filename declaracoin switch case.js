// La declaración switch en JavaScript es una estructura de control que permite evaluar una expresión y ejecutar diferentes bloques de código dependiendo del valor de la expresión. Aquí tienes algunos ejemplos explicados para comprender mejor su funcionamiento:
// // Ejemplo 1: Días de la semana

var dia = 4;
var mensaje;

switch (dia) {
  case 1:
    mensaje = "Lunes";
    break;
  case 2:
    mensaje = "Martes";
    break;
  case 3:
    mensaje = "Miércoles";
    break;
  case 4:
    mensaje = "Jueves";
    break;
  case 5:
    mensaje = "Viernes";
    break;
  default:
    mensaje = "Fin de semana";
}

console.log(mensaje);

// En este ejemplo, la expresión evaluada es el valor de la variable dia. Dependiendo del valor de dia, se ejecutará el bloque de código correspondiente. Si dia es igual a 1, se asignará el mensaje "Lunes" a la variable mensaje. Si es igual a 2, se asignará "Martes", y así sucesivamente. Si el valor de dia no coincide con ninguno de los casos, se ejecutará el bloque default y se asignará el mensaje "Fin de semana" a la variable mensaje. En este caso, dado que dia tiene el valor de 4, el mensaje impreso será "Jueves".

//Ejemplo 2: Tipo de fruta:

var fruta = "manzana";
var mensaje;

switch (fruta) {
  case "manzana":
    mensaje = "Es una fruta roja";
    break;
  case "plátano":
    mensaje = "Es una fruta amarilla";
    break;
  case "naranja":
    mensaje = "Es una fruta naranja";
    break;
  default:
    mensaje = "No reconocido";
}

console.log(mensaje);

// En este ejemplo, la expresión evaluada es el valor de la variable fruta. Dependiendo del valor de fruta, se ejecutará el bloque de código correspondiente. Si fruta es igual a "manzana", se asignará el mensaje "Es una fruta roja" a la variable mensaje. Si es igual a "plátano", se asignará "Es una fruta amarilla", y así sucesivamente. Si el valor de fruta no coincide con ninguno de los casos, se ejecutará el bloque default y se asignará el mensaje "No reconocido" a la variable mensaje. En este caso, dado que fruta tiene el valor "manzana", el mensaje impreso será "Es una fruta roja".

// Estos ejemplos ilustran cómo utilizar la declaración switch en JavaScript para tomar decisiones basadas en el valor de una expresión y ejecutar diferentes bloques de código en función de ese valor.