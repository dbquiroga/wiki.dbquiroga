---
sidebar_position: 1
title: Clases
---

## Que son las clases?


### Clases con metodo main
En Java, solo las clases que actúan como puntos de entrada para un programa deben contener un método main. Estas clases principales se utilizan para iniciar la ejecución del programa Java cuando se ejecuta desde la línea de comandos o desde un entorno que requiere un punto de entrada específico.

```java
public class MiPrograma {

    public static void main(String[] args) {
        // Código para iniciar y ejecutar el programa
        System.out.println("Hola, mundo!");
    }
}
```          
- `public`: Indica que el método es accesible desde cualquier parte.
- `static`: Indica que el método main pertenece a la clase en sí misma y no a instancias de la clase.
- `void`: Indica que el método main no devuelve ningún valor.
- `String[] args`: Es un parámetro del método que permite recibir argumentos desde la línea de comandos.

En este caso, MiPrograma es la clase principal que contiene el método main, y este método se ejecuta cuando el programa se inicia.
 

#### Clases sin metodo main
Todas las demás clases en el programa Java, no necesitan tener un método main. Estas clases suelen contener la lógica de negocio, métodos específicos para realizar tareas, definiciones de objetos y cualquier otra funcionalidad necesaria para el funcionamiento del programa.

```java
public class Calculadora {

    public int sumar(int a, int b) {
        return a + b;
    }

    public int restar(int a, int b) {
        return a - b;
    }
}
```
En este ejemplo, la clase Calculadora contiene métodos para realizar operaciones matemáticas, pero no tiene un método main. En cambio, estas operaciones podrían ser invocadas desde el método main de una clase principal como MiPrograma.

:::info
Las clases que no contienen un método main suelen ser utilizadas para encapsular funcionalidad específica, definir objetos, manejar lógica de negocio, etc. Pueden ser instanciadas y utilizadas por la clase principal (con main) o por otras clases secundarias dependiendo de la estructura y diseño del programa.
:::