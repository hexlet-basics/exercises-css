La solución principal para estilizar una sección específica de una página es utilizar clases. Estas nos permiten aplicar un estilo necesario no a todos los elementos de la página, sino solo a aquellos que tienen la clase especificada.

Para aplicar un estilo a una clase en CSS, se utiliza el selector `.nombre-de-clase`. Presta atención al punto, ya que es así como el navegador entiende que el estilo se aplica a una clase.

```html
<p class="paragraph">
  The text of our paragraph.
  It's the paragraph class in CSS that
  will set properties for this block of text.
</p>
```

```css
.paragraph {
  color: #333333;
  /*
    The color property sets the color of the text.
    In this case, it is gray with a value of #333333
  */
}
```

Dado que puede haber varias clases con el mismo nombre en una página, esta regla se aplicará a todos los elementos que tengan el atributo class igual a `paragraph`.

![Result of styling a paragraph by class](../assets/class-selector.png)
