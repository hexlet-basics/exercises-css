
During this course, we encountered properties whose values are colors. These properties included:

* `color`
* `background-color`
* `border-color`

The hexadecimal RGB model, which stands for _Red Green Blue_, was used to represent colors. CSS uses two basic types of notation to represent colors in RGB:

* Hexadecimal. This is a 6-character notation, divided into three blocks of two values. Each block is responsible for one of the colors: red, green or blue
* The `rgb(red, green, blue)` function. The function accepts three numbers from _0_ to _255_, each of which determines the amount of red, green and blue

## Hexadecimal notation

This one uses [hexadecimal notation](https://en.wikipedia.org/wiki/Hexadecimal). The notation is divided into three blocks of two numbers each:

1. from `00` to `ff` - amount of red color
2. from `00` to `ff` - amount of green color
3. from `00` to `ff` - quantity of blue color

```css
/* White Color */
color: #ffffff;

/* Black Color */
color: #000000;
```

Suppose you want purple for the text. How is it made? To achieve this, red and blue are mixed. There is no green in purple. So, we need to input the maximum in the first and third block. The result is the color `#ff00ff`.

```html
<p class="color-hex">Magenta text rendered via HEX</p>
```

```css
.color-hex {
  color: #ff00ff;
}
```

![Highlighted word rendered through a HEX color](../assets/text-color-hex.png)

You can get different variations of this color by adding or reducing the number of compound colors

## The rgb function

The second way to specify a color using the RGB color model is to use the special function `rgb()`. It takes three numbers from _0_ to _255_, where the first number specifies the amount of red, the second the amount of green, and the third the amount of blue. Does that remind you of anything?

If you think it looks like a hexadecimal system, you are right - the idea is exactly the same. Only we write the colors in the numbers we are accustomed to. Otherwise, everything is the same, which means you can create purple using the `rgb()` function:

```html
<p class="color-rgb">Magenta text rendered via rgb()</p>
```

```css
.color-rgb {
  color: rgb(255, 0, 255);
}
```

![The same magenta color but defined with rgb()](../assets/text-color-rgb.png)

And this is what white and black will look like when using `rgb()`:

```css
/* White Color */
color: rgb(255, 255, 255);

/* Black Color */
color: rgb(0, 0, 0);
```

## Transparency and the rgba() function

When you use background colors, you often use not just a color on its own, you may also add transparency to it. The RGB color model uses the term _"alpha" channel_ for this purpose. This defines how transparent color should be output and is specified by a number from _0_ to _1_, where _0_ is completely transparent and _1_ is completely opaque.

In order to be able to add an alpha channel, the `rgba()` function has been created, where `a` is `alpha`. Otherwise, everything is exactly the same as we learned earlier. Let's make a semi-transparent purple background:

```html
<div class="background-demo">Semi-transparent magenta background</div>
```

```css
.background-demo {
  background-color: rgba(255, 0, 255, 0.5);
  color: #3b0764;
  padding: 16px;
  border-radius: 12px;
  font-weight: 600;
}
```

![Block with a semi-transparent purple background](../assets/background-color-rgba.png)
