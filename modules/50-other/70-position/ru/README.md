CSS предоставляет большие возможности по визуальному отображению элементов. Одной из ключевых особенностей CSS является позиционирование — возможность влиять на место отображения элемента на странице.

С помощью правила `position` мы можем «выдернуть» блок из вёрстки и расположить так, как удобно. Основные значения у свойства `position` следующие:

* `relative` (относительное позиционирование). Позволяет изменить расположение элемента относительно того места, где он был расположен до применения свойства. При этом, то место на странице, которое блок занимал ранее, останется. То есть другие блоки не будут вставать на место, где блок располагался до применения правила **position**.
* `absolute` (абсолютное позиционирование). «Вынимает» блок из HTML вёрстки и изменяет его расположение относительно левого верхнего угла страницы (или родительского элемента, если у него есть свойство `position` в значении `fixed`, `absolute`, `relative`, или `sticky`). В отличии от `relative`, место, где располагался `absolute` блок, будет удалено, и другие блоки смогут занять это место.
* `fixed`. Также, как и `absolute`, данное правило извлечёт блок из HTML вёрстки и расположит его в левом верхнем углу. Отличием от абсолютного позиционирования является то, что блок будет «следовать за страницей» и всегда находится в зоне видимости пользователя. Это удобно для создания меню, которые должны следовать за пользователем.

Для управления расположением используются 4 правила CSS: `top`, `right`, `left` и `bottom`, значением которых являются координаты (например, в пикселях), где будет расположен блок.

```html
<style>
  .absolute-position {
    position: absolute;
    top: 100px;
    left: 100px;
  }
</style>

  <div class="absolute-position">Блок с абсолютным позиционированием, который будет расположен на расстоянии 100 пикселей от верха и 100 пикселей от левого края страницы</div>
```
