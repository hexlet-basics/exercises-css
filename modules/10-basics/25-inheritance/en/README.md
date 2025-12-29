When you use styles in CSS, it often affects not only the element for which the style is specified but also the tags attached to it. Such styles are called **inherited** styles. The `font-size` style from the last lesson is inherited - it will apply to all nested tags.

```html
<div style="font-size: 20px;">
  The text's font size is 20 pixels.

  <p>The nested paragraph will also have a font size of 20 pixels.</p>
</div>
```

![Inherited font size preview](../assets/font-size-inheritance.png)

In addition to the styles that are inherited for all nested tags, CSS has many styles that are unique to the element to which they are applied.

One such property is `border`, which allows you to set a border around the element. But that same frame won't be copied for every internal element.

```html
<div style="border: 2px solid #000;">
  The block will have a border with a width of 2 pixels

  <p>And the paragraph will not have its own border. If necessary, it can be set separately</p>
  <p style="border: 1px solid #000;">For example, like this</p>
</div>
```

![Borders are not inherited](../assets/border-inheritance.png)
