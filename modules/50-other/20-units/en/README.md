Throughout the course, pixels, the smallest element of the screen that outputs color, are what we've been using as units of measurement. The pictures that you look at on the screen are all made from pixels (and there's a lot of them). They've been used to indicate font size, element height and width, internal and external indentation, line height, and so on.

Pixels are the **absolute** unit of measure in CSS. So, what does that mean? It means that regardless of what screen size you specify, the value specified in pixels will be retained. If you specify a 30-pixel indent, it will be the same on your phone, a 102-inch TV, and your microwave.

On the one hand, this is good because you can be sure that on different devices all sizes will remain the same. On the other hand, it can also be a problem. Imagine text with a font size of 12 pixels. It will read fine on an average screen but using it on a TV or smartphone will cause the text to be too small to read comfortably because the devices have different screen sizes. If the screen is only 50 pixels, the text will become incredibly large because it will take up most of the screen

In addition to pixels, there are other absolute units of measurement:

* centimeters
* millimeters
* inches
* points

Although they are not often used, they can be useful when setting up printing. Websites only use pixels.

Besides absolute units of measurement, there are **relative** units. By their name, it's clear that in this case the size of the element isn't fixed, but rather is calculated relative to something. As for web pages, this something is the size of the font. Why the font? Imagine that you, as a user, increase the size of the font on the site for your own convenience. If the indentation, width, and height are not tied to the size of the text, then such text will go beyond the block. And the text is the basis of any page on the Internet.

One of the relative units of measurement are percentages. They're counted from the font size of the parent element, i.e., the element they're in. For example:

```html
<section class="news">
  <h2>News</h2>
</section>
```

```css
.news {
  font-size: 20px;
}

.news h2 {
  font-size: 200%;
}
```

What size will the second level header be? The correct answer is `40px` since the font size for the `news` section is set to `20px`. It's relative to this size and calculated with a value of `200%`. It doesn't matter what other tags there are and in which wrappers these news items are located since the size is calculated from the `font-size` value of the `news` element.

But it's important to remember that `font-size` is an inherited property. If it is not explicitly specified in the `news` element in our example, then, for it, the `font-size` value of the parent will be set. Let's expand on the example:

```html
<main>
  <section class="news">
    <h2>News</h2>
  </section>
</main>
```

```css
main {
  font-size: 16px;
}

h2 {
  font-size: 200%;
}
```

What is the size of the second level header? The correct answer is `32px`. If you build a logical chain of font sizes, it looks like this:

* The `<main>` element has the font size set to `16px`.
* The element with class `news` has no separate font size indication, so it inherits from `<main>`, which is also `16px`
* The second level header has a font size of `200%`. The value is set relative to the font size of the parent, i.e., the block with the class `.news`. Otherwise, it'll be `16px * 2 = 32px`.

There are several other basic relative units of measurement:

1. **em**. is defined relative to the font size of the parent element, i.e., `1.5em` will be 50% larger than the font size of the parent's base font size. It's very similar to using percent, only specified a little differently
2. **rem**. is determined relative to the font size of the root element, i.e., the `html` tag (default value is 16px)
