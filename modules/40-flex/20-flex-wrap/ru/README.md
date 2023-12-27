В прошлых примерах использовалось достаточно малое количество элементов внутри флекс-контейнера. Представим, что этих элементов больше и они не могут поместиться внутри контейнера.

В этом случае элементы выйдут за пределы контейнера и продолжат располагаться на главной оси, так как, по умолчанию, контейнер не переносит элементы.

В примере ниже ширина контейнера обозначена синим цветом, а между элементами есть пространство, чтобы понять, когда элементы вышли за пределы контейнера:

<div class="hexlet-basics-example my-3">
  <div class="d-flex bg-primary gap-2 w-50">
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;"></div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;"></div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;"></div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;"></div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;"></div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;"></div>
  </div>
</div>

Чтобы определить, как поведут себя элементы при нехватке пространства используется свойство `flex-wrap`, которое принимает одно из значений:

* `nowrap` — значение по умолчанию. Элементы не переносятся
* `wrap` — самое распространенное значение. Элементы переносятся при нехватке пространства внутри контейнера
* `wrap-reverse` — перенос элементов с переворотом порядка элементов по главной оси. Этот порядок удобен при создании блогов, так как более старые записи окажутся внизу

Вот как располагаются элементы при использовании этих значений:

<div class="hexlet-basics-example my-3">
  <p class="h3">nowrap</p>
  <div class="d-flex bg-primary gap-2 w-50 mb-3">
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">1</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">2</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">3</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">4</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">5</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">6</div>
  </div>

  <p class="h3">wrap</p>
  <div class="d-flex flex-wrap bg-primary gap-2 w-50 mb-3">
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">1</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">2</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">3</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">4</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">5</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">6</div>
  </div>

  <p class="h3">wrap-reverse</p>
  <div class="d-flex flex-wrap-reverse bg-primary gap-2 w-50 mb-3">
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">1</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">2</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">3</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">4</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">5</div>
    <div class="bg-info flex-shrink-0" style="width: 50px; height: 50px;">6</div>
  </div>
</div>
