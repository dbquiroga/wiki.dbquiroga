---
sidebar_position: 6
---

### Que es HTML
Es el lenguaje que se usa para el desarrollo del sitios web, esta compuesto por una serie de etiquetas para imagenes e hipervinculos, saltos de lineas, listas, tablas, etc, que nos ayudan a estructurar nuestro sitio web.

#### Etiquetas
```HTML
- <html> </html> : indica al navegador que estamos creando un documento HTML
- <head> </head>: establecer conexiones o referencias como otro tipo de documento, como el estilo css para el sitio web, como los scripts de javascript.
- <title> </title>: indicar un encabezado o titulo al sitio web
- <body></body>: aca va todo el contenido del documento
- <p> </p>: parrafos
- <script> </script>: codigos javascript
- <table> </table>: indicar tablas mediante columnas y filas
- <b> </b>: establecer en engrita textos
- </br>: indican saltos de linea
- <li> </li>: indican listas
- <ul> </ul>: indican listas desordenadas. ul se utiliza dentro de li
- <div> </div>: contenedores
- <a> </a>: conexion mediante un link. Enlaces.
- <h1> </h1>: titulo en el sitio
- <i> </i> : texto en italica o cursiva
- <form></form>: para crear formularios
- <input> </> : para crear inputs pueden ser de distintos tipos, "email", "submit"
- <select> </select> : permiten colocar dentro opciones 
- <option> </option> : opciones del select. Usualmente se le ponene un value para que luego se guarden en una db. 

```
Si las etiquetas no tienen un cierre tienen un error, o se quede en blanco el navegador. 

```html title="Ejemplo estructura html"
<!DOCTYPE>
<html>
    <body>
        <p> Esto es un parrafo </p>
    </body>
</html>
```
:::note
La etiqueta !DOCTYPE indica el tipo de documento o tipo de version de HTML  a utilizar
:::
