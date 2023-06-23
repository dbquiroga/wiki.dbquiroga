---
sidebar_position: 1
title: Objetos y mejotodos en js
---
JavaScript tiene una serie de objetos globales integrados que nos son de utilidad.Uno de estos objetos es Math, que tiene varios métodos propios.

## Objeto Math

### Math.pow
Este método nos permite potenciar un número. Por ejemplo, 2 elevado al cubo, sería igual a multiplicar 2 x 2 x 2. Es decir, 8.

El primer número es la base, y el segundo será la potencia.

```js
Math.pow(2,3);
//8
```

### Math.round & Math.floor & Math.ceil
A veces necesitamos redondear un número decimal, ya que muchas veces las operaciones matemáticas pueden resultar en números con coma. Para esto, JavaScript nos ofrece tres métodos

`* Math.round *` redondeará el número decimal al entero más próximo. Es decir que, si tenemos 0.49, el resultado será 0. En cambio, si tenemos 0.50, el resultado será 1.


`** Math.floor **` redondeará el número decimal al entero de menor valor. Por ejemplo, si tenemos el número 5.93, el resultado será 5.


`** Math.ceil **` este método, al contrario que el anterior, redondeará un número al siguiente entero. Por ejemplo, si tenemos 3.27 el resultado será 4.

```js
Math.round(0.49)
//0

Math.round(0.50)
//1

Math.floor(5.93)
//5

Math.ceil(3.27)
//4
```
### Math.max & Math.min
Estos dos métodos nos permitirán conocer el valor máximo o mínimo de un conjunto de números. Por ejemplo, si tenemos los números 1, 2, 3, 4 y 5, el máximo será el 5 y el mínimo el número 1.


```js
Math.max(1, 2, 3, 4, 5);
// 5

Math.min(1, 2, 3, 4, 5);
// 1
```

### Math.random
–
Este último método nos permitirá generar un número aleatorio. Es importante tener en cuenta que el número que se generará es decimal, y puede ser cualquiera entre el 0 y el 1.

```js
Math.random();
//0.9745698546
```

:::note
En caso que quisieramos que nos de un numero random en un rango mayor, deberiamos multiplicarlo por un numero
ej: `Math.random()*1000;`
:::


### Metodo hasOwnProperty
Este metodo nos sirve para saber si un objeto tiene una propiedad especifica. Responde con un booleano, true o false.
```js
// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);
```

### Metodo keys
Devuelve un arreglo con todas las propiedades de un objeto
```js
// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);
```

### Recorrer objetos FOR-IN
De la misma manera que podíamos recorrer los elementos de un arreglo, podemos recorrer las propiedades de un objeto junto con sus valores.

El bucle For-In nos permite iterar sobre un objeto utilizando dos variables pivot. Una representa el objeto que recorremos, y la otra la propiedad en la que se está realizando la iteración. Utilizando ambos valores podremos acceder al valor de cada propiedad del objeto.

```js
for (let prop in mundo) {
   console.log('Esta es la propiedad: ', prop);
   console.log('Este es el valor: ', mundo[prop]);
}
```


### This
Se hace referencia a un contexto. Dentro de este lenguaje de programación existe un objeto global llamado this. Este nos permite manipular el contexto en el que las funciones y la información está siendo ejecutada. De esta forma podremos tener un alcance más preciso dentro de nuestro código.
```js
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
```

### Object.create
El metodo create de los objetos nos permite crear un nuevo objeto a partir de un prototypre especificado 
```js
// creamos un objeto con un objeto vacio como proto
var obj = Object.create({})
console.log(obj) //Object {}

// creamos un objeto a partir de un prototipo de Objeto
var obj = Object.create(Object.prototype)
// es lo mismo que crear un objeto vacio literal
var obj = {}
```

### Object.assign
Nos permite agregar propiedades a un objeto pasado por parametro:
```js
var obj = {}

// No es necesario guardar el resultado porque los objetos se pasan por referencia
Object.assign(obj,{nombre:'EMi', apellido: 'Chequer'})

obj.nombre //Emi
```


