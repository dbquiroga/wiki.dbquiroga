---
sidebar_position: 2
---
# Casos de prueba + Jira

Los test cases son el paso a paso con el cual vamos a definir que una funcionalidad funciona de manera exitosa.

Se usa [Jira](https://www.atlassian.com/es/software/jira) como herramienta para alojar estos test cases por medio del gestor de testing [Zephyr](https://marketplace.atlassian.com/apps/1014681/zephyr-for-jira-test-management?hosting=cloud&tab=overview).

## ¿Cómo se usan estas herramientas?

Una vez que inicies sesión en Jira, dentro de una historia hay que asignar como Label: `BDD_feature`. Esto permite escribir los escenarios en Gherkin dentro de la historia para posteriormente automatizarlos.

### Asignar label

Se asigna la label `BDD_Feature` para indicar que esa historia tendrá escenarios de prueba asociados.

### Definir los Scenarios

Dirigirse a **Feature Content**, donde se habilitará la opción para escribir escenarios. Los escenarios se redactan como una historia de usuario con la estructura:

> **Como** [rol] **quiero** [acción] **para** [beneficio]

### Escribir test cases en Gherkin

Gherkin es un lenguaje que describe el comportamiento del sistema en lenguaje natural, legible tanto por el equipo técnico como por el negocio.

**Estructura:**

```gherkin
Given  # precondición del escenario
When   # acción que ejecuta el usuario
Then   # resultado esperado
And    # para encadenar pasos adicionales
```

**Ejemplo:**

```gherkin
Scenario: Login exitoso con credenciales válidas
  Given que el usuario está en la página de login
  When ingresa el email "day@ejemplo.com" y la contraseña correcta
  Then debería ver el dashboard con su nombre
```

Cada test case incluye:
- Descripción corta
- Precondiciones
- Paso a paso en Gherkin
- Resultado esperado

:::important
No olvidar linkear el test case al issue correspondiente en Jira.
:::

Documentación oficial de Gherkin: [cucumber.io/docs/gherkin](https://cucumber.io/docs/gherkin/reference/)
