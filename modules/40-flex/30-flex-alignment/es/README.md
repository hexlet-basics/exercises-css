Uno de los aspectos más destacados de Flex es la capacidad de alinear contenido en cualquier eje. Ya sea el eje principal o el eje secundario, siempre puedes utilizar varias propiedades para colocar automáticamente los elementos en la página.

En esta lección, vamos a aprender sobre las propiedades `justify-content` y `align-items`, que permiten alinear elementos en el eje principal y secundario, respectivamente.

Para analizar cómo funcionan estas propiedades, usaremos el siguiente ejemplo:

<div class="hexlet-basics-example my-3">
  <div class="bg-opacity-25 bg-secondary d-flex fw-bold gap-2" style="height: 200px;">
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">1</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">2</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">3</div>
  </div>
</div>

El contenedor Flex está resaltado en gris. Todas las propiedades en esta lección se aplicarán a este contenedor

## Alineación en el eje principal

Para alinear elementos en el eje principal, se utiliza la propiedad `justify-content`. Esta propiedad se aplica al contenedor (un bloque con la propiedad `display: flex`) y puede tener varios valores. Vamos a estudiar los valores más comunes:

* `flex-start` — alinea al principio del eje. Aunque no es el valor por defecto, se ve así como en el ejemplo de arriba
* `flex-end` — alinea al final del eje
* `center` — alinea el contenido en el centro del contenedor
* `space-between` — el primer y último elemento se ajustan al principio y final del eje, mientras que los elementos restantes se distribuyen en el espacio restante
* `space-around` — similar a `space-between`, pero el primer y último elemento también tienen márgenes que son la mitad de los márgenes de los demás elementos

<div class="hexlet-basics-example my-3">
  <p class="h3">flex-start</p>
  <div class="bg-opacity-25 bg-secondary d-flex fw-bold gap-2 mb-3" style="height: 200px;">
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">1</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">2</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">3</div>
  </div>

  <p class="h3">flex-end</p>
  <div class="bg-opacity-25 bg-secondary d-flex justify-content-end fw-bold gap-2 mb-3" style="height: 200px;">
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">1</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">2</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">3</div>
  </div>

  <p class="h3">center</p>
  <div class="bg-opacity-25 bg-secondary d-flex justify-content-center fw-bold gap-2 mb-3" style="height: 200px;">
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">1</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">2</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">3</div>
  </div>

  <p class="h3">space-between</p>
  <div class="bg-opacity-25 bg-secondary d-flex justify-content-between fw-bold gap-2 mb-3" style="height: 200px;">
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">1</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">2</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">3</div>
  </div>

  <p class="h3">space-around</p>
  <div class="bg-opacity-25 bg-secondary d-flex justify-content-around fw-bold gap-2 mb-3" style="height: 200px;">
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">1</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">2</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">3</div>
  </div>
</div>

## Alineación en el eje secundario

Además de alinear elementos en el eje principal, Flex también permite alinear elementos en el eje secundario al mismo tiempo. Para comprender este efecto, los ejemplos de esta lección tienen una altura de contenedor mayor de la necesaria.

Para ello, se utiliza la propiedad `align-items`. Esta propiedad también tiene varios valores, pero vamos a analizar los más comunes:

* `flex-start` — alinea al comienzo del eje secundario
* `flex-end` — alinea al final del eje secundario
* `center` — alinea en el centro del eje secundario

<div class="hexlet-basics-example my-3">
  <p class="h3">flex-start</p>
  <div class="bg-opacity-25 bg-secondary d-flex fw-bold gap-2 mb-3" style="height: 200px;">
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">1</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">2</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">3</div>
  </div>

  <p class="h3">flex-end</p>
  <div class="bg-opacity-25 bg-secondary d-flex align-items-end fw-bold gap-2 mb-3" style="height: 200px;">
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">1</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">2</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">3</div>
  </div>

  <p class="h3">center</p>
  <div class="bg-opacity-25 bg-secondary d-flex align-items-center fw-bold gap-2 mb-3" style="height: 200px;">
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">1</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">2</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">3</div>
  </div>
</div>

Como puedes ver, hay menos valores aquí que en la alineación en el eje principal. Recuerda que hay dos ejes: si usas la propiedad `flex-direction: column`, la alineación visual cambiará y se usará la propiedad `justify-content` para alineación vertical:

<div class="hexlet-basics-example my-3">
  <p class="h3">flex-direction: column y justify-content: space-between</p>
  <div class="bg-opacity-25 bg-secondary d-flex flex-column justify-content-between fw-bold gap-2 mb-3" style="height: 200px;">
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">1</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">2</div>
    <div class="bg-warning ps-2" style="width: 50px; height: 50px;">3</div>
  </div>
</div>
