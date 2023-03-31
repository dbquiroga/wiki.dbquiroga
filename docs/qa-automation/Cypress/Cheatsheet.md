---
sidebar_position: 5
---

### Cosas de cypress

```jsx title="Para poder imprimir algo en pantalla con cypress"
cy.log('Mi primer log')
```

```jsx title="Para ejecutar cypress"
npx cypress open
```
:::note
Acordarse de estar dentro de la carpeta donde se instalo cypress antes de ejecutarlo
:::

#### Para correr un solo test
```
npx cypress run --spec "./cypress/e2e/primer-desafio.cy.js"
```

### Cosas Javascript

#### Metodos que vamos a usar siempre

- ** Math.random() ** : devuleve un numero entre 0 y 1
- ** Math.flor() **: Promedia hacia abajo, se usa para que no devuleva numeros decimales
- ** Math.ceil() **: Promedia hacia arriba, se usa para que no devuleva numeros decimales
- ** forEach() **: 

```js title="Ejemplo de uso random"
const numeroRandom = Math.ceil(Math.random() * 1000)
```
En este caso se multiplica por mil para obtener un numero mas grande. 




### Tip de la vida

#### Clipboard
Se puede acceder a lo ultimo que copiamos, a los ultimas 20 cosas que copiamos, esto facilita mucho la vida. Para windows es ** windows + v**
Para linux no es tan simple, hay que instalar uno que permita manejar el historico del clipboard en tu sistema operativo. 

En mi caso uso ubuntu, asique voy a probar ** clipit **, luego de instalarlo el comando es ** Ctrl + Alt + h **






