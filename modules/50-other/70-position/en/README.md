CSS provides a great deal of flexibility in how elements can be rendered visually. One of the key features of CSS is positioning, the ability to influence where an element is displayed on the page.

With the `position` rule, we can `take` a block out of the layout and position it as we see fit. The basic values of the `position` property are as follows:

* `relative` (relative positioning). Allows you to change the position of an element relative to where it was before the property was applied. In this case, the place on the page that the block occupied before will remain. In other words, other blocks will not go where the block was before the rule was applied.
* `absolute` (absolute positioning). "Takes the block out of HTML and relocates it to the upper-left corner of the page (or parent element if it has a `position` property set to `fixed`, `absolute`, `relative`, or `sticky`). Unlike `relative`, the place where the `absolute` block was located will be removed, and other blocks can take that place.
* `fixed`. Like `absolute`, this rule will extract the block from the HTML markup and place it in the upper left corner. The difference from absolute positioning is that the block will follow the page and will always be within the user's view. This is useful for creating menus that need to follow the user.


To manage the positioning, four CSS rules are used: `top`, `right`, `left` and `bottom`, whose values are the coordinates (in pixels, for example) where the block will be located.

```html
<style>
  .absolute-position {
    position: absolute;
    top: 100px;
    left: 100px;
  }
</style>

  <div class="absolute-position">A block with absolute positioning that will be 100 pixels from the top and 100 pixels from the left of the page</div>
```
