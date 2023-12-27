La animación es un módulo extenso en CSS. Desafortunadamente, no es posible describir todas las ventajas en una sola lección. En esta lección se mostrará el principio básico de la animación en CSS basado en `@keyframes`. Como ejemplo, haremos una animación de texto: el color del texto cambiará de azul a rojo.

Para definir una animación, se utiliza la regla `@keyframes` y el nombre de la animación:

```css
@keyframes cambio-de-color {
  // Aquí irá nuestra animación
}
```

El nombre de la animación puede ser cualquiera. Lo eliges tú mismo. En el futuro, será este nombre el que la propiedad `animation` utilizará para saber qué animación reproducir.

Dentro de `@keyframes`, debes especificar diferentes intervalos de tiempo en los que se producirán cambios. Por ejemplo, al inicio (0% de completitud de la animación) el texto será azul, en la mitad de la animación (50%) será rojo, y al final (100%) volverá a ser azul.

```css
@keyframes color-change {
  0% {
    color: blue;
  }

  50% {
    color: red;
  }

  100% {
    color: blue;
  }
}
```

Ahora debemos aplicar la animación que hemos creado al texto en la página. Para ello, se utiliza la regla `animation` con tres valores principales:

* Nombre de la animación
* Duración de la animación. Se especifica en segundos (1s, 2s, 3s, etc.)
* Si la animación es infinita o no (si es infinita, se especifica el parámetro `infinite`)

```css
.animation-text {
  animation: color-change 3s infinite;
}
```

Solo queda crear un párrafo con la clase correspondiente, y la animación comenzará a funcionar.

<div class="hexlet-basics-example">
  <style>
    @keyframes color-change {
      0% {
        color: blue;
      }

      50% {
        color: red;
      }

      100% {
        color: blue;
      }
    }

    .animation-text {
      animation: color-change 3s infinite;
    }
  </style>
  <p class="animation-text m-0">Texto con animación color-change. El color del texto cambia de azul a rojo y viceversa</p>
</div>
