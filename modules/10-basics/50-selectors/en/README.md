We've seen tag and class selectors in tutorials before. A selector is a description of what a particular CSS style should be applied to. They can be quite complex, indicating not just the specific element, but where it's located or which tag it's in. Remember the class selector. It applies to any element whose class we have specified.

```html
<p class="text-bold">Bold text inside a paragraph</p>

<div class="text-bold">Another text inside a simple block element. Since it too has the text-bold class, it will be bold</div>
```

```css
.text-bold {
  font-weight: bold;
}
```

The `font-weight` property with a value of **bold** will set the text to bold. You'll learn more about this property when you study text formatting. The most important thing now is that this style will be applied to both the paragraph and the block element `<div>`, since they have the same class.

Another familiar selector is the tag selector. Its purpose is to set styles for all the tags on the page. This is very useful if you want to set initial styles for tags throughout your project. For example, to set the font, its size, and its thickness.

```css
p {
  color: #333;
  font: 18px/1.5 sans-serif;
}
```

Use the tag selector only to set global rules within the entire project. This is important because styles will be applied to all the tags at once, and you could accidentally overwrite existing styles

Another way to specify styles is to use the Identity Selector. By using the `id` attribute, you can specify a unique name for any element on the page. If this name is specified, then the element can be referred to using the identifying selector. For this purpose, the form selector `#identifier_name` is used

```html
<p id="red">Red paragraph</p>
```

```css
#red {
  color: red;
}
```

It is important to remember that the ID value is unique. There can only be one element on a page with one specific value. For example, in the example above, the identifier `red` has already been used on the paragraph. There cannot be a second version of this element on the page. For this reason, identifiers are generally specified for large wrappers, such as the main site header, but this is not a prerequisite
