---
sidebar_position: 2
---
# Casos de prueba + Jira

Los test case son  el paso a paso con el cual vamos a definir que una funcionalidad funciona de manera exitosa. 

Se usa [Jira](https://wallcryptostreet.atlassian.net/) como herramienta para alojar estos Test_case por medio del gestor de testing [Zephyr](https://marketplace.atlassian.com/apps/1014681/zephyr-for-jira-test-management?hosting=cloud&tab=overview)

## **¿Cómo se usan estas herramientas?**

Una vez que inicies sesion en Jira, dentro de una historia hay que asignar como Label: "BDD_feature", esto permite que escribamos en Gherking dentro de la historia para posteriormente automatizar el test. 

### **Asignar label**

Primero se asigna la label "BDD_Feature" de esta manera se define que esa historia va a tener escenarios asignados.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9fc2cc56-e719-46f3-8000-ffb95b464b09/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9fc2cc56-e719-46f3-8000-ffb95b464b09/Untitled.png)

### **Definir los Scenarios**

Luego, sirigirse a Feature Content, alli se habilitara la opción para escribir escenarios. Los escenarios se redactan como historia, para que se pueda realizar una lectura rápida de que trata. Siendo la estructura: 

     "**Como** [quien/rol] **Quiero** [que/acción] **Para** [razón/beneficio]"

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84878135-0eab-4704-b6f2-d20db99660fb/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84878135-0eab-4704-b6f2-d20db99660fb/Untitled.png)

### Ahora si... a escribir test case!

Los test case se escriben en gherking para luego estos sean automatizados. La estructura de Gherking es la siguiente:

antes.. ¿Que es Gherking? 

Gherking es un lenguaje a bajo nivel para definir el comportamiento del usuario en sistemas.

**Estructura de Gherkin**

**Given** Cumplo una precondición

**When** Ejecuto una acción

**Then** Observo este resultado

Documentacion sobre Gherking: [https://cucumber.io/docs/gherkin/reference/](https://cucumber.io/docs/gherkin/reference/)

La estructura de un test case será:

- Descripción corta del caso de prueba
- Pre condiciones para ejecutar el caso de prueba
- Paso a paso (escrito en Gherkin)
- Resultado esperado
- 

!Importante no olvidar linkear al issue al cual se estan escribiendo los test case.

Los test case se colocan dentro del escenario que lo describe. 

Ej de un escenario con test case escrito: