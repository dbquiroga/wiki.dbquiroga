---
sidebar_position: 13
title: API Testing
---

## Que es una API
Es un punto de acceso. Una API (Application Programming Interface) es una herramienta que permite que diferentes aplicaciones y sistemas se comuniquen y compartan información entre sí. 

## Que es un metodo?
Un método se refiere a una solicitud específica que se puede hacer a un servicio o recurso que está disponible a través de una API. Los métodos son como acciones que un usuario puede realizar en una aplicación o un servicio, como obtener información, crear o actualizar datos, o eliminar información existente.

Los métodos se definen en el diseño de la API y especifican qué tipo de acción se puede realizar en un recurso específico, como:
-  ** GET ** (para obtener información)
-  ** POST ** (para crear nuevos datos)
- ** PUT ** (para actualizar datos existentes) y
- ** DELETE ** (para eliminar datos)
- ** PATCH ** (PARA modificar solamente un atributo de un recurso).

Al utilizar los métodos correctos en una API, se pueden hacer solicitudes específicas a un servicio o recurso y recibir la información correspondiente en respuesta.


## ¿Qué es api rest?
API REST es una forma de diseñar una API web que permite a diferentes sistemas y aplicaciones comunicarse entre sí utilizando un conjunto estándar de convenciones de interfaz y protocolos de comunicación.

Es un punto de acceso que usa como estándar rest.. El estándar se define en los atributos que se utilizan:
- dónde (cabecera o body): . Las cabeceras permiten a los clientes enviar información adicional al servidor, como la autenticación del usuario o información sobre el formato de los datos que se están enviando o solicitando. El cuerpo de una solicitud o respuesta HTTP contiene los datos que se envían o reciben a través de la API. En el caso de una solicitud, el cuerpo puede contener datos como los parámetros de una búsqueda o la información de un nuevo recurso que se está creando. En el caso de una respuesta, el cuerpo contiene la información que se está enviando de vuelta al cliente en respuesta a su solicitud.
- también definen el estándar de la URL. Tiene que ser unica. 
- Verbos HTTPS: los tipos de métodos(get, post, patch…) para indicar qué acción se está realizando en el recurso identificado.
- Representación de recursos: los recursos o datos se representan en un formato estandarizado, como JSON o XML.
- Codigos de estado HTTPS:Estos códigos se dividen en cinco categorías: informativa (100-199), éxito (200-299), redirección (300-399), error del cliente (400-499) y error del servidor (500-599).

### Codigos de estado mas comunes

- 200 OK. Respuesta estándar para peticiones correctas.
- 201 Created. La petición ha sido completada y ha resultado en la creación de un nuevo recurso.
- 202 Accepted. La petición ha sido aceptada para procesamiento, pero este no ha sido completado.
- 400 Bad Request. La solicitud contiene sintaxis errónea.
- 403 Forbidden. La solicitud fue legal, pero el servidor rehúsa responder dado que el cliente no tiene los privilegios para hacerla.
- 404 Not Found. Recurso no encontrado. Se utiliza cuando el servidor web no encuentra la página o recurso solicitado.
- 500 Internal Server Error. Es un código comúnmente emitido por aplicaciones empotradas en servidores web, cuando se encuentran con situaciones de error ajenas a la naturaleza del servidor web


## Clientes REST
Son herramientas que se utiliza para interactuar con una API REST. Es un programa que envía solicitudes HTTP a un servidor web que implementa una API REST y recibe las respuestas del servidor en el formato deseado (generalmente en JSON o XML).

Los mas usados:
- Postman
- Insomnia


