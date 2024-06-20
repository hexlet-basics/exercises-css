
Мы уже знаем, что CSS переводится как «Каскадные таблицы стилей». С таблицей стилей к этому моменту всё ясно, но что значит каскадные? Дело в том, что указать стили для элемента можно не только в одном месте.

Представьте каскад водопадов. Они перетекают друг в друга, накапливая всё больше и больше воды. В конечном итоге весь каскад окажется в общем бассейне. В CSS слово каскадность обозначает такое же действие, только вместо водопадов перетекают CSS свойства. Другими словами каскадность — возможность языка CSS накладывать свойства друг на друга, а также расширять свойства в селекторах.

Создадим блок с классами `text-bold` и `text-dark` и укажем несколько свойств в разных селекторах:

```html
<p class="text-bold text-dark">Важный текст о вреде сложного CSS</p>
```

```css
p {
  font-size: 20px;
}

.text-bold {
  font-weight: bold;
}

.text-dark {
  color: #333;
}
```

Если вставить этот пример в редактор, то выведется жирный текст размером 20 пикселей тёмного цвета. Произошло это благодаря каскадности — браузер объединил все стили из разных селекторов и получил следующие инструкции для стилизации элемента:

```css
{
  font-size: 20px;
  font-weight: bold;
  color: #333;
}
```

Это и есть каскадность стилей в CSS. Хоть мы и использовали разные селекторы, но, в конечном итоге, браузер объединил их в единый набор правил для элемента