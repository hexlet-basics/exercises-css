La colocación de elementos en una página es una de las áreas de trabajo más importantes para un diseñador o desarrollador frontend. En todas las lecciones anteriores, hemos agregado elementos pequeños, pero su posición se determinaba solo por cómo se agregaban en HTML. La mayoría de las veces, esto simplemente significa colocarlos uno encima del otro.

Al diseñar páginas, los desarrolladores necesitan colocar elementos no solo de esta manera, sino también uno al lado del otro.

Echa un vistazo a la página actual. Tiene dos áreas grandes que están colocadas una al lado de la otra: el bloque de teoría y el bloque de editor de código.

Una forma de resolver esta tarea es utilizar el módulo Flex de CSS. Para hacer esto, simplemente especifica la propiedad `display` con el valor `flex` en el contenedor principal que contiene los bloques de práctica y teoría.

```html
<style>
.container {
  display: flex;
}
</style>

<div class="container">
  <div class="theory">Aquí está la teoría</div>
  <div class="practice">Aquí está el editor de práctica</div>
</div>
```

Para mayor claridad, agreguemos algunos estilos para ver la disposición de los bloques.

<div class="hexlet-basics-example my-3">
  <div class="container d-flex fw-bold text-white" style="height: 200px;">
    <div class="bg-black bg-opacity-50 p-3">Aquí está la teoría</div>
    <div class="bg-opacity-50 bg-primary p-3">Aquí está el editor de práctica</div>
  </div>
</div>

En la maquetación actual, el bloque con la clase `container` se llama _Contenedor Flex_, y los elementos con las clases `theory` y `practice` se llamarán _Elementos Flex_. Es importante destacar que los _elementos flex_ son solo aquellos elementos que se encuentran directamente dentro del contenedor.

Por ejemplo,

```html
<style>
.container {
  display: flex;
}
</style>

<div class="container">
  <div class="theory">
    <div class="theory-text">Aquí va la teoría</div>
  </div>
  <div class="practice">
    <div class="vscode"></div>
  </div>
</div>
```

En esta estructura, los bloques con las clases `theory` y `practice` serán elementos flex, pero los bloques anidados con las clases `theory-text` y `vscode` ya no serán elementos flex. No se aplicarán las reglas que aprenderemos en las próximas lecciones.
