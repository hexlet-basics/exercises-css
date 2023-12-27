Many devices with different screen sizes and resolutions are used to browse the Internet, such as computers, smartphones, tablets, laptops, and so on. This number of devices requires developers to be able to adjust their pages for different resolution variations.

One way to change styles depending on the resolution is to use special CSS rules which work under certain conditions. Such conditions can be:

* Width or height of the `viewport`
* Horizontal or vertical screen orientation
* Device type

and others.

In this lesson, we'll learn about the `@media` rule and look at a few standard applications. It's not the goal of this lesson to explain all the intricacies of working with adaptive pages, so we'll focus on the key things.

## Media rule

All media queries follow a similar pattern and use the `@media` construct:

```css
@media (Condition) {
  /* Rules */
}
```

What rules are given inside the `@media` construct? It can be anything! Think of it as a new CSS file, with its own selectors and properties. For example, you may want to change the text color in elements with the class `.text` to black. Then the design will take on this image:

```css
@media (Condition) {
  .text {
    color: #000000;
  }
}
```

What are the conditions? Suppose you want to change the text color if the width of the `viewport` is less than or equal to 700 pixels. Then the rule `max-width: 700px` needs to be specified. This is very similar to a normal CSS rule which will define that properties should work if the `viewport` width is 700 pixels or less:

```css
@media (max-width: 700px) {
  .text {
    color: #000000;
  }
}
```

With the advent of smartphones, the need to work with the way the user holds the phone, either vertically or horizontally, is very relevant. When the user holds the phone vertically, the screen height is greater than its width. When used horizontally, the opposite is true - the width is greater than the height. This requires proper alignment of blocks on the page so that it can be used comfortably from any position.

Media queries have a special condition `orientation`, which can have one of two values:

* `portrait` - portrait orientation of the device. The screen height is **bigger** than its width
* `landscape` - landscape orientation of the device. The screen height is **smaller** than its width

Let the text be white for portrait orientation and black for landscape orientation:

```css
@media (orientation: portrait) {
  .text {
    color: #ffffff;
  }
}

@media (orientation: landscape) {
  .text {
    color: #000000;
  }
}
```

Media queries can be much more complex, with many different variations. We can't cover all of this in one lesson, but you've already learned how media queries are constructed, what they are for, and how to add them to your CSS file
