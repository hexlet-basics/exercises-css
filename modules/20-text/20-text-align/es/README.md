Una buena manera de resaltar una sección de texto es alineándola de manera diferente al resto del texto. En muchos sitios web se utiliza la alineación centrada para los títulos, para que los usuarios puedan identificarlos rápidamente.

<div class="hexlet-basics-example my-3">
  <p style="" class="h3 text-center">Título centrado</p>
  <p class="m-0">Texto de la página. Se puede observar que el título destaca gracias a la alineación centrada</p>
</div>

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

<div class="hexlet-basics-example my-3">
  <p>Texto alineado a la izquierda</p>
  <p style="text-align: center">Texto centrado</p>
  <p style="text-align: right">Texto alineado a la derecha</p>
  <p style="text-align: justify" class="m-0">Texto justificado. Se utiliza raramente, ya que deja espacios desiguales entre las palabras. Este enfoque se utiliza a menudo en la maquetación de libros para evitar "bordes irregulares" en el texto</p>
</div>
