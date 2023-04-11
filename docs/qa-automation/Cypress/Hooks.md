---
sidebar_position: 9
---

Los hooks nos ayudan a estructurar el codigo, son metodos que se ejecutan antes del test y despues del test. 

## beforeEach

Este metodo se ejecuta ** antes ** de cada test y se repite nuevamente cada vez que se inicia un nuevo test (cada vez que haya un it).

:::note
Se coloca dentro del describe
:::

```js
beforeEach("Se ejecuta al iniciar cada test"),() =>{
    cy.log("test iniciado")
}
```

### El beforeEach es util para:
- Visitar la página
- Ingresar al sistema
- Setear las precondiciones
- Obtener sesiones creadas

## afterEach

Este metodo se ejecuta al finalizar cada test y se repite nuevamente cada vez que un test finaliza (cada vez que finalice un it).

```js
beforeEach("Se ejecuta al finalizar cada test"),() =>{
    cy.log("test finalizado")
}
```

### El afterEach es util para:
- Resetear el estado de lo datos/variables
- Finalizar reportes individuales
- Finalizar procesos inicializados por cada test

## before
Se ejecuta una única vez antes de que un suite de pruebas se inicie.(por cada describe). Se usa para obtener datos de una base de datos para luego guardarlos y usarlos. Para configurar el ambiente de pruebas.
```js
beforeEach("Se ejecuta al iniciar una suite de pruebas"),() =>{
    cy.log("Suite de pruebas inicializada")
}
```

## after
Se ejecuta una única vez antes de que un suite de pruebas finalice.(por cada describe).
```js
beforeEach("Se ejecuta al finalizar una suite de pruebas"),() =>{
    cy.log("Suite de pruebas finalizada")
}
```

### El after es util para:
- Cerrar conexion con base de datos
- Cerrar conexion con el ambiente
- Enviar reportes a los destinatarios
- Si cambiamos datos o eliminamos datos y queremos dejar como estaban al inicio


:::note
Definir  las variables en el describe
Definir los valores de las variables en el before.
:::