While we've been studying CSS, we've already encountered setting a custom color for text inside a block. But that's not the only option for setting a color - you can set it as the background for the entire block.

Note that the area with the theory and the editor in the lessons are separated from the rest of the site with a white background. This is done not only for easy reading, but also to help your eyes quickly find the area with the main content. To set the background color, we use the property `background-color`, the value of which is, of course, a color.

You can use `hex` values for the color:

```html
<div class="card">A card with white text on a purple background</div>
```

```css
.card {
  color: #ffffff;
  background-color: #673ab7;
}
```

![Card with white text on a purple background](../assets/background-color-card.png)
