Una buena manera de resaltar una sección de texto es alineándola de manera diferente al resto del texto. En muchos sitios web se utiliza la alineación centrada para los títulos, para que los usuarios puedan identificarlos rápidamente.

```html
<p class="text-center h3">Centered header</p>
<p>Page text. You can see that the header jumps out more since it's centered</p>
```

![Heading centered over body text](../assets/text-align-centered-heading.png)

CSS permite alinear el texto utilizando la propiedad `text-align` con 4 valores principales:

* `left` — a la izquierda. Se utiliza por defecto
* `center` — centrado
* `right` — a la derecha
* `justify` — justificado

```html
<p class="left">Texto alineado a la izquierda</p>
<p class="center">Texto centrado</p>
<p class="right">Texto alineado a la derecha</p>
<p class="justify">Texto justificado. Se utiliza raramente, ya que deja espacios desiguales entre las palabras</p>
```

```css
.left {
  text-align: left;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}

.justify {
  text-align: justify;
}
```

![Examples of left, center, right, and justified text](../assets/text-align-variants.png)
