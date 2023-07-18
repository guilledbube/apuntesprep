// La declaración continue en JavaScript se utiliza dentro de bucles para omitir la ejecución del resto del bloque de código actual en una iteración específica y pasar a la siguiente iteración. Aquí tienes algunos ejemplos explicados para comprender mejor su funcionamiento:

// Ejemplo 1: Impresión de números impares


// for (var i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       continue; // Omite la ejecución del resto del bloque si el número es par
//     }
//     console.log(i);
//   }
  
//   En este ejemplo, se utiliza un bucle for para iterar del 1 al 10. Dentro del bucle, se verifica si el número actual (i) es par usando el operador de módulo %. Si i es par, se encuentra que es divisible por 2 sin dejar residuo y se ejecuta la declaración continue, lo que provoca que se omita la ejecución del resto del bloque de código y se pase a la siguiente iteración. Como resultado, solo se imprimirán los números impares del 1 al 10.


// Ejemplo 2: Saltear elementos en un arreglo

var arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < arreglo.length; i++) {
  if (arreglo[i] % 3 === 0) {
    continue; // Omite la ejecución del resto del bloque si el elemento es divisible por 3
  }
  console.log(arreglo[i]);
}

// En este ejemplo, se utiliza un bucle for para iterar a través de un arreglo de números del 1 al 10. Dentro del bucle, se verifica si el elemento actual (arreglo[i]) es divisible por 3 usando el operador de módulo %. Si el elemento es divisible por 3, se ejecuta la declaración continue, lo que hace que se omita la ejecución del resto del bloque de código y se pase al siguiente elemento del arreglo. Como resultado, se imprimirán todos los elementos del arreglo, excepto aquellos que sean divisibles por 3.

// Estos ejemplos ilustran cómo utilizar la declaración continue en JavaScript para saltar la ejecución del resto del bloque de código en una iteración específica de un bucle y pasar a la siguiente iteración. Esto puede ser útil para omitir ciertas acciones o elementos en una estructura de repetición.

