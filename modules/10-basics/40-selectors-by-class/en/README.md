The main solution for styling a particular part of the page is to use classes. They allow us to set a style we need only for the elements that have the required class satisfied, rather than all of them.

To specify a style for a class in CSS, we use the selector `.name-class'. Note the dot, this is how the browser understands that this style is specified for the class.

```html
<p class="paragraph">
  The text of our paragraph.
  It's the paragraph class in CSS that
  will set properties for this block of text.
</p>
```

```css
.paragraph {
  color: #333333;
  /*
    The color property sets the color of the text.
    In this case, it is gray with a value of #333333
  */
}
```

Since there can be many classes with the same name on the page, this rule will work for all elements where the class attribute is `paragraph`
