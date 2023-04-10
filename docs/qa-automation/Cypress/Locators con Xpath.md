---
sidebar_position: 0
title: Locators con Xpath
---

## Xpath absoluto


## Xpath relativo

Empiezan con la barra diagonal doble (//)

//tagname


## Localizando elementos utilizando contains


## Localizando elementos utilizando texto
Si queremos encontrar elementos por su texto, podemos usar el metodo

```jsx title="Ejemplo de uso de metodo text"
- //button[text()='Male']
```

- text() no lleva ningun parametro queda vacio. Se iguala a una palabra con una palabra en la web.Tiene que ser exactamente el mismo texto para que lo encuentre. 



## Css selector

si no sabemos el inicio ni el final usamos el asteristo

potencia para buscar por elementos 


## Operadores logicos or

//input[@id='user' or @name='user']

## Operadores logicos and
//input[@id='user' and @name='user']

## Operadores logicos not
Niega alguna condicion de las dos, una tiene que ser verdadera la otra falsa
//input[@id='user' not @name='user']

## Operadores logicos and not
//input[@id='user' and not @name='user']


## Starts-with
LO mismo que la potencia en los selectores, encontrar elementos con valores parciales que comience de una forma especifica.

//input[starts-with(@id,'us')]


:::note
Xpath no se usan casi en cypress
:::


