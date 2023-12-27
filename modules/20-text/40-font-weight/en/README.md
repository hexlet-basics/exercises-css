
In the HTML course, the tag `<b>` had the same role as the `font-weight` property in CSS, namely, of course, to control the font weight. The property is more flexible than the standard styles of the `<b>` tag, as you can not only make it thicker, but also thinner.

There are two particularly common values for the `font-weight` property:

1. `bold` — thicker font. The text will look the same way as if you use the `<strong>` or `<b>` tag.
2. `normal` is the default value. This is useful if the entire text has a non-standard font-weight, but a section needs to have a standard weight

```html
<p class="bold">Text with bold typeface</p>
```

```css
.bold {
  font-weight: bold;
}
```

<div class="hexlet-basics-example my-3">
  <p style="font-weight: bold;" class="m-0">Text with bold typeface</p>
</div>

But these are not all the values a property can take. In addition to the `bold` and `normal` descriptions, there are also numeric ones:

* `100`
* `200`
* `300`
* `400` - corresponds to the value of `normal`
* `500`
* `600`
* `700` - corresponds to the value of `bold`
* `800`
* `900`

Although there are many numerical values, here it all depends on the typefaces of the font, and more precisely on whether it has characters for each type of font weight. Most fonts support only `normal` and `bold` values and if specified otherwise, the browser will choose which weight to substitute. More often than not, all values above `500` will be interpreted as `bold`
