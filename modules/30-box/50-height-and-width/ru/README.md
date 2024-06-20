При создании страниц часто возникает желание управлять высотой и шириной блоков. Это удобно в длинных статьях, когда требуется сделать поясняющий текст в небольшом блоке. Так он будет отделяться от основной части текста, и его сразу можно увидеть.

Для управления высотой и шириной блочных элементов используются правила `width` и `height`, принимающие значения ширины и высоты соответственно (например, в пикселях или других доступных единицах измерения).

Создадим блок высотой 100 пикселей и шириной 100 пикселей. Чтобы визуально отделить его от теории в уроке, установим чёрный цвет фона:

```html
<style>
  .square {
    width: 100px;
    height: 100px;
    background-color: #000;
  }
</style>

<div class="square"></div>
```

<div class="hexlet-basics-example my-3">
  <div style="width: 100px; height: 100px; background-color: #000;"></div>
</div>