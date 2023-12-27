El cliente quiere que aparezca una flecha en el bloque de "Preguntas y Respuestas" para visualmente relacionar la pregunta y la respuesta. Mejora la funcionalidad del bloque

```html
<style>
.qa {
  font: 18px/1.5 sans-serif;
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

.arrow {
  margin: 0 10px;
}
</style>

<div class="qa">
  <div class="question">¿Cuáles son los lenguajes de programación más demandados en 2023?</div>
  <div class="arrow">→</div>
  <div class="answer">Los lenguajes más populares para aprender en 2023 siguen siendo Python y JavaScript</div>
</div>
```

La flecha se encuentra visualmente en el centro en relación con los bloques de pregunta y respuesta. Utiliza Flex para mejorar el bloque y, utilizando alineación, coloca los bloques en el centro
