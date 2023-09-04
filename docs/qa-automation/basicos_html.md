---
sidebar_position: 0
title: Html
description: El HTML que necesitamos saber identificar como QAs
slug: /html
---

### Que es HTML
Es el lenguaje que se usa para el desarrollo del sitios web, esta compuesto por una serie de etiquetas para imagenes e hipervinculos, saltos de lineas, listas, tablas, etc, que nos ayudan a estructurar nuestro sitio web.

#### Etiquetas
1. ```<html> </html> ```
Indica al navegador que estamos creando un documento HTML
2. ``` <head> </head> ```: establecer conexiones o referencias como otro tipo de documento, como el estilo css para el sitio web, como los scripts de javascript.
3. ``` <title> </title> ```: indicar un encabezado o titulo al sitio web
4. ```<body></body>```: aca va todo el contenido del documento
5. ```<p> </p>```: parrafos
6. ```<script> </script>```: codigos javascript
7. ```<table> </table>```: indicar tablas mediante columnas y filas
8. ```<b> </b>```: establecer en engrita textos
9. ```</br>```: indican saltos de linea
10. ```<li> </li>```: indican listas
11. ```<ul> </ul>```: indican listas desordenadas. ul se utiliza dentro de li
12. ```<div> </div>```: contenedores
13. ```<a> </a>```: conexion mediante un link. Enlaces.
14.``` <h1> </h1>```: titulo en el sitio
15. ```<i> </i>```: texto en italica o cursiva
16. ```<form></form>```: para crear formularios
17. ```<input> </>```: para crear inputs pueden ser de distintos tipos, "email", "submit"
18. ```<select> </select>```: permiten colocar dentro opciones 
19. ```<option> </option>```: opciones del select. Usualmente se le ponene un value para que luego se guarden en una db. 

:::info
Si las etiquetas no tienen un cierre tienen un error, o se quede en blanco el navegador. 
:::
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

### Estructura que tenes que saber si o si

Cuando estes automatizando vas a tener que encontrar elementos HTML en todo momento. Por ende es importante que sepas la diferencia entre etiqueta, atributo y valor.

- ** Etiqueta ** es un elemento que marca el inicio y final de un elemento en una página web, como un párrafo. están rodeadas por corchetes angulares `< >`. Ejemplo: div, input.
- ** Atributo ** se utiliza dentro de una etiqueta para proporcionar información adicional sobre un elemento en la página, como la ubicación de una imagen. Los atributos se escriben en la etiqueta de apertura y se definen por un nombre y un valor, separados por un signo igual `=`. Ejemplo: typre, class.
- ** El valor ** en HTML se utiliza para definir la información que un atributo lleva consigo, como una ruta de archivo en el caso del atributo "src"."un-nombre".

```html title="Ejemplo etiqueta, atributo y valor"
<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo de HTML</title>
</head>
<body>
    <h1>Mi Página Web de Ejemplo</h1>
    <p>Esta es una imagen de un gato:</p>
    <img src="gato.jpg" alt="Imagen de un gato adorable">
</body>
</html>
```

- La etiqueta` <img>` se utiliza para insertar una imagen en la página.
- El atributo `src` se utiliza para especificar la fuente o la ubicación de la imagen. En este caso, el valor del atributo `src` es "gato.jpg", lo que significa que la imagen se encuentra en un archivo llamado "gato.jpg" en el mismo directorio que la página HTML.
- El atributo `alt` se utiliza para proporcionar un texto alternativo que se muestra si la imagen no se puede cargar o para la accesibilidad. En este caso, el valor del atributo `alt` es "Imagen de un gato adorable".




