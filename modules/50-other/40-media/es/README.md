Para ver páginas web se utilizan muchos dispositivos con diferentes tamaños y resoluciones de pantalla: computadoras, celulares, tabletas, laptops, etc. Esta cantidad de dispositivos requiere que los desarrolladores sean capaces de adaptar sus páginas a diferentes variaciones de resoluciones.

Una forma de cambiar estilos dependiendo de la resolución es mediante el uso de reglas CSS especiales que se activan cuando se cumplen ciertas condiciones. Estas condiciones pueden ser:

* Ancho o alto del `viewport`
* Orientación horizontal o vertical de la pantalla
* Tipo de dispositivo

y otros.

En esta lección aprenderemos sobre la regla `@media` y veremos algunos casos de uso estándar. El objetivo de la lección no es explicar todos los detalles de cómo hacer páginas adaptables, por lo que nos enfocaremos en los aspectos clave.

## La regla media

Todas las consultas de medios se construyen siguiendo un patrón similar y utilizan la construcción `@media`:

```css
@media (condición) {
  /* Reglas */
}
```

¿Qué reglas se especifican dentro de la construcción `@media`? ¡Cualquier regla! Piénsalo como si fuera un nuevo archivo CSS con sus selectores y propiedades. Por ejemplo, si se necesita cambiar el color del texto de los elementos con la clase `.text` a negro bajo cierta condición, la construcción se vería así:

```css
@media (condición) {
  .text {
    color: #000000;
  }
}
```

¿Y qué condiciones pueden haber? Supongamos que se desea cambiar el color del texto si el ancho del `viewport` es menor o igual a 700 píxeles. En ese caso, se especifica la regla `max-width: 700px`. Es muy similar a una regla CSS normal que determina que las propiedades deben aplicarse si el ancho del `viewport` es de 700 píxeles o menos:

```css
@media (max-width: 700px) {
  .text {
    color: #000000;
  }
}
```

Con la llegada de los teléfonos celulares, surgió la necesidad de trabajar con la forma en que los usuarios sostienen el teléfono: vertical u horizontalmente. Cuando un usuario sostiene el teléfono verticalmente, la altura de la pantalla es mayor que su ancho. Cuando se utiliza horizontalmente, ocurre lo contrario: el ancho es mayor que la altura. Esto requiere una disposición adecuada de los bloques en la página para que sea fácil de usar desde cualquier posición.

En las consultas de medios existe una condición especial llamada `orientation`, que puede tener uno de dos valores:

* `portrait` - orientación vertical del dispositivo. La altura de la pantalla es **mayor** que su ancho
* `landscape` - orientación horizontal del dispositivo. La altura de la pantalla es **menor** que su ancho

Supongamos que para la orientación vertical el texto debe ser blanco, y para la orientación horizontal debe ser negro:

```css
@media (orientation: portrait) {
  .text {
    color: #ffffff;
  }
}

@media (orientation: landscape) {
  .text {
    color: #000000;
  }
}
```

Las consultas de medios pueden ser mucho más complejas e incluir muchas variaciones diferentes. No podemos cubrir todo esto en una sola lección, pero ya has aprendido cómo se construyen las consultas de medios, para qué existen y cómo agregarlas a tu archivo CSS
