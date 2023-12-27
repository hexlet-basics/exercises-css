
Internal indents allowed you to add padding to the block and space between the border of the block and its content. But how do you keep two adjacent blocks from pressing against each other?

<div class="hexlet-basics-example mt-3" style="background-color: #673ab7;color: #fff;padding: 10px 0 10px 20px!important;border:0!important;">
  A card with white text on a purple background
</div>
<div class="hexlet-basics-example mb-3" style="background-color: #673ab7;color: #fff;padding: 10px 0 10px 20px!important;border:0!important;">
  A card with white text on a purple background
</div>

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

<div class="hexlet-basics-example" style="background-color: #673ab7;color: #fff;padding: 10px 0 10px 20px!important;border:0!important;margin: 10px 0;">
  A card with white text on a purple background
</div>
<div class="hexlet-basics-example" style="background-color: #673ab7;color: #fff;padding: 10px 0 10px 20px!important;border:0!important;margin: 10px 0;">
  A card with white text on a purple background
</div>
