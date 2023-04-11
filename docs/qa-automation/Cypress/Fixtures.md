---
sidebar_position: 10
---
Los fixtures sirven para cuando queremos poner los datos de entrada de manera previa en un archivo para despues poder utilizarlos en nuestros test.

## JSON File
Estos datos se colocan dentro de un objeto JSON.

```json title ="Ejemplo JSON file"
{
    "username":"pushingit",
    "password":"123456!"
}
```

:::nota
Se crea el JSON dentro de /fixtures/
ej: fixture.json
:::

## Usar los datos del Json en nuestros tests
Utilizando la funcion "cy.fixture". 

Dentro del test que queremos llamar los datos del fixture se coloca:

```js title ="Ejemplo JSON file"
describe('Hooks', () =>{
    let datos Fixture;

cy.fixture('example').then((data) => {
    datosFixture = data
})
beforeEach('Before each', () =>{
    cy.get(#pass).type(datosFixture.usuario)
})

})
```

- .then() : Lo que hace es transferir lo que devuelva el metodo fixture a una variable que definamos nosotros. 