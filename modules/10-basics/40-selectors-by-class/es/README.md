La solución principal para estilizar una sección específica de una página es utilizar clases. Estas nos permiten aplicar un estilo necesario no a todos los elementos de la página, sino solo a aquellos que tienen la clase especificada.

Para aplicar un estilo a una clase en CSS, se utiliza el selector `.nombre-de-clase`. Presta atención al punto, ya que es así como el navegador entiende que el estilo se aplica a una clase.

```html
<p class="paragraph">
  Texto de nuestro párrafo.
  Es con la ayuda de la clase paragraph en CSS
  que se establecerán las propiedades para este bloque de texto.
</p>
```

```css
.paragraph {
  color: #333333;
  /*
    La regla color establece el color del texto.
    En este caso, es un color gris con el valor #333333.
  */
}
```

Dado que puede haber varias clases con el mismo nombre en una página, esta regla se aplicará a todos los elementos que tengan el atributo class igual a `paragraph`.
