En esta lección, volveremos a la estilización del bloque "Pregunta-Respuesta". Esta vez, los elementos tienen un ancho limitado, por lo que es recomendable moverlos si no hay suficiente espacio.

```html
<style>
.qa {
  font: 18px/1.5 sans-serif;
  display: flex;
}

.question {
  width: 400px;
  padding: 20px;

  color: #fff;
  background: #8ea7e9;
}

.answer {
  width: 400px;
  padding: 20px;
}
</style>

<div class="qa">
  <div class="question">¿Cuáles son los lenguajes de programación más demandados en 2023?</div>
  <div class="answer">Los lenguajes más populares para aprender en 2023 siguen siendo Python y JavaScript</div>
</div>
```

Mejora la funcionalidad del diseño. Puedes probarlo reduciendo el tamaño de la ventana de tu navegador.
