---
sidebar_position: 0
title: Locators con Xpath
---

## Xpath absoluto
Empiezan con la barra diagonal (/)

Una barra solo es absoluto (/), dos barras es para xpaths relativos (//)

Tengamos en cuenta que siempre comenzara desde el primer elemento web, siendo este el elemento html

```jsx title="Ejemplo de xpath absoluto"
/html/body/div/div/div/div/div/form/div/input
```

Como se puede ver se hace muy largo el camino usando xpath absolutos, la ruta no se sabe a donde nos lleva a simple vista. Si se cambia la estructura del sitio, la ruta se modificaria. 

:::note
Si se hace click derecho en el elemento y se copia "full Xcapth" nos brinda la ruta desde el inicio hasta ese elemento.
:::


## Xpath relativo
Empiezan con dos barras (//) al comienzo, y se le agrega el (@) al atributo.

```jsx title="Estructura Xpath relativo"
//tagname[@atributo='valor']
```
Es mas descriptivo que el absoluto, es mas facil de entender.


:::note
Con xpath podemos encontrar elementos por su parentezco, es decir, encontrar de hijes a madres, o encontrar hermanas.
Esto también se puede solucionar usando los metodos de cypress.
:::

## Metodos en Xpaths
### Localizando elementos utilizando contains
Nos sirve para encontrar elementos de forma parcial,ya sean atributos o textos.

Para aquellos elementos que conocemos unicamente una parte de su valor y desconocemos otra parte de su valor, podemos usar el metodo contains para encontrarlos. 

```jsx title="Estructura metodo contains"
//button[contains(@atributo,"valor parcial")]
```


### Localizando elementos utilizando texto
Si queremos encontrar elementos por su texto particular usamos este metodo en los xpath.

```jsx title="Ejemplo de uso de metodo text"
- //button[text()='Male']
```

- text() no lleva ningun parametro queda vacio. Se iguala a una palabra con una palabra en la web.Tiene que ser exactamente el mismo texto para que lo encuentre. 

## Operadores logicos or
Una u otra condicion tiene que ser verdadera. Solo una tiene que ser verdadera
//input[@id='user' or @name='user']

## Operadores logicos and
Las dos condiciones las tiene que cumplir para ser encontrado. Ambas tiene que ser verdaderas.
//input[@id='user' and @name='user']

## Operadores logicos not
Niega alguna condicion de las dos, una tiene que ser verdadera la otra falsa.
//input[@id='user' not @name='user']

## Operadores logicos and not
//input[@id='user' and not @name='user']

## Starts-with
Lo mismo que la potencia en los selectores. Sirve para encontrar elementos con valores parciales que comience de una forma especifica.

```
//input[starts-with(@id,'us')]
```

:::note
Xpath no se usan casi en cypress
:::

## Combinar metodos
Es posible combinar metodos para encontrar un elemento. Ej:

```jsx title= "contains() + text()"
//span[contains(text(),'sesion')]
```
En este caso combinamos contains y dentro de su parametro, en el lugar del atributo, colocamos el metodo text(). Asi buscara que contenta un texto especifico. 


## Localizar elementos por parentezco
### Metodos

- child() :
- parent() :
- following-sibling() : Para encontrar hermanas menores. Hermanas menores son los elementos que esten debajo del elemento donde se esta "parade". 
- preceding-sibling() : Para encontrar hermanas mayores. Hermanas mayores son los elementos que esten arriba del elemento donde se esta "parade". 

```jsx title= "xpath usando metodo parent"
cy.xpath("//input[@value='Male']//parent::label").should('exist')
```

:::note
Primero se busca el elemento del cual se va a buscar la relacion correspondiente, despues se usa el parentezco (parent(),child(),sollowing-sibling(),etc), y despues se busca el elemento con el cual se va a interactuar. 
:::