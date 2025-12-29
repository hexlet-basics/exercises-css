Al estudiar CSS, ya nos hemos encontrado con la configuración de un color personalizado para el texto dentro de un bloque. Pero esa no es la única forma de establecer un color, también se puede establecer como fondo para todo el bloque.

Ten en cuenta que el área de teoría y editor en las lecciones está separada del resto del sitio web con un fondo blanco. Esto se hace no solo para facilitar la lectura, sino también para que los ojos encuentren rápidamente el área de contenido principal. Para establecer el color de fondo se utiliza la propiedad `background-color`, cuyo valor es el color.

Puedes utilizar los valores `hex` de color que ya conoces:

```html
<div class="card">A card with white text on a purple background</div>
```

```css
.card {
  color: #ffffff;
  background-color: #673ab7;
}
```

![Card with white text on a purple background](../assets/background-color-card.png)
