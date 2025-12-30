
Another way to separate sections of text is to use different font sizes. We've already seen that browsers style headings differently. It's the size of the text that separates the `<h1>` header from the `<h2>` header and so on.

You can control the size of the text in CSS by using the `font-size` property, which takes a numeric value and a unit of measure. For now, we'll use pixels as the unit of measurement, although there are a few other important units you'll have learned by the end of this course.

```html
<p>Warning, this paragraph has the standard font size</p>
<p class="warning">This paragraph has a font size of 24 pixels</p>
```

```css
.warning {
  font-size: 24px;
}
```

![Paragraph with larger font size](../assets/font-size-warning.png)
