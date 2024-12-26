---
sidebar_position: 0
title: Variables, tipos de datos y operadores. 
---

E
# Tipos de datos primitivos
En JavaScript, los tipos de datos primitivos son los tipos de datos básicos que no son objetos y no tienen métodos. Los tipos de datos primitivos en JavaScript son:


### String
```js
var name = 'Day';
```
### Números
Representa tanto números enteros como de punto flotante.
```js
var numeroEntero = 17;
var numeroNegativo = -4;
var numeroDecimal = 11.75;
```
### Booleanos
Representa un valor lógico que puede ser true o false.
```js
var estoyEntendiendo = true;
var estoyAburrido = false;
```

### Undefined
Representa una variable que ha sido declarada pero no asignada.
```js
var cajon1;
console.log(cajon1);
```

### Null
Representa la ausencia intencional de cualquier valor de objeto.
```js
var sinNada = null;
```


# Declaración de variables
Existen tres palabras claves para declarar una variable `var`, `let` y `const`

| Característica   | `var`                                      | `let`                                      | `const`                                      |
|------------------|--------------------------------------------|--------------------------------------------|----------------------------------------------|
| Alcance          | Función (function scope)                   | Bloque (block scope)                       | Bloque (block scope)                         |
| Hoisting         | Sí, pero no inicializa                     | Sí, pero no se puede usar antes de declarar| Sí, pero no se puede usar antes de declarar  |
| Re-declaración   | Permitida en el mismo ámbito               | No permitida en el mismo ámbito            | No permitida en el mismo ámbito              |
| Inmutabilidad    | No                                         | No                                         | Sí, la referencia no puede cambiar           |

* Alcance: Dónde se puede acceder a esa variable en el código.


## Alcance (Scope)

El alcance de una variable determina dónde se puede acceder a esa variable en el código.

### Alcance de Función (Function Scope)
Las variables declaradas con `var` tienen alcance de función. Esto significa que si una variable es declarada dentro de una función, no se puede acceder a ella desde fuera de esa función.

```js
function ejemploVar() {
  var x = 10; 
  if (true) { 
    var x = 20; // misma variable
    console.log(x); // 20
  }
  console.log(x); // 20
}
console.log(x); // Error: x is not defined
```

## Alcance de Bloque (Block Scope)
Las variables declaradas con `let` y `const` tienen alcance de bloque. Esto significa que solo se puede acceder a ellas dentro del bloque donde fueron declaradas (un bloque es cualquier código dentro de llaves {}).


```js
function ejemploLetConst() {
  let y = 10;
  const z = 30;
  if (true) { 
    let y = 20; // variable diferente
    const z = 40; // variable diferente
    console.log(y); // 20
    console.log(z); // 40
  }
  console.log(y); // 10, porque y dentro del if es una variable diferente
  console.log(z); // 30, porque z dentro del if es una variable diferente
}
console.log(y); // Error: y is not defined
console.log(z); // Error: z is not defined
```
