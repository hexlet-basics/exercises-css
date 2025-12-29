
Internal indents allowed you to add padding to the block and space between the border of the block and its content. But how do you keep two adjacent blocks from pressing against each other?

```html
<div class="card card-tight">A card with white text on a purple background</div>
<div class="card card-tight">A card with white text on a purple background</div>
```

```css
.card {
  color: #ffffff;
  background-color: #673ab7;
  padding: 10px 0 10px 20px;
}

.card-tight {
  margin: 0;
}
```

![Two cards touching because margin is 0](../assets/margin-no-spacing.png)

To separate the two cards from the example above, you use outer indents. Their principle is the same as the margins, only the direction is different. In terms of properties and their values, it's the same. There are 4 rules and one general one:

* `margin-top`
* `margin-right`
* `margin-bottom`
* `margin-left`

To combine values, use the `margin` property, which preserves the order in which it's specified:

* top
* right
* bottom
* left

Also, as with margins, there are shorthand versions of these rules for convenience:

* If you specify only one value, it will be used simultaneously for all sides
* If you specify two values, the first will be used for vertical (top and bottom) margin and the second for horizontal (right and left) margin
* If you specify three values, they will be used for top, horizontal and bottom margin

```html
<div class="card">A card with white text on a purple background</div>
<div class="card">A card with white text on a purple background</div>
```

```css
.card {
  margin: 10px 0;

  color: #ffffff;
  background-color: #673ab7;
}
```

![Cards separated by vertical margin](../assets/margin-with-spacing.png)
