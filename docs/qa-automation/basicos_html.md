---
sidebar_position: 0
title: Html
description: El HTML que necesitamos saber identificar como QAs
slug: /html
---

### Qué es HTML
Es el lenguaje que se usa para el desarrollo de sitios web, está compuesto por una serie de etiquetas para imágenes e hipervínculos, saltos de líneas, listas, tablas, etc, que nos ayudan a estructurar nuestro sitio web.

#### Etiquetas
1. ```<html> </html> ```
Indica al navegador que estamos creando un documento HTML
2. ``` <head> </head> ```: establecer conexiones o referencias a otro tipo de documentos, como el estilo CSS para el sitio web o los scripts de JavaScript.
3. ``` <title> </title> ```: indicar un encabezado o título al sitio web
4. ```<body></body>```: acá va todo el contenido del documento
5. ```<p> </p>```: párrafos
6. ```<script> </script>```: códigos JavaScript
7. ```<table> </table>```: indicar tablas mediante columnas y filas
8. ```<b> </b>```: texto en negrita
9. ```</br>```: indica salto de línea
10. ```<li> </li>```: indican listas
11. ```<ul> </ul>```: indican listas desordenadas. ul se utiliza dentro de li
12. ```<div> </div>```: contenedores
13. ```<a> </a>```: conexión mediante un link. Enlaces.
14.``` <h1> </h1>```: título en el sitio
15. ```<i> </i>```: texto en itálica o cursiva
16. ```<form></form>```: para crear formularios
17. ```<input> </>```: para crear inputs, pueden ser de distintos tipos: "email", "submit"
18. ```<select> </select>```: permiten colocar opciones dentro
19. ```<option> </option>```: opciones del select. Usualmente se les pone un value para que luego se guarden en una DB.

:::info
Si las etiquetas no tienen un cierre habrá un error, o el navegador se quedará en blanco.
:::
```html title="Ejemplo estructura html"
<!DOCTYPE>
<html>
    <body>
        <p> Esto es un párrafo </p>
    </body>
</html>
```
:::note
La etiqueta !DOCTYPE indica el tipo de documento o versión de HTML a utilizar.
:::

### Estructura que tenés que saber sí o sí

Cuando estés automatizando vas a tener que encontrar elementos HTML en todo momento. Por eso es importante que sepas la diferencia entre etiqueta, atributo y valor.

- **Etiqueta**: elemento que marca el inicio y final de un elemento en una página web. Están rodeadas por corchetes angulares `< >`. Ejemplo: div, input.
- **Atributo**: se utiliza dentro de una etiqueta para proporcionar información adicional sobre un elemento, como la ubicación de una imagen. Los atributos se escriben en la etiqueta de apertura y se definen por un nombre y un valor, separados por `=`. Ejemplo: type, class.
- **Valor**: define la información que un atributo lleva consigo, como una ruta de archivo en el caso del atributo "src".

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

- La etiqueta `<img>` se utiliza para insertar una imagen en la página.
- El atributo `src` especifica la fuente o ubicación de la imagen.
- El atributo `alt` proporciona un texto alternativo que se muestra si la imagen no se puede cargar.
