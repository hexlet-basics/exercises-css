
En el curso dedicado al lenguaje de marcado HTML, se estudiaron varios elementos que, por defecto, tienen estilos aplicados: los párrafos tenían sangría, los enlaces tenían un color diferente, los títulos diferían en el tamaño de letra, etc. Como desarrollador, puedes cambiar estos estilos y agregar unos completamente nuevos. ¿Agregar un fondo al texto? ¿Cambiar el tamaño de los elementos? ¿Crear animaciones? Todo esto se puede hacer con CSS (Hojas de estilo en cascada), un lenguaje que define cómo se verán los elementos HTML en el navegador.

El curso de CSS es una continuación lógica del [curso de HTML](https://ru.code-basics.com/languages/html). Muchas etiquetas y conceptos que se encontrarán durante el curso ya fueron explicados.

El siguiente ejemplo muestra cómo se ve el texto sin usar CSS personalizado (es decir, se aplican los estilos que el navegador "define") y cómo se puede estilizar el documento utilizando CSS.

## Ejemplo de texto con estilo estandartizado

<div class="hexlet-basics-example my-3">
  <p class="h2">Párrafos</p>
  <p>Los párrafos se crean utilizando la etiqueta de apertura y cierre <code>&lt;p&gt;</code>, dentro de la cual se coloca una pequeña parte de texto. Por ejemplo:</p>
  <pre><code>&lt;p&gt;Primer párrafo&lt;/p&gt;
&lt;p&gt;Segundo párrafo&lt;/p&gt;</code></pre>
</div>

## Ejemplo de texto con estilo personalizado

<div class="hexlet-basics-example my-3">
  <p class="border-bottom display-6 pb-2">Párrafos</p>
  <p class="lead">Los párrafos se crean utilizando la etiqueta de apertura y cierre <code>&lt;p&gt;</code>, dentro de la cual se coloca una pequeña parte de texto. Por ejemplo:</p>
  <pre class="bg-light my-4" style="border-left: 5px solid #673ab7!important;"><code>&lt;p&gt;Primer párrafo&lt;/p&gt;
&lt;p&gt;Segundo párrafo&lt;/p&gt;</code></pre>
</div>

Ahora el texto es más legible y se puede diferenciar rápidamente los ejemplos de código de las descripciones. En el curso se explicarán las reglas básicas de CSS para trabajar con texto y bloques, lo que permitirá dar formato al texto y estructurar visualmente la información.
