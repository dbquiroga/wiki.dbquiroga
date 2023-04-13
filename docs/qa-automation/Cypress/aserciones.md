---
sidebar_position: 11
title: Aserciones
---
Las ascerciones se usan para comparar lo que se espera que ocurra con el resultado actual. Las aserciones validan si la prueba paso. 

Cypress no tiene una herramienta propia, apra esto utiliza chai. ** Chai ** tiene diferentes tipos de aserciones.

- BDD : basadas en el comportamiento
- TDD: basadas para comprobar el resultado del caso de prueba

## Tipo de aserciones (mas comunes)
- assert
- have.text
- expect, es necesario usar invoke. : expect se usa mas en API, ya que no son elementos webs. 
- should : sirve para elementos web, unicamente.
- have.css

### Metodo should
Podemos encadenar aserciones agregando .and()

:::note
cypress no tiene soft asercion, si el test falla, no continua corriendo el test
:::


