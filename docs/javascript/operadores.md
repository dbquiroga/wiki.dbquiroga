
---
sidebar_position: 6
title: Operadores
---


# Operadores
Los operadores son símbolos que realizan operaciones sobre uno o más operandos. Algunos ejemplos de operadores en JavaScript incluyen:

- Operadores de asignación: `=`, `+=`, `-=`, etc.
- Operadores aritméticos: `+`, `-`, `*`, `/`, `%`, etc.
- Operadores de comparación: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`, etc.
- Operadores lógicos: `&&`, `||`, `!`
- Operadores de incremento/decremento: `++`, `--`

## Operadores de comparación: igualdad en JavaScript

En JavaScript, existen dos operadores principales para comparar valores: `==` (igualdad débil) y `===` (igualdad estricta).


### `==` (Igualdad débil)

El operador `==` compara dos valores para ver si son iguales, pero realiza una conversión de tipo si es necesario. Esto significa que dos valores pueden ser considerados iguales incluso si no son del mismo tipo.


```js
console.log(5 == '5'); // true, porque '5' se convierte a número antes de la comparación
console.log(null == undefined); // true, porque se consideran iguales en igualdad débil
console.log(0 == false); // true, porque false se convierte a 0 antes de la comparación
```


### === (Igualdad estricta)

El operador `===` compara dos valores para ver si son iguales, pero no realiza ninguna conversión de tipo. Esto significa que dos valores solo se consideran iguales si son del mismo tipo y tienen el mismo valor.

```js
console.log(5 === '5'); // false, porque los tipos son diferentes
console.log(null === undefined); // false, porque los tipos son diferentes
console.log(0 === false); // false, porque los tipos son diferentes
console.log(5 === 5); // true, porque ambos son del mismo tipo y tienen el mismo valor
```
::info En resumen, es recomendable usar === (igualdad estricta) para evitar errores inesperados debido a la conversión de tipos implícita que realiza == (igualdad débil)
