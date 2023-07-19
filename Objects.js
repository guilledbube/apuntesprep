var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

 // console.log(perdsona.edad); 26
 persona.nombre= 'martin';
 //console.log(persona.nombre) martin
 persona.edad = 32;
 //console.log(persona.edad) 32



 // ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);


// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);



//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);



//BORRAR
delete autos.marcas;
console.log(autos);



// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };


// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);


// Muchas veces nos puede suceder que necesitemos utilizar una variable externa para guardarla como propiedad en un objeto. Es importante que en esos casos recordemos utilizar Bracket-Notation sin comillas para que funcione correctamente.

// ej:
FORMA INCORRECTA
// var comidas = {};
// var diferenciaDeNotaciones = function (propUno,propDos){
//     comidas.propUno = ['frutas','vegetales']:
//     comidas['propDOS'] = ['hamburguesa','papas fritas'];
// };
// diferenciaDeNotaciones('saludables','no saludables');
// console.log(comidas);

FORMA CORRECTA
// var comidas = {};
// var diferenciaDeNotaciones = function (propUno,propDos){
//     comidas[propUno] = ['frutas','vegetales']:
//     comidas[propDOS] = ['hamburguesa','papas fritas'];
// };
// diferenciaDeNotaciones('saludables','no saludables');
// console.log(comidas);
// }


// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);


// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);



var Mundo = {continentes:7,paises:195,oceanos:5}:
for (let prop in mundo) {
   console.log('Esta es la propiedad: ', prop);
   console.log('Este es el valor: ', mundo[prop]);
}


//THIS
var mascota = {
   animal: 'Perro',
   raza: 'Ovejero Alemán',
   amistoso: true,
   dueño: 'María López',
   info: () => {
      console.log('Mi perro es un  ' + this.raza);
   },
};


    
