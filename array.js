
// El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
// El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.
// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// El método pop() elimina y devuelve el último elemento de un arreglo.
// El método shift() elimina y devuelve el primer elemento de un arreglo.
// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);

// INCLUDES
// El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.

var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY
// El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

// SPLIT
// El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);


// JOIN
// El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// Métodos de recorrido

// FOREACH
// El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP
// El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);





function tablaDelSeis() {
    // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Tu código:
    var numerosPrimos = [0,1,2,3,4,5,6,7,8,9,10];
    var numerosxseis = numerosPrimos.map(num => num*6);
    return numerosxseis;
 }
 console.log(tablaDelSeis())
