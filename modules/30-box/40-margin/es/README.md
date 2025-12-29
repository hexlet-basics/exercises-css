
Los márgenes internos permiten añadir más espacio a un bloque y dar espacio entre el borde del bloque y su contenido. Pero, ¿cómo evitar que dos bloques adyacentes se peguen entre sí?

```html
<div class="card card-tight">A card with white text on a purple background</div>
<div class="card card-tight">A card with white text on a purple background</div>
```

```css
.card {
  color: #ffffff;
  background-color: #673ab7;
  padding: 10px 0 10px 20px;
}

.card-tight {
  margin: 0;
}
```

![Two cards touching because margin is 0](../assets/margin-no-spacing.png)

Para separar las dos tarjetas del ejemplo anterior, se utilizan márgenes externos. Su principio de funcionamiento es similar al de los márgenes internos, pero solo cambia la dirección. En cuanto a las propiedades y sus valores, todo es lo mismo. Existen 4 reglas y una regla general:

* `margin-top` - margen externo superior
* `margin-right` - margen externo derecho
* `margin-bottom` - margen externo inferior
* `margin-left` - margen externo izquierdo

Para combinar valores, se utiliza la propiedad `margin`, en la que se mantiene el orden de especificación:

* margen superior
* margen derecho
* margen inferior
* margen izquierdo

Al igual que con los márgenes internos, existen formas abreviadas de escribir estas reglas para mayor comodidad:

* Si se especifica solo un valor, se utilizará simultáneamente para todos los lados
* Si se especifican dos valores, el primero se utilizará para los márgenes verticales (superior e inferior) y el segundo para los márgenes horizontales (derecho e izquierdo)
* Si se especifican tres valores, se utilizarán para el margen superior, horizontal e inferior

```html
<div class="card">A card with white text on a purple background</div>
<div class="card">A card with white text on a purple background</div>
```

```css
.card {
  margin: 10px 0;

  color: #ffffff;
  background-color: #673ab7;
}
```

![Cards separated by vertical margin](../assets/margin-with-spacing.png)
