
Al utilizar algunas propiedades como `border` y `padding`, se puede notar que esto afecta el tamaño final del bloque. Y es realmente así. Los navegadores calculan el tamaño final del bloque en la página de la siguiente manera:

![Modelo de caja](../assets/box-model-standard-small.png)

Es decir, el tamaño final se forma no solo por las propiedades `height` y `width`, sino por muchas otras propiedades:

* `padding` - relleno interno
* `border` - bordes
* `margin` - márgenes externos

Por lo tanto, para determinar el tamaño final del elemento, es necesario sumar los valores de todas estas propiedades. Por ejemplo, ¿cuál será el ancho de este bloque?

```css
.box {
  width: 100px;
  height: 100px;

  padding: 20px;
  margin: 10px;

  border: 1px solid #fff;
}
```

¿100px? ¿120px? ¿121px? ¿Cómo se puede saber este valor? Hay que sumar todos los valores que forman el bloque horizontalmente:

* `width`
* `padding-left`/`padding-right`
* `border-left`/`border-right`
* `margin-left`/`margin-right`

Por lo tanto, el ancho final del elemento en la página es: `100px + 20px + 20px + 1px + 1px + 10px + 10px`, que es igual a `162px`.

Este comportamiento se llama _modelo de caja_. Describe la relación entre las propiedades y el tamaño final del elemento. Según este modelo, los navegadores "dibujan" el bloque, superponiendo las reglas unas sobre otras antes de mostrar el elemento en la página.

Vale la pena recordar este modelo, ya que al trabajar con CSS es importante comprender dónde y cómo el navegador "dibujará" el bloque y cómo esto afectará su altura y ancho.

Pero, ¿no esperas que al establecer las propiedades `width` y `height` obtengas precisamente esos valores? ¿Se puede cambiar el comportamiento del modelo de caja? ¡Sí! Para esto se utiliza la propiedad `box-sizing`, que puede tener los siguientes valores:

* `content-box` - valor por defecto. Funciona como se describió en la lección.
* `border-box` - los valores del borde y los rellenos internos no aumentan el tamaño del elemento, sino que "consumen" espacio del contenido, es decir, las propiedades no afectarán la altura y el ancho. Si se establece un valor fijo, se mantendrá así, pero habrá menos espacio para el contenido dentro.
