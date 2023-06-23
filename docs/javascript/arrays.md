---
sidebar_position: 4
title: Arrays/ Arreglos
---

Los arreglos o arrays son lo que se conoce como objeto global dentro de Javascript, y que nos permiten guardar y gestionar información. Esto nos será de gran utilidad cuando queramos almacenar datos. 

Dentro de los arreglos existen dos conceptos que pueden parecer similares, pero son muy diferentes.

1. Por un lado tenemos lo que se conoce como ** elemento **. Los elementos son aquellos datos que hayamos guardado. 

2. Por otro lado, está el concepto de ** índice **. Los índices no representan al dato en sí mismo, sino la posición en la que se está guardando. Un detalle muy importante que hay que destacar es que, en los arreglos, siempre se comienza a contabilizar las posiciones desde el número cero, no el uno.
```js
// Lista de compras
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

// Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);
```
### Metodos 
Los arreglos tienen asociados una serie de metodos. Los metodos son funciones nativas/preestablecidas en los lenguajes de programación.Length es un metodo. 

#### Length
Devuelve el número de elementos que hay en la matriz o la longitud de la cadena de caracteres.

```js
// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);
```

#### Métodos de inserción

1. El método `push()` añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.

2. El método `pop()` elimina y devuelve el último elemento de un arreglo.

3. El método `unshift()` agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.

4. El método `shift()` elimina y devuelve el primer elemento de un arreglo.


#### Métodos varios

1. El método `includes()` determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.

2. El método `every()` determina si todos los elementos en un arreglo satisfacen una misma condición.

3. El método `split()` convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.

4. El método `join()` convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.
```js
// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);
```

#### Métodos de recorrido
1. El método `forEach()` nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.

2. El método `map()` también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
```js
// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);
```