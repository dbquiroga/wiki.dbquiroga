---
sidebar_position: 1
---

# Casos de Prueba

Puede parecer básico, pero en los test cases está todo. Nos estructuran para definir qué probar y cómo probar, y son la base para luego hacer automatizaciones.

## ¿Qué es?

Es una herramienta que usan los testers para guiar el paso a paso al momento de probar.

Son escritos por y para los testers.

## ¿Qué contiene?

Es la documentación de todas las actividades de prueba que realizamos como testers (por lo general un Excel o Google Sheet), con la siguiente información:

- Título y carátula (engloba la sección a probar)
- Nombre del proyecto
- Objetivo del caso de prueba
- Tester que armó los casos
- Fechas de ejecución
- Numeración de los casos (cada caso tiene una nomenclatura identificatoria)
- Numeración de los pasos
- El paso a paso de cómo se espera que se comporte el sistema
- Acciones
- Resultado obtenido
- Resultado esperado (uno por cada paso)
- Tipo de prueba (positivos, negativos)
- Observaciones

## Tipos de pruebas

### Positivos

Aquellos flujos que el usuario debería poder realizar exitosamente.

### Negativos

Aquellos que el usuario no debería poder hacer, o casos con datos inválidos que el sistema debería rechazar.

Ejemplos:

- `HJSHDUHEUDDHDSJSjkahkdas` — superar la cantidad de caracteres aceptados
- `dsfdsf12323` — ingresar valores numéricos en campos que solo aceptan letras
- Enviar campos vacíos (null)
- `(/&/(&/&/%/&((((/%$##"""` — caracteres especiales en campos que no los permiten

:::note
Un caso de prueba negativo **no** es un defecto. Es una validación esperada del sistema.
:::

## ¿Cómo se aplican en Jira?

Los casos de prueba se pueden generar en Excel, Google Sheets u otras herramientas. Jira es una de las más usadas, generalmente junto al plugin Zephyr para gestión de testing.
