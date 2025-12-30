
Any block element in HTML can be highlighted with frames. This stylistic device allows you to separate monochrome components from each other, or highlight a key element on the page

```html
<div class="border-card">
  This text is framed, so it's easy to find on the page straight away
</div>
```

```css
.border-card {
  border: 3px solid #673ab7;
  border-radius: 12px;
  padding: 16px 24px;
}
```

![Framed paragraph that uses the border shorthand](../assets/framed-border-card.png)

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

```html
<div class="border-sample border-solid">solid</div>
<div class="border-sample border-dotted">dotted</div>
<div class="border-sample border-dashed">dashed</div>
```

```css
.border-sample {
  border-width: 3px;
  border-color: #111;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  text-transform: capitalize;
}

.border-solid {
  border-style: solid;
}

.border-dotted {
  border-style: dotted;
}

.border-dashed {
  border-style: dashed;
}
```

![solid, dotted, and dashed border samples](../assets/border-style-variants.png)
