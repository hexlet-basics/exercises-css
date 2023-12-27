Si profundizamos un poco en la teoría de cómo funciona el módulo Flex, entenderemos que es un eje en el que se "insertan" los elementos. Casi como cubos en una varilla o fichas en un contador.

Al igual que en el mundo real, podemos girar el eje principal para colocar los elementos de manera diferente. Para esto se utiliza la propiedad `flex-direction`, que puede tener uno de los cuatro valores:

* `row` - valor por defecto. Los elementos se colocan en una línea, donde el primer elemento está a la izquierda
* `row-reverse` - Efecto similar a `row`, pero los elementos se alinean en orden inverso, es decir, el primer elemento estará a la derecha
* `column` - los elementos se alinean desde arriba hacia abajo. El primer elemento está arriba
* `column-reverse` - los elementos se alinean desde abajo hacia arriba, es decir, el primer elemento está abajo

<div class="hexlet-basics-example my-3">
  <p class="h3">Row (Fila)</p>
  <div class="d-flex mb-3">
    <div class="bg-primary" style="width: 50px; height: 50px">1</div>
    <div class="bg-danger" style="width: 50px; height: 50px">2</div>
    <div class="bg-success" style="width: 50px; height: 50px">3</div>
  </div>

  <p class="h3">Row-Reverse (Fila Inversa)</p>
  <div class="d-flex flex-row-reverse mb-3">
    <div class="bg-primary" style="width: 50px; height: 50px">1</div>
    <div class="bg-danger" style="width: 50px; height: 50px">2</div>
    <div class="bg-success" style="width: 50px; height: 50px">3</div>
  </div>

  <p class="h3">Column (Columna)</p>
  <div class="d-flex flex-column mb-3">
    <div class="bg-primary" style="width: 50px; height: 50px">1</div>
    <div class="bg-danger" style="width: 50px; height: 50px">2</div>
    <div class="bg-success" style="width: 50px; height: 50px">3</div>
  </div>

  <p class="h3">Column-Reverse (Columna Inversa)</p>
  <div class="d-flex flex-column-reverse">
    <div class="bg-primary" style="width: 50px; height: 50px">1</div>
    <div class="bg-danger" style="width: 50px; height: 50px">2</div>
    <div class="bg-success" style="width: 50px; height: 50px">3</div>
  </div>
</div>

Además del eje principal en el que se colocan los elementos, se utiliza el concepto de _eje secundario_. Este eje es perpendicular al eje principal.

Por ejemplo, si los elementos se alinean horizontalmente, el eje secundario será una línea vertical. Este concepto es importante al estudiar la alineación de los elementos flex dentro del contenedor.
