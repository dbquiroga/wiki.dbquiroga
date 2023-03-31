---
sidebar_position: 4
---

##  Mocha
Para que cypress pueda correr los test necesita de mocha, quien le va a yudar a determinar que es un tets, que tiene que ejecutar primero o despues, cuantos test se tienen que ejecutar. Le indica a cypress que es un test y que deberia ser ejecutado como tal.

:::note
Mocha ya viene adentro de cypress, no hay que instalarlo. 
:::

### Cracateristicas
- Soporta distintos navegadores
- Crea reportes (pasaron, fallaron, resultados actuales y esperados)
- Permite usar cualquier libreria para hacer ascerciones
- Permite hooks (secciones que se ejecutan antes o despues del test)
- Permite filtrar ejecuciones (que test ignorar o ejecutar)
- Reporta tiempo de duracion de cada test

### Nomenclatura Mocha

** describe() **: Indica que esta seccion va a ser un test suite que incluirá los test cases. 

** it() **: Indica que se va a inicializar un test case.

** skip() **: Se utiliza para indicar que el/los test/ suite se ignoraran y no seran ejecutados.

** only() **: Se utiliza para indicar que el/los test/ suite serán los únicos en ser ejecutados del archivo. 

:::note
Usar solo un describe() por archivo
:::

:::note
El only se puede agregar al describe como al it. ej: describe.only(), it.only()
:::