
When using some properties, such as `border` and `padding`, you may notice that it affects the final block size. And indeed it does. This is how browsers calculate the final block size on the page:

![Box Model](../assets/box-model-standard-small.png)

I.e., the final size is set not only by the properties `height` and `width` but by many other ones:

* `padding` - internal margins
* `border` - borders
* `margin` - outer indents

Essentially, to determine the final size of the element, you must add up the values of all these properties. For example, what will be the width of this block?

```css
.box {
  width: 100px;
  height: 100px;

  padding: 20px;
  margin: 10px;

  border: 1px solid #fff;
}
```

100px? 120px? 121px? How do I find out this value? You have to add up all the values that form the block horizontally:

* `width`
* `padding-left`/`padding-right`
* `border-left`/`border-right`
* `margin-left`/`margin-right`

So, the final width of the element on the page `100px + 20px + 20px + 1px + 1px + 10px + 10px` is `162px`.

This behavior is called the _box model_. It describes the relationship between properties and the final size of an element. According to this model, browsers "draw" a block, layering rules on top of each other before displaying the element on the page.

This model is worth remembering because when working with CSS, it's important to understand how and where the browser "draws" the block, and how it will affect its height and width.

But you can agree that when you set the `width` and `height` properties, you expect those exact values. Is it possible to change the behavior of the box model? Yes! To do this, use the property `box-sizing`, which takes the following values:

* `content-box` - default value. It works as described above
* `border-box` - the values of the border and margins do not make the element bigger, but rather "eat up" the space in the content, i.e., the properties will not affect the height and width. If a fixed value is set, it will remain so, but there will be less space for the content inside
