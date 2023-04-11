---
sidebar_position: 1
---

# Casos de Pruebas

Parece una gilada, pero en los test case esta todo. Nos estructuran para definir qué probar y cómo probar. También,  nos define las bases para luego hacer las automatizaciones.

## **Que es?**

Es una herramienta de los testes que se usa para ir guiando nuestro paso a paso al momento de probar.

Son escritos por y para los testers. 

## Y que es exactamente?

Es la documentación de todas las actividades de pruebas que realizamos como testers, (por lo general un excel), el cual contiene la siguiente info: 

- Titulo y caratula (engloba la sección a probar)
- Nombre del proyecto
- Objetivo del caso de prueba
- Tester que armo los casos
- Fechas de ejecución
- Numeración de los casos (cada casos de prueba tiene una numeración con nomenclatura  identificatorio)
- Numeración de los pasos (cada paso tiene una numeración con nomenclatura )
- El paso a paso de como se espera que se comporte el sistema
- Acciones
- Resultado obtenido
- Resultado esperado (un resultado esperado por cada paso)
- Tipo de prueba(positivos, negativos)
- Observaciones

## Tipos de pruebas

### Positivos

Aquellos que el usuario debería poder hacer.

### Negativos

Aquellos que el usuario no debería poder hacer.

Casos que se usan para validar el sistema con datos no validos

Ej:

- HJSHDUHEUDDHDSJSjkahkdas (Superar cantidad de caracteeres aceptados)
- dsfdsf12323 (colocar valores numericos en campos donde solo acepta letras)
- Brindar cambos vacios null.
- (/&/(&/&/%/&((((/%$##””” (ingreso caracteres especiales en campos donde no lo permite)

<aside>
💡 Un caso de prueba negativo NO es un defecto

</aside>

## Como se aplican en jira?

Los casos de prueba se pueden generar en un excel, google sheet u otras herramientas, jira es una de ellas.