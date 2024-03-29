A convenient way to set font properties is to use the `font` rule, which lets you specify:

* `font-style`
* `font-variant`
* `font-weight`
* `font-size` / `line-height` (these two rules are written with a slash)
* `font-family`

Six different rules within one! This helps shorten CSS code and improve its readability. The mandatory ones are `font-size` and `font-family`. The rest can be omitted.

An example of an entry with all possible rules: `font: italic small-caps bold 24px/1.2 Arial;`

Suppose we want italic bold text with a font size of 24 pixels and from the Arial font family, then the rule in CSS would look like this:

```css
.text {
  font: italic bold 24px Arial;
}
```

<div class="hexlet-basics-example my-3" style="font: italic bold 24px Arial;">
  Bold italics with a font size of 24 pixels from the Arial family
</div>

Note the order in which the values within the `font` property are used. First come the style rules, then the font size and spacing, and then the font family. This is important, because if the order is different, the browser may not process the result correctly.

When specifying the `font-family` property, we also recommend specifying a universal font family. You need this in case the user doesn't have that font, so that a suitable one can be chosen from those installed on their system. As with the `font-family' property on its own, all fonts should be separated by commas. The same applies to the font family.

```css
.text {
  font: italic bold 24px Arial, sans-serif;
}
```

## Using one or more rules

This section applies not only to the `font` rule but to all the generalized rules you will learn in the course. It might seem that using one rule reduces the number of lines that are used in CSS. This is true, but there are two major problems with using these properties:

1. Memorizing the correct order of values. When using generalized properties, you should always keep in mind the correct order of property values. It's easy to get it wrong in the early stages of learning. A good option would be to use individual properties, but in the order in which they go in the generalized property. As you get more experience, you can switch to one rule
2. Generalized properties override individual ones. If you specify `font-variant: small-caps;` and then apply `font: 16px/24px sans-serif;` to the same element, then the capital will be reset to its default value
