
Otra forma de separar secciones de texto con significado es utilizando diferentes tamaños de fuente. Ya hemos visto que los navegadores estilizan los títulos de diferentes maneras. Es precisamente el tamaño del texto lo que diferencia un título `<h1>` de un título `<h2>` y así sucesivamente.

En CSS, se puede controlar el tamaño de la fuente utilizando la propiedad `font-size`, que acepta un valor numérico y una unidad de medida. Por ahora, utilizaremos píxeles como unidad de medida, aunque hay algunas unidades importantes que se estudiarán al final de este curso.

```html
<p>Warning, this paragraph has the standard font size</p>
<p class="warning">This paragraph has a font size of 24 pixels</p>
```

```css
.warning {
  font-size: 24px;
}
```

![Paragraph with larger font size](../assets/font-size-warning.png)
