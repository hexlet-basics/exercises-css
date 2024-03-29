Анимация — обширный модуль в CSS. К сожалению, описать все возможности за один урок невозможно. В этом уроке будет показан базовый принцип анимации в CSS на основе `@keyframes`. Для примера, сделаем анимацию текста — цвет текста меняется с голубого на красный.

Для того, чтобы задать анимацию, используется правило `@keyframes` и название анимации:

```css
@keyframes color-change {
  // Внутри будет наша анимация
}
```

Название анимации может быть любым. Вы его выбираете самостоятельно. В последствии именно по этому названию свойство `animation` будет знать, какую именно анимацию необходимо воспроизвести.

Внутри `@keyframes` необходимо указать различные временные промежутки, в которых будут происходить изменения. Например, на старте (0% завершённости анимации) будет голубой текст, в середине анимации (50%) — красный, и в конце (100%) — возвращаем голубой цвет.

```css
@keyframes color-change {
  0% {
    color: blue;
  }

  50% {
    color: red;
  }

  100% {
    color: blue;
  }
}
```

Теперь необходимо применить созданную нами анимацию к тексту на странице. Для этого используется правило `animation` с тремя основными значениями:

* Название анимации
* Длительность анимации. Указывается в секундах (1s, 2s, 3s и так далее)
* Бесконечная анимация или нет (если бесконечная, то указывается параметр infinite)

```css
.animation-text {
  animation: color-change 3s infinite;
}
```

Осталось создать параграф с необходимым классом, и анимация начнёт работать.

<div class="hexlet-basics-example">
  <style>
    @keyframes color-change {
      0% {
        color: blue;
      }

      50% {
        color: red;
      }

      100% {
        color: blue;
      }
    }

    .animation-text {
      animation: color-change 3s infinite;
    }
  </style>
  <p class="animation-text m-0">Текст с анимацией color-change. Цвет текста меняется с голубого на красный и обратно</p>
</div>
