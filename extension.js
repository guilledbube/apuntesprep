// las clases son como plantillas o modelos que nos van a permitir crear un molde de propiedades y metodos para luego ser utilizado como representacion de una entidad en nuestro codigo
// en este ejemplo crearemos una clase persona que tendra como propiedades nombre y edad por lo que las vamos a describi en su constructor, ademas esta clase tendra un metodo llamado saludar que hara un console log


// Extender clases nos va a permitir tener una clase general que le heredará propiedades y métodos a otras clases. De esta forma, podremos generar distintas sub-entidades que puedan mantener sus propias características, pero que compartan algunas otras generales.


class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
 }
 let martin = new Persona('Martin', 26);
 martin.saludar();
//EXPLICACION DEL CODIGO
//  Se define la clase Persona utilizando la sintaxis de clases introducida en ECMAScript 6. La clase tiene un constructor que toma dos parámetros: nombre y edad. Dentro del constructor, se utilizan this.nombre y this.edad para asignar los valores de los parámetros a las propiedades nombre y edad del objeto que se está creando.

// La clase Persona también tiene un método llamado saludar. Este método es una función que imprime un mensaje en la consola utilizando el valor de las propiedades nombre y edad. El mensaje es de la forma "Hola, mi nombre es <nombre>. Tengo <edad>". Las variables this.nombre y this.edad hacen referencia a las propiedades nombre y edad del objeto actual (es decir, la instancia de Persona que se está creando).

// Luego, se crea una instancia de la clase Persona llamada martin. Para hacerlo, se utiliza la palabra clave new, seguida del nombre de la clase (Persona), y se pasan los valores "Martin" y 26 como argumentos al constructor. Esto crea un nuevo objeto con las propiedades nombre y edad establecidas en "Martin" y 26, respectivamente.

// Finalmente, se llama al método saludar en la instancia martin utilizando la notación de punto (martin.saludar()). Esto ejecuta la función saludar definida en la clase Persona para la instancia martin, lo que imprime en la consola el mensaje "Hola, mi nombre es Martin. Tengo 26".

// En resumen, el código define una clase Persona con un constructor y un método saludar, crea una instancia de esta clase llamada martin con los valores "Martin" y 26, y luego invoca el método saludar en la instancia martin para imprimir un mensaje personalizado en la consola.



 class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia; 
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
 let martin = new Persona('Martín', 26);
 let programador = new Programador('María', 37, 4);
 martin.saludar();
 programador.codear();

// EXPLICACION DEL CODIGO:
//  Se define la clase Persona utilizando la sintaxis de clases en ECMAScript 6. La clase tiene un constructor que toma dos parámetros: nombre y edad. Dentro del constructor, se utilizan this.nombre y this.edad para asignar los valores de los parámetros a las propiedades nombre y edad del objeto que se está creando.

// La clase Persona también tiene un método llamado saludar. Este método es una función que imprime un mensaje en la consola utilizando el valor de las propiedades nombre y edad. El mensaje es de la forma "Hola, mi nombre es <nombre>. Tengo <edad>".

// Se define la clase Programador, que extiende la clase Persona utilizando la palabra clave extends. Esto significa que Programador hereda todas las propiedades y métodos de la clase Persona.

// El constructor de la clase Programador toma tres parámetros: nombre, edad y añosDeExperiencia. Luego, utiliza la palabra clave super para llamar al constructor de la clase Persona y pasar los valores nombre y edad. Esto asegura que las propiedades nombre y edad se inicialicen correctamente utilizando el constructor de la clase Persona.

// Después de llamar a super, el constructor de la clase Programador asigna el valor del parámetro añosDeExperiencia a la propiedad añosDeExperiencia del objeto que se está creando.

// La clase Programador también tiene un método llamado codear. Este método es una función que imprime un mensaje en la consola utilizando el valor de las propiedades nombre y añosDeExperiencia. El mensaje es de la forma "Soy <nombre>. Codeo desde hace <añosDeExperiencia> años".

// Se crean dos instancias de las clases: martin y programador. La instancia martin se crea utilizando la clase Persona y se le pasan los valores "Martín" y 26 como argumentos. La instancia programador se crea utilizando la clase Programador y se le pasan los valores "María", 37 y 4 como argumentos.

// Se llama al método saludar en la instancia martin utilizando la notación de punto (martin.saludar()). Esto ejecuta la función saludar definida en la clase Persona para la instancia martin, lo que imprime en la consola el mensaje "Hola, mi nombre es Martín. Tengo 26".

// Se llama al método codear en la instancia programador utilizando la notación de punto (programador.codear()). Esto ejecuta la función codear definida en la clase Programador para la instancia programador, lo que imprime en la consola el mensaje "Soy María. Codeo desde hace 4 años".

// En resumen, el código define dos clases, una clase Persona con un constructor y un método saludar, y una clase Programador que hereda de Persona y tiene un constructor y un método codear. Luego, crea dos instancias de las clases y llama a los métodos correspondientes en cada instancia para imprimir mensajes personalizados en la consola.