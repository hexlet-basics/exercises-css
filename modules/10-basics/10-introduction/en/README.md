
The HTML markup language course covered various elements that have a default style - indented paragraphs, color-coded links, different-sized headings, etc. As a developer, you can change this styles or add entirely new ones. Want to add a background to the text? Resize elements? Create an animation? You can do all this with CSS (Cascading Style Sheets), the language that defines how HTML elements will look in the browser.

This CSS course is a logical continuation of the [HTML course] (https://code-basics.com/languages/html). Many of the tags and concepts that we'll be encountering along the way have already been covered.

The example below shows how to render text without using your CSS (i.e., using the styles your browser "puts in") and how to style a document using CSS.

## Example of text with a standard layout

<div class="hexlet-basics-example my-3">
  <p class="h2">Paragraphs</p>
  <p>Paragraphs are created using a paired <code>&lt;p&gt;</code> tag with a small amount of text in the body. For example:</p>
  <pre><code>&lt;p&gt;First paragraph&lt;/p&gt;
&lt;p&gt;Second paragraph&lt;/p&gt;</code></pre>
</div>

## Example text with custom design

<div class="hexlet-basics-example my-3">
  <p class="border-bottom display-6 pb-2">Paragraphs</p>
  <p class="lead">Paragraphs are created using a paired <code>&lt;p&gt;</code> tag with a small amount of text in the body. For example:</p>
  <pre class="bg-light my-4" style="border-left: 5px solid #673ab7!important;"><code>&lt;p&gt;First paragraph&lt;/p&gt;
&lt;p&gt;Second paragraph&lt;/p&gt;</code></pre>
</div>

The text is now easier to read, and you can quickly separate code samples from descriptions. This course will cover the basic rules of CSS for working with text and blocks, which will allow you to design your text and visually structure information.
