// La estructura de bucle do-while en JavaScript se utiliza para repetir un bloque de código mientras se cumpla una condición específica. La diferencia principal con el bucle while es que el bloque de código se ejecuta al menos una vez antes de evaluar la condición. Aquí tienes algunos ejemplos explicados para comprender mejor su funcionamiento:

// Ejemplo 1: Contador ascendente

var i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

// En este ejemplo, el bloque de código se ejecuta al menos una vez, ya que la condición i <= 5 se evalúa después de la primera iteración. El valor inicial de i es 1. Dentro del bloque de código, se imprime el valor actual de i y luego se incrementa en 1. El bucle se repetirá mientras i sea menor o igual a 5. En cada iteración, se imprimirá el valor de i y se incrementará hasta que i sea 6. En este caso, los números impresos serán del 1 al 5.


// Ejemplo 2: Validación de entrada

var password;
var ingresoCorrecto = false;

do {
  password = prompt("Introduce la contraseña:");
  if (password === "12345") {
    ingresoCorrecto = true;
  } else {
    alert("Contraseña incorrecta. Inténtalo nuevamente.");
  }
} while (!ingresoCorrecto);

alert("Contraseña correcta. Bienvenido.");

// En este ejemplo, se utiliza un bucle do-while para solicitar al usuario que ingrese una contraseña hasta que la contraseña ingresada sea correcta (en este caso, "12345"). El bloque de código se ejecutará al menos una vez antes de evaluar la condición. Dentro del bucle, se utiliza la función prompt() para solicitar al usuario que ingrese la contraseña. Si la contraseña ingresada coincide con "12345", se establece la variable ingresoCorrecto en true, lo que hace que la condición del bucle sea falsa y se finalice el bucle. Si la contraseña no coincide, se muestra una alerta de contraseña incorrecta y se repite el bucle hasta que se ingrese la contraseña correcta.

// Estos ejemplos ilustran cómo utilizar la estructura de bucle do-while en JavaScript para repetir un bloque de código al menos una vez y luego evaluar una condición para determinar si se debe continuar o salir del bucle.
