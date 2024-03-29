CSS ofrece grandes posibilidades para la visualización de elementos. Una de las características clave de CSS es el posicionamiento, que permite influir en la ubicación de un elemento en la página.

Con la regla `position`, podemos "extraer" un bloque de la maquetación y colocarlo donde sea conveniente. Los valores principales de la propiedad `position` son los siguientes:

* `relative` (posicionamiento relativo). Permite cambiar la ubicación de un elemento con respecto a su posición original antes de aplicar la propiedad. En este caso, el lugar en la página que el bloque ocupaba anteriormente permanecerá. Es decir, otros bloques no se moverán al lugar donde se encontraba el bloque antes de aplicar la regla **position**.
* `absolute` (posicionamiento absoluto). "Extrae" el bloque de la maquetación HTML y cambia su ubicación con respecto a la esquina superior izquierda de la página (o al elemento padre si tiene la propiedad `position` con los valores `fixed`, `absolute`, `relative` o `sticky`). A diferencia de `relative`, el lugar donde se encontraba el bloque `absolute` se eliminará y otros bloques podrán ocupar ese lugar.
* `fixed`. Al igual que `absolute`, esta regla extraerá el bloque de la maquetación HTML y lo colocará en la esquina superior izquierda. La diferencia con el posicionamiento absoluto es que el bloque "seguirá a la página" y siempre estará visible para el usuario. Esto es útil para crear menús que deben seguir al usuario.

Para controlar la ubicación, se utilizan 4 reglas CSS: `top`, `right`, `left` y `bottom`, cuyos valores son coordenadas (por ejemplo, en píxeles) donde se ubicará el bloque.

```html
<style>
  .absolute-position {
    position: absolute;
    top: 100px;
    left: 100px;
  }
</style>

  <div class="absolute-position">Bloque con posicionamiento absoluto, que se ubicará a 100 píxeles desde la parte superior y a 100 píxeles desde el borde izquierdo de la página</div>
```
