Una forma conveniente de establecer propiedades para una fuente es utilizando la regla `font`, que permite especificar:

* `font-style`
* `font-variant`
* `font-weight`
* `font-size` / `line-height` (estas dos reglas se escriben separadas por una barra)
* `font-family`

¡Seis reglas diferentes en una sola! Esto ayuda a reducir el código CSS y mejorar su legibilidad. Los obligatorios son `font-size` y `font-family`. Los demás no es necesario especificarlos.

Ejemplo de entrada con todas las reglas posibles: `font: italic small-caps bold 24px/1.2 Arial;`

Supongamos que necesitamos una fuente en negrita cursiva con un tamaño de fuente de 24 píxeles de la familia de fuentes Arial, entonces la regla en CSS se vería de la siguiente manera:

```css
.text {
  font: italic bold 24px Arial;
}
```

![Text rendered with the font shorthand rule](../assets/font-shorthand.png)

Ten en cuenta el orden de los valores dentro de la propiedad `font`. Primero van las reglas de estilo, luego el tamaño de fuente y su altura de línea, y luego la familia de fuentes. Esto es importante, ya que en otro orden el navegador puede procesar incorrectamente el resultado.

Al especificar la propiedad `font-family`, también se recomienda especificar una familia de fuentes genérica. Esto es necesario para que, en caso de que el usuario no tenga la fuente, se seleccione una adecuada de las instaladas en su sistema. Al igual que al especificar una sola propiedad `font-family`, todas las fuentes deben separarse por comas. Esto también se aplica a la familia de fuentes.

```css
.text {
  font: italic bold 24px Arial, sans-serif;
}
```

## Uso de una o varias reglas

Esta sección se aplica no solo a la regla `font`, sino a todas las reglas generales que aprenderás durante el curso. Por un lado, parece que el uso de una sola regla reduce la cantidad de líneas que se utilizan en CSS. Esto es cierto, pero hay dos problemas principales al usar estas propiedades:

1. Recordar el orden correcto de los valores. Al utilizar propiedades genéricas, siempre debes tener en cuenta el orden correcto de los valores de las propiedades. Es fácil cometer errores en las primeras etapas de aprendizaje. Una buena opción sería utilizar propiedades individuales, pero en el mismo orden en que aparecen en la propiedad genérica. Con la experiencia, podrás cambiar a una sola regla.
2. Las propiedades genéricas anulan las individuales. Si en el código especificaste `font-variant: small-caps;` y luego aplicaste `font: 16px/24px sans-serif;` para el mismo elemento, las mayúsculas se restablecerán al valor predeterminado.
