When you create pages, you often want to control the height and width of blocks. This is useful in long articles when you want to put explanatory text in a small block. This way it will be separated from the main part of the text, and you can see it immediately.

The rules `width` and `height` are used to control the height and width of block elements, taking values for width and height respectively (in pixels or other available units of measure, for example).

Let's create a block 100 pixels high and 100 pixels wide. To visually separate it from the theory in the tutorial, set the background color to black:

```html
<style>
  .square {
    width: 100px;
    height: 100px;
    background-color: #000;
  }
</style>

<div class="square"></div>
```

![A square that is 100px tall and wide](../assets/square-100.png)
