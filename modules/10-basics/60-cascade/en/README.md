
We already know that CSS stands for "Cascading Style Sheets". It's fairly clear what style sheet means at this point, but what does cascading mean? The point is that you can specify styles for an element in more than one place.

Imagine a cascade of waterfalls. They flow into each other, accumulating more and more water. Eventually, the entire cascade will end up in one body of water. In CSS, the word cascade means the same action, only instead of waterfalls, it's CSS properties that flow over. In other words, cascading is CSS's ability to overlay properties on top of each other as well as to extend properties in selectors.

Let's create a block with the classes `text-bold` and `text-dark` and specify several properties in different selectors:

```html
<p class="text-bold text-dark">An important text about the danger of complex CSS</p>
```

```css
p {
  font-size: 20px;
}

.text-bold {
  font-weight: bold;
}

.text-dark {
  color: #333;
}
```

If you paste this example into the editor, you get a dark, bold text with a size of 20 pixels. This happened because of cascading - the browser combined all the styles from the different selectors and got the following instructions for styling the element:

```css
{
  font-size: 20px;
  font-weight: bold;
  color: #333;
}
```

This is what CSS style cascading is all about. Although we used different selectors, the browser eventually combined them into a single set of rules for the element
