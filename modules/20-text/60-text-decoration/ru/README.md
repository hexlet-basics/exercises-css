Для усиления текста часто используется <u>подчёркивание</u>. Оно показывает важность текущего слова или текста (часто его ещё используют для указания ссылок в документе). Другим средством стилизации текста является <s>перечёркивание</s>, показывающее неправильный участок текста, например «А <s>вот так</s>, дети, не делайте».

Для такого оформления используется свойство `text-decoration` с тремя основными свойствами:

* `underline` — <u>Подчёркивание текста</u>
* `line-through` — <s>Перечёркивание текста</s>
* `overline` — <span style="text-decoration: overline;">Надчёркивание текста</span>

Чтобы отменить подчёркивание у ссылок используется значение `none`. Его часто используют для удаления подчёркивания у ссылок, которое есть по умолчанию

```html
<a href="#">Ordinary link underlined by default</a>
<a href="#" class="text-decoration-none">Non-underlined link</a>
```

```css
.text-decoration-none {
  text-decoration: none;
}
```

![Two links, one underlined and one without decoration](../assets/text-decoration-links.png)
