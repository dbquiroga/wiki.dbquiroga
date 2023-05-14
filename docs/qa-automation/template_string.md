---
sidebar_position: 7
title: Templare Sring
---

### Que es
Una nueva carcateristica de ES6, una nueva forma de mostrar textos, variables, datos e interpolar informacion. 

:::note
ECMAScript es el nombre estandarizado del lenguaje de programación comúnmente conocido como Javascript, y ECMAScript2015 (su año de publicación), o ES6, hace referencia a la 6ª versión de este lenguaje, superando a la anterior, ES5, nacida en 2011.
:::

```jsx title="Antes"
let nombre = 'Maria'
let apellido = 'Perez'
console.log('El nombre es: '+nombre +' y el apellido es '+apellido);
```
Antes habia que poner el string + variable, para luego colocar string + variable. 

```jsx title="Ahora"
let nombre = 'Maria'
let apellido = 'Perez'
console.log(`El nombre es: ${nombre} y el apellido es ${apellido}`);
```
Usando comillas invertidas se puede mostrar el mismo texto y con unos nuevos contenedores definidos con signo peso, ya no sera necesario colocar tantas comillas. 

```jsx title="Doble linea de texto Antes"
console.log('Linea 1 de texto\n'+
'\y linea 2 de texto');
```
Para ver las lineas una debajo de la otra, no era posible colocar un enter y ejecutarlo, habia que poner comillas y el signo mas para que esto sea visible. 

```jsx title="Doble linea de texto Ahora"
console.log(`Linea 1 de texto
y linea 2 de texto`);
```

### Interpolacion de expresiones

```jsx title="Suma Antes"
console.log('La suma de a + b es = '+(a+b)+''.');
```

```jsx title="Suma ahora"
console.log(`La suma de a + b es = ${a+b}`);
```


Mas info: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals]



