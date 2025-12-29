
В курсе, посвящённом языку разметки HTML, были рассмотрены различные элементы, которые, по умолчанию, имели стилевое оформление: параграфы отделялись отступами, ссылки отличались цветом, заголовки различались размером текста и т.д. Будучи разработчиком можно изменять это оформление и добавлять совершенно новое. Добавить фон к тексту? Изменить размеры элементов? Создать анимацию? Всё это можно сделать с помощью CSS (англ. Cascading Style Sheets — Каскадные таблицы стилей) — языка, который определяет, как будут выглядеть HTML-элементы в браузере.

Курс по CSS является логическим продолжением [курса по HTML](https://ru.code-basics.com/languages/html). Многие теги и понятия, которые будут встречены по ходу прохождения уже рассматривались.

На примере ниже показывается вывод текста без использования своего CSS (то есть применяются те стили, которые «проставляет» браузер) и то, как можно стилизовать документ с использованием CSS.

## Пример текста со стандартным оформлением

```html
<p class="h2">Paragraphs</p>
<p>Paragraphs are created using a paired <code>&lt;p&gt;</code> tag with a small amount of text in the body. For example:</p>
<pre><code>&lt;p&gt;First paragraph&lt;/p&gt;
&lt;p&gt;Second paragraph&lt;/p&gt;</code></pre>
```

![Текст, отображённый со стандартными стилями браузера](../assets/text-without-custom-css.png)

## Пример текста с пользовательским оформлением

```html
<p class="border-bottom display-6 pb-2">Paragraphs</p>
<p class="lead">Paragraphs are created using a paired <code>&lt;p&gt;</code> tag with a small amount of text in the body. For example:</p>
<pre class="bg-light my-4" style="border-left: 5px solid #673ab7!important;"><code>&lt;p&gt;First paragraph&lt;/p&gt;
&lt;p&gt;Second paragraph&lt;/p&gt;</code></pre>
```

![Текст, отображённый с кастомными стилями](../assets/text-with-custom-css.png)

Теперь текст читается проще, и можно быстро отделить примеры кода от описания. В курсе будут рассмотрены базовые CSS-правила для работы с текстом и блоками, которые позволят оформить текст и визуально структурировать информацию.
