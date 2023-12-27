Если немного погрузиться в теорию работы модуля Flex, то станет понятно, что это некая ось, на которую «насаживаются» элементы. Почти как кубики на железку или костяшки на счёты.

Как и в реальном мире, мы можем поворачивать главную ось, чтобы расположить элементы по другому. Для этого используется свойство `flex-direction`, которое может принимать одно из четырех значений:

* `row` — значение по умолчанию. Элементы выстраиваются в линию, в которой первый элемент находится слева
* `row-reverse` — Эффект похож на значение `row`, но элементы выстраиваются в обратном порядке, то есть первый элемент окажется справа
* `column` — элементы выстраиваются сверху вниз. Первый элемент находится сверху
* `column-reverse` — элементы выстраиваются снизу вверх, то есть первый элемент находится внизу

<div class="hexlet-basics-example my-3">
  <p class="h3">Row</p>
  <div class="d-flex mb-3">
    <div class="bg-primary" style="width: 50px; height: 50px">1</div>
    <div class="bg-danger" style="width: 50px; height: 50px">2</div>
    <div class="bg-success" style="width: 50px; height: 50px">3</div>
  </div>

  <p class="h3">Row-reverse</p>
  <div class="d-flex flex-row-reverse mb-3">
    <div class="bg-primary" style="width: 50px; height: 50px">1</div>
    <div class="bg-danger" style="width: 50px; height: 50px">2</div>
    <div class="bg-success" style="width: 50px; height: 50px">3</div>
  </div>

  <p class="h3">Column</p>
  <div class="d-flex flex-column mb-3">
    <div class="bg-primary" style="width: 50px; height: 50px">1</div>
    <div class="bg-danger" style="width: 50px; height: 50px">2</div>
    <div class="bg-success" style="width: 50px; height: 50px">3</div>
  </div>

  <p class="h3">Column-reverse</p>
  <div class="d-flex flex-column-reverse">
    <div class="bg-primary" style="width: 50px; height: 50px">1</div>
    <div class="bg-danger" style="width: 50px; height: 50px">2</div>
    <div class="bg-success" style="width: 50px; height: 50px">3</div>
  </div>
</div>

Помимо главной оси, по которой располагаются элементы, используется понятие _побочной оси_. Она находится перпендикулярно главной оси.

Например, если элементы выстраиваются по горизонтали, то побочной осью будет вертикальная линия. Это понятие важно при изучении выравнивания flex-элементов внутри контейнера
