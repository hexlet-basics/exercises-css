
Any block element in HTML can be highlighted with frames. This stylistic device allows you to separate monochrome components from each other, or highlight a key element on the page

<div class="hexlet-basics-example my-3">
  <p class="m-0">This text is framed, so it's easy to find on the page straight away</p>
</div>

To create a border for an element, we use the `border` property, which is shorthand for several properties:

* `border-width`
* `border-style`
* `border-color`

You can specify multiple properties, or you can combine everything within the `border` property. This is the most common variant and looks like this:

```css
.element {
  border: 1px solid #ccc;
}
```

where:

* `1px` - border width
* `solid` - border style
* `#ccc` - border color

Pixel values and hex color we've already dealt with in this course, but there are eight border styles in CSS:

* `dotted`
* `dashed`
* `solid`
* `double`
* `groove`
* `ridge`
* `inset`
* `outset`

and there is also a `none` value that will "remove" the border, because with `border-style: none`, browsers ignore the other properties and remove the border

## Border examples

<div style="border: 3px solid #000; margin-bottom: 10px;" class="p-2">
  solid
</div>
<div style="border: 3px dotted #000; margin-bottom: 10px;" class="p-2">
  dotted
</div>
<div style="border: 3px dashed #000; margin-bottom: 10px;" class="p-2">
  dashed
</div>

```html
<style>
  .border-dotted {
    border: 1px dotted #000;
  }
</style>

<div class="border-dotted">
  Block with a dotted black border
</div>
```
