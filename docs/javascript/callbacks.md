---
sidebar_position: 3
title: Callbacks
---

## Que son?
Son un tipo de funciones que se pasan por parametro a otras funciones. 

A lo que se llama callback en si es cuando una funcion, supongamos funcion 1, ejecuta otra funcion, supongamos la 2, ese proceso es el llamado ** callback **

Los callbacks aseguran que una funcion no se va a ejecutar antes de que se complete una tarea

#### Ejemplo
```js
function devuelvoUsuario() {
   return 'CAMILO';
}
function devuelvoSaludo() {
   return 'Hola';
}
function saludar(cb1, cb2) {
   return cb1() + ' ' + cb2();
}
var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);
```
