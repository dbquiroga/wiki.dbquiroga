---
sidebar_position: 11
title: Instalar Xpath Plugin
---

## Paso 1 : Instalar cypress Xpath Plugin

~~~
npm install cypress-xpath --save-dev
~~~

:::note
Chequear que en package.json se encuentre:
~~~
"cypress-xpath": "^2.0.1"
~~~
:::

## Paso 2 : Agregar plugin a index.js
Ve a /support/e2e.js/ y coloca:
~~~
// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath');
~~~

## Paso 3 : Usalo
~~~
cy.xpath("//input[@id='user']").type('Day')
~~~
