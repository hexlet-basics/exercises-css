Durante el curso nos hemos encontrado con propiedades cuyos valores son colores, como `color`, `background-color` o `border-color`. Para representarlos en CSS se utiliza sobre todo el modelo RGB, ya sea en notación hexadecimal o con la función `rgb()`.

## Notación hexadecimal

El formato HEX divide el color en tres bloques de dos dígitos (`#rrggbb`), donde cada bloque va de `00` a `ff` y representa la intensidad de rojo, verde o azul.

```html
<p class="color-hex">Magenta text rendered via HEX</p>
```

```css
.color-hex {
  color: #ff00ff;
}
```

![Highlighted word rendered through a HEX color](../assets/text-color-hex.png)

## Función rgb()

`rgb()` funciona igual que HEX pero usando números del 0 al 255. Cada parámetro indica cuánto rojo, verde o azul debe mezclarse.

```html
<p class="color-rgb">Magenta text rendered via rgb()</p>
```

```css
.color-rgb {
  color: rgb(255, 0, 255);
}
```

![The same magenta color but defined with rgb()](../assets/text-color-rgb.png)

## Transparencia con rgba()

Si necesitas establecer transparencia para un color de fondo, añade un cuarto parámetro denominado canal alfa (`0` completamente transparente, `1` opaco).

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
