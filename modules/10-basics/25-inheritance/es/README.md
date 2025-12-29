Al utilizar estilos en CSS, a menudo se afecta no solo al elemento para el que se especifican los estilos, sino también a las etiquetas anidadas en él. Estos estilos se llaman **heredados**. El estilo `font-size` del tema anterior es heredado, se aplicará a todas las etiquetas anidadas.

```html
<div style="font-size: 20px;">
  El tamaño de fuente de este texto es de 20 píxeles.

  <p>El párrafo anidado también tendrá un tamaño de fuente de 20 píxeles.</p>
</div>
```

![Vista previa de tamaño de fuente heredado](../assets/font-size-inheritance.png)

Además de los estilos que se heredan para todas las etiquetas anidadas, en CSS hay muchos estilos que son únicos para el elemento al que se aplican.

Una de estas propiedades es `border`, que permite establecer un borde alrededor del elemento. Pero este mismo borde no se copiará para cada elemento interno.

```html
<div style="border: 2px solid #000;">
  El bloque tendrá un borde de 2 píxeles de ancho.

  <p>El párrafo no tendrá su propio borde. Al ser necesario, se establece por separado.</p>
  <p style="border: 1px solid #000;">Por ejemplo, de esta manera</p>
</div>
```

![Los bordes no se heredan automáticamente](../assets/border-inheritance.png)
