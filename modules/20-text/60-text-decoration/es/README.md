Para enfatizar el texto, a menudo se utiliza <u>subrayado</u>. Esto muestra la importancia de la palabra o texto actual (a menudo también se utiliza para indicar enlaces en el documento). Otra forma de estilizar el texto es a través del <s>tachado</s>, que muestra una parte incorrecta del texto, por ejemplo "Y <s>así</s> no, niños".

Para este tipo de formato se utiliza la propiedad `text-decoration` con tres propiedades principales:

* `underline` — <u>Subrayado del texto</u>
* `line-through` — <s>Tachado del texto</s>
* `overline` — <span style="text-decoration: overline;">Sobrerayado del texto</span>

Para desactivar el subrayado en los enlaces se utiliza el valor `none`. A menudo se utiliza para eliminar el subrayado en los enlaces, que está activado por defecto

```html
<a href="#">Ordinary link underlined by default</a>
<a href="#" class="text-decoration-none">Non-underlined link</a>
```

```css
.text-decoration-none {
  text-decoration: none;
}
```

![Two links, one underlined and one without decoration](../assets/text-decoration-links.png)
