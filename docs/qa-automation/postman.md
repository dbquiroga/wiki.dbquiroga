---
sidebar_position: 14
title: Postman
---

## Parametros
Al hacer una peticion podemos agregar parametros para delimitar que informacion queremos obtener o brindar, dependiendo del metodo. 

Se ve algo asi cuando agregamos parametros:

Metodo: GET

```
http://localhost:3000/poststs/?id=5
```

En la URL podemos ver que todo lo que este luego del signo de pregunta ** ? ** esos serán parametros. 

| Key  | Value  |
| ---- | -------|
| id   |   5    | 


Lo cual esto nos devolvera toda la informacion, ya que es un get, que contenga el id=5. 


:::note
Puede que tengamos parametros predefinidos, por ejemplo para una base de datos
:::

| Key      | Value  |
| ----     | -------|
| author   |   Day  |
| _sort    |   id   |
| _order   |   desc | 

Esto lo que hara es traer los resultados del autor Day, y ordene de forma descendiente por id.

:::info
 "sort" se refiere a la capacidad de ordenar los resultados de una solicitud de búsqueda o consulta de recursos de acuerdo a ciertos criterios especificados.
:::


