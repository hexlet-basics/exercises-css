En los ejemplos anteriores se utilizó un número bastante pequeño de elementos dentro del contenedor flexible. Imaginemos que hay más elementos y que no caben dentro del contenedor. En ese caso, los elementos se desbordarán y seguirán colocándose en el eje principal.

```html
<div class="wrap-stage wrap-stage--nowrap">
  <div class="wrap-chip">1</div>
  <div class="wrap-chip">2</div>
  <div class="wrap-chip">3</div>
  <div class="wrap-chip">4</div>
  <div class="wrap-chip">5</div>
  <div class="wrap-chip">6</div>
</div>
```

```css
.wrap-stage {
  display: flex;
  gap: 12px;
  width: 320px;
  padding: 12px;
  border: 2px dashed #1d4ed8;
  background: #dbeafe;
}

.wrap-stage--nowrap {
  flex-wrap: nowrap;
}

.wrap-chip {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #0ea5e9;
}
```

![Flex container that overflows because wrapping is disabled](../assets/flex-wrap-overflow.png)

Para determinar cómo se comportarán los elementos cuando no haya suficiente espacio, se utiliza la propiedad `flex-wrap`, que puede tener uno de los siguientes valores:

* `nowrap` — valor por defecto. Los elementos no se mueven
* `wrap` — valor más común. Los elementos se mueven cuando no hay suficiente espacio dentro del contenedor
* `wrap-reverse` — los elementos se mueven invirtiendo el orden a lo largo del eje principal. Este orden es útil para crear blogs, ya que las entradas más antiguas se colocarán en la parte inferior

Así es como se comportan los elementos con cada valor:

```html
<div class="wrap-gallery">
  <div>
    <p class="wrap-label">nowrap</p>
    <div class="wrap-stage wrap-stage--nowrap">
      <div class="wrap-chip">1</div>
      <div class="wrap-chip">2</div>
      <div class="wrap-chip">3</div>
      <div class="wrap-chip">4</div>
      <div class="wrap-chip">5</div>
      <div class="wrap-chip">6</div>
    </div>
  </div>

  <div>
    <p class="wrap-label">wrap</p>
    <div class="wrap-stage wrap-stage--wrap">
      <div class="wrap-chip">1</div>
      <div class="wrap-chip">2</div>
      <div class="wrap-chip">3</div>
      <div class="wrap-chip">4</div>
      <div class="wrap-chip">5</div>
      <div class="wrap-chip">6</div>
    </div>
  </div>

  <div>
    <p class="wrap-label">wrap-reverse</p>
    <div class="wrap-stage wrap-stage--wrap-reverse">
      <div class="wrap-chip">1</div>
      <div class="wrap-chip">2</div>
      <div class="wrap-chip">3</div>
      <div class="wrap-chip">4</div>
      <div class="wrap-chip">5</div>
      <div class="wrap-chip">6</div>
    </div>
  </div>
</div>
```

```css
.wrap-gallery {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.wrap-label {
  margin: 0 0 6px;
  font-weight: 600;
}

.wrap-stage--wrap {
  flex-wrap: wrap;
}

.wrap-stage--wrap-reverse {
  flex-wrap: wrap-reverse;
}
```

![nowrap, wrap y wrap-reverse comparados](../assets/flex-wrap-variants.png)
