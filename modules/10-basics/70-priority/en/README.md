Speaking of cascading, you may be wondering what happens if different sources have the same rules for an element, but with different values. In that case, there are rules that prioritize styles from different sources. In order of importance, the list looks like this:

* Styles in a tag attribute
* Styles in a separate file
* Default styles added by the browser

The values specified in the `style` attribute will be more important than the properties in the `<style>` tag, and they will be more important than the default browser styles.

## Priority selectors

An important feature of CSS is that different types of selectors have different priorities. If styles contradict each other in different selectors, the priority principle comes into play.

Let's look at an example. Let's create a paragraph with the class as `red` and the identifier as `blue`.

```html
<p id="blue" class="red">Text with the class red and identifier blue</p>
```

Let's add conflicting styles for class, identifier, and tag:

```css
p {
  color: black;
}

.red {
  color: red;
}

#blue {
  color: blue;
}
```

What color will the paragraph be? Try running this example in the editor. You'll see that the text is blue. What does this have to do with anything?

Selectors also have priorities. Conventionally, you can put the selectors in the following order of priority:

1. Selector by ID (`#blue`)
2. Selector by class (`.red`)
3. Selector by tag (`p`)

Where 1 is the highest priority and 3 is the lowest.

From these rules it can be understood that the properties specified in the selector by identifier will have a higher priority than the styles in the selector by tag and class. That is why the paragraph in the last example was blue.

This is easy to remember if the selectors are small, but they can be more complex. The selector can be a combination of classes, tags, and so on. For example:

```html
<p class="paragraph color-primary">Paragraph</p>
```

```css
.paragraph.color-primary {
  color: blue;
}
```

Here, a selector for two classes was used at once. This means that styles will only be applied to an element that has both classes. This separation helps developers pinpoint styles for similar elements. For example:

```html
<p class="paragraph color-primary">Paragraph</p>
<p class="paragraph">Paragraph</p>
<p class="paragraph color-primary">Paragraph</p>
```

```css
.paragraph {
  color: red;
}

.paragraph.color-primary {
  color: blue;
}
```

In this example, all paragraphs with the `paragraph` class will have red text, but if the `color-primary` class is also set, the color will be blue. Why does this happen? These selectors also have their own priorities. In complex selectors, both the number of occurrences of a particular selector and the total weight are counted.

To determine the priority, you can use a table where each selector is given a "weight":

* Tag selector: **1**
* Class selector: **10**
* ID selector: **100**
* Style in tag attribute: **1000**

To find out which selector will have the greater weight, you have to add up all the values obtained using this table.

* The `.paragraph` selector consists of one class, so its weight is 10
* The selector `.paragraph.color-primary` consists of two classes. Its weight is 20.

Thus, the properties in the `.paragraph.color-primary` selector will have a higher priority than those inside the `.paragraph` selector.

This table doesn't tell the whole story, but it can be used in the early stages of learning CSS. With practice, you will learn how to determine the priority of selectors on your own
