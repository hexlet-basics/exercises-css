
Durante el curso, nos hemos encontrado con propiedades cuyos valores son colores. Estas propiedades son:

* `color`
* `background-color`
* `border-color`

Para representar un color, se utiliza el modelo RGB hexadecimal, que significa _Red Green Blue_. En CSS, hay dos formas principales de representar un color en RGB:

* Hexadecimal: se utiliza una notación de 6 caracteres divididos en tres bloques de dos valores. Cada bloque representa uno de los colores: rojo, verde o azul
* Utilizando la función `rgb(red, green, blue)`. Esta función acepta tres números del _0_ al _255_, que representan la cantidad de rojo, verde y azul respectivamente

## Notación hexadecimal

Al utilizar esta notación, se utiliza el [sistema hexadecimal](https://es.wikipedia.org/wiki/Sistema_hexadecimal). La notación se divide en tres bloques de dos números:

1. de `00` a `ff` - cantidad de color rojo
2. de `00` a `ff` - cantidad de color verde
3. de `00` a `ff` - cantidad de color azul

```css
/* Color blanco */
color: #ffffff;

/* Color negro */
color: #000000;
```

Supongamos que necesitamos el color violeta para un texto. ¿Cómo se obtiene? Para ello, se mezcla el color rojo y el color azul. El color violeta no tiene color verde. Por lo tanto, se necesita la máxima cantidad en el primer y tercer bloque. El resultado es el color `#ff00ff`

<div class="hexlet-basics-example my-3" style="color: #ff00ff;">
  Texto de color violeta
</div>

Se pueden obtener diferentes variaciones de este color, aumentando o disminuyendo la cantidad de los colores componentes

## Función rgb

La segunda forma de especificar un color utilizando el modelo de color RGB es mediante el uso de la función `rgb()`. Esta función acepta tres números del _0_ al _255_, donde el primer número representa la cantidad de rojo, el segundo número representa la cantidad de verde y el tercer número representa la cantidad de azul. ¿Te suena familiar?

Si piensas que esto se parece al sistema hexadecimal, tienes toda la razón: es exactamente lo mismo. Solo que los colores se escriben en números decimales en lugar de hexadecimales. Por lo demás, todo es igual, lo que significa que se puede crear el color violeta utilizando la función `rgb()`:

```html
<p class="text">Texto de color violeta</p>
```

```css
.text {
  color: rgb(255, 0, 255);
}
```

<div class="hexlet-basics-example my-3" style="color: rgb(255, 0, 255);">
  Texto de color violeta
</div>

Y así es como se verían el color blanco y el color negro utilizando la función `rgb()`:

```css
/* Color blanco */
color: rgb(255, 255, 255);

/* Color negro */
color: rgb(0, 0, 0);
```

## Transparencia y función rgba()

Al utilizar un color de fondo, a menudo se agrega transparencia al color. En el modelo de color RGB, esto se logra utilizando el concepto de _canal alfa_. Este determina el nivel de transparencia del color y se especifica con un número del _0_ al _1_, donde _0_ es completamente transparente y _1_ es completamente opaco.

Para utilizar el canal alfa, se utiliza la función `rgba()`, donde `a` representa `alfa`. Por lo demás, todo es igual que antes. Creemos un fondo violeta semitransparente:

```html
<div class="background">Bloque con fondo violeta semitransparente</div>
```

```css
.background {
  background-color: rgba(255, 0, 255, 0.5);
}
```

<div class="hexlet-basics-example my-3" style="background-color: rgba(255, 0, 255, 0.5);">
  Bloque con fondo violeta semitransparente
</div>
