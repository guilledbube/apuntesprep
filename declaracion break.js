// La declaración break en JavaScript se utiliza dentro de bucles para terminar la ejecución del bucle de forma prematura, sin completar todas las iteraciones. Aquí tienes algunos ejemplos explicados para comprender mejor su funcionamiento:

// Ejemplo 1: Búsqueda de un elemento en un arreglo

var arreglo = [2, 4, 6, 8, 10, 12, 14];
var elementoBuscado = 10;
var encontrado = false;

for (var i = 0; i < arreglo.length; i++) {
  if (arreglo[i] === elementoBuscado) {
    encontrado = true;
    break; // Termina el bucle si el elemento es encontrado
  }
}

if (encontrado) {
  console.log("Elemento encontrado en el índice:", i);
} else {
  console.log("Elemento no encontrado");
}

// En este ejemplo, se utiliza un bucle for para iterar a través de un arreglo de números. Dentro del bucle, se verifica si el elemento actual (arreglo[i]) es igual al elemento buscado (elementoBuscado). Si los elementos coinciden, se establece la variable encontrado en true y se ejecuta la declaración break, lo que provoca que se salga del bucle de inmediato. Después del bucle, se verifica si el elemento fue encontrado o no, y se imprime el mensaje correspondiente.

// Ejemplo 2: Suma de números hasta cierto límite

var limite = 20;
var suma = 0;

for (var i = 1; i <= limite; i++) {
  suma += i;
  if (suma > 50) {
    break; // Termina el bucle si la suma supera el valor de 50
  }
}

console.log("Suma:", suma);

// En este ejemplo, se utiliza un bucle for para sumar números hasta llegar a un límite (limite). Dentro del bucle, se agrega el valor actual (i) a la variable suma. Si en algún momento la suma supera el valor de 50, se ejecuta la declaración break, lo que provoca que se salga del bucle. Después del bucle, se imprime el valor final de la suma.

// Estos ejemplos ilustran cómo utilizar la declaración break en JavaScript para terminar la ejecución de un bucle de forma prematura. Esto puede ser útil cuando se encuentra un resultado deseado, se alcanza un límite o se cumple alguna condición de salida.