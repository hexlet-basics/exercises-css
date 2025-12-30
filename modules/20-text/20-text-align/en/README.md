A strong way to highlight a section of text is to align it differently from the rest of the text. Many sites align the header to the center so that the user can distinguish it more quickly.

```html
<p class="text-center h3">Centered header</p>
<p>Page text. You can see that the header jumps out more since it's centered</p>
```

![Heading centered over body text](../assets/text-align-centered-heading.png)

CSS allows you to align text using the `text-align` property with 4 basic values:

* `left`. This one is used by default
* `center`
* `right`
* `justify`

```html
<p class="left">Left edge text</p>
<p class="center">Center text</p>
<p class="right">Right edge text</p>
<p class="justify">Justified. It is rarely used, because it leaves unequal spaces between words</p>
```

```css
.left {
  text-align: left;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}

.justify {
  text-align: justify;
}
```

![Examples of left, center, right, and justified text](../assets/text-align-variants.png)
