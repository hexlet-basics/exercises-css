El cliente está completamente satisfecho con el bloque de preguntas y respuestas y ha dejado una última corección: permitir que el *bloque con la flecha* se estire para ocupar todo el espacio vacío y alinear la flecha en el centro del bloque.

De esta manera, la flecha siempre conectará de manera ordenada la pregunta y la respuesta en pantallas de alta resolución y el usuario podrá encontrar rápidamente la respuesta a la pregunta.

Tu tarea es agregar las propiedades necesarias a Flex según las instrucciones. Para alinear la flecha horizontalmente, puedes utilizar la propiedad `text-align`. No olvides alinear todos los elementos verticalmente, como en la tarea anterior.

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
