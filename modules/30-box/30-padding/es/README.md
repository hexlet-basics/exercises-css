
Al observar los diferentes bloques que se han creado a lo largo de todas las lecciones, se puede notar que el texto "se adhiere" a los bordes de los bloques. Por ejemplo:

```html
<div class="card card-tight">A card with white text on a purple background</div>
```

```css
.card {
  color: #ffffff;
  background-color: #673ab7;
}

.card-tight {
  padding: 0;
}
```

![Card without internal padding](../assets/padding-no-spacing.png)

Puedes decir que en las propias lecciones los ejemplos no suelen verse así, y tendrías razón. En cada ejemplo, se utilizaron márgenes internos desde los bordes del bloque para añadir más espacio.

Para crear márgenes internos se utilizan 4 reglas:

* `padding-top` - margen interno superior
* `padding-right` - margen interno derecho
* `padding-bottom` - margen interno inferior
* `padding-left` - margen interno izquierdo

Cada propiedad toma un valor numérico y una unidad de medida, por ejemplo píxeles

```html
<div class="card">A card with white text on a purple background</div>
```

```css
.card {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;

  color: #ffffff;
  background-color: #673ab7;
}
```

![Card with asymmetric padding](../assets/padding-with-spacing.png)

## Propiedad abreviada

Si se necesita establecer márgenes en todos los lados, se utiliza no 4 propiedades diferentes, sino una sola: `padding`. Esta propiedad es una abreviatura de las propiedades ya conocidas y permite establecer:

* margen superior
* margen derecho
* margen inferior
* margen izquierdo

El orden de especificación es importante y coincide con el mencionado anteriormente. Si se reescribe el ejemplo anterior, se verá así:

```css
.card {
  padding: 10px 0 10px 20px;

  color: #ffffff;
  background-color: #673ab7;
}
```

Además de esta forma de escritura, existen formas abreviadas para mayor comodidad:

* Si se especifica solo un valor, se utilizará para todos los lados al mismo tiempo
* Si se especifican dos valores, el primero se utilizará para los márgenes verticales (superior e inferior) y el segundo para los márgenes horizontales (derecho e izquierdo)
* Si se especifican tres valores, se utilizarán para el margen superior, los márgenes horizontales y el margen inferior
