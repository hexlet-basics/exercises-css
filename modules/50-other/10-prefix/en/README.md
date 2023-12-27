CSS is not a static product; new rules are being added all the time. Before a property becomes an official standard, it goes through a long process of discussion and fine-tuning. Browser makers also try to keep up with the times and add support for modern features to new versions of their products.

This is used to test and adjust the behavior of a property in browsers. If a rule is important, then later browser makers will "agree" on the subtleties of using the rules and implement support in their new browsers.

Many of the properties that you might think are standard have gone from an idea and partial implementation to a common property you use in everyday work. So what happens when a new property comes along?

1. It goes through the discussion phase. Developers agree on how the rule will work, and how and what it will affect on the page
2. Browser developers add functionality to the new feature to their product little by little. Usually, at this time, different browsers handle the properties slightly differently
3. The property gets into the standard and all browsers begin to support it "officially"

If parts 1 and 3 are clear, then part 2 is the most interesting. When the functionality is added, you can start using the property with the following points in mind:

1. The behavior may be slightly different in different browsers
2. The property won't work in earlier versions of the browser

In order not to confuse developers, properties that are not yet fully supported and not part of the standard are designated with constructions called prefixes. They help the browser to determine that there is a new property, and if there is an implementation for it, it'll be executed. If there is no implementation, then the property will be considered invalid and ignored

For example, the `box-shadow` property, which sets the shadow for an element, was once in the discussion and implementation process. To use it, you had to additionally specify prefixes — small additions to the property that are given before the property name. As a result, CSS looked like this:

```css
.shadow {
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}
```

You can see three references to the `box-shadow` property:

* `-webkit-box-shadow` — property for a WebKit browser
* `-moz-box-shadow` — property for browsers based on solutions from Mozilla
* `box-shadow` — property without prefixes

If the browser could not handle the `box-shadow` property, it looked for its `-webkit-` or `-moz-` prefix. If this couldn't be found either, then the rule would be ignored. Nowadays, using these prefixes will help you use the `box-shadow` property in very old Chrome, Safari and Firefox browsers.

You don't need to keep it in your head all the time. Many processes are now automated, including adding prefixes. In the future, you'll discover all the tools to do this if work with web layouts. But it's important to know what prefixes are and how they help new and old browsers
