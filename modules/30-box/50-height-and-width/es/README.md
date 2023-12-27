Al crear páginas, a menudo surge la necesidad de controlar la altura y el ancho de los bloques. Esto es útil en artículos largos, cuando se necesita colocar un texto explicativo en un bloque pequeño. De esta manera, se separará del texto principal y se podrá ver de inmediato.

Para controlar la altura y el ancho de los elementos de bloque, se utilizan las reglas `width` y `height`, que aceptan valores de ancho y altura respectivamente (por ejemplo, en píxeles u otras unidades de medida disponibles).

Crearemos un bloque con una altura de 100 píxeles y un ancho de 100 píxeles. Para separarlo visualmente de la teoría en la lección, estableceremos un color de fondo negro:

```html
<style>
  .square {
    width: 100px;
    height: 100px;
    background-color: #000;
  }
</style>

<div class="square"></div>
```

<div class="hexlet-basics-example my-3">
  <div style="width: 100px; height: 100px; background-color: #000;"></div>
</div>
