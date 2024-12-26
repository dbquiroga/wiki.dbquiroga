---
sidebar_position: 7
title: Estructuras de Control
---

# Estructuras de Control

## Bucles en JavaScript

En JavaScript, existen varios tipos de bucles que se pueden utilizar para iterar sobre colecciones de datos. Los más comunes son `for`, `for...in` y `for...of`.

### `for`

El bucle `for` es el más común y se utiliza para iterar un número específico de veces. Es útil cuando se conoce de antemano el número de iteraciones.

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // Imprime los números del 0 al 4
}
```

### `for...in`
El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto. Es útil para recorrer todas las propiedades de un objeto, incluidas las propiedades heredadas.

```js
const objeto = { a: 1, b: 2, c: 3 };

for (let propiedad in objeto) {
  console.log(propiedad); // Imprime 'a', 'b', 'c'
  console.log(objeto[propiedad]); // Imprime 1, 2, 3
}
```

### `for...of`
El bucle for...of se utiliza para iterar sobre objetos iterables (como arrays, strings, mapas, conjuntos, etc.). Es útil para recorrer los valores de una colección.

```js
const array = [10, 20, 30];

for (let valor of array) {
  console.log(valor); // Imprime 10, 20, 30
}
```
::info 
- for: Se utiliza para iterar un número específico de veces. Ideal para cuando se conoce el número de iteraciones.
- for...in: Se utiliza para iterar sobre las propiedades enumerables de un objeto. No se recomienda para iterar sobre arrays debido a que también itera sobre las propiedades heredadas.
- for...of: Se utiliza para iterar sobre los valores de objetos iterables. Ideal para arrays y otras colecciones iterables.

