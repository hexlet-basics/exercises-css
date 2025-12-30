Uno de los aspectos más potentes de Flex es la capacidad de alinear contenido en cualquier eje. En esta lección veremos cómo `justify-content` distribuye los elementos a lo largo del eje principal y cómo `align-items` hace lo mismo en el eje secundario.

```html
<div class="alignment-stage">
  <div class="alignment-item">1</div>
  <div class="alignment-item">2</div>
  <div class="alignment-item">3</div>
</div>
```

```css
.alignment-stage {
  display: flex;
  gap: 12px;
  height: 200px;
  padding: 24px;
  border-radius: 16px;
  background: rgba(148, 163, 184, 0.35);
}

.alignment-item {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: #fbbf24;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

![Contenedor resaltado en gris con tres elementos numerados](../assets/flex-alignment-base.png)

## Alineación en el eje principal

`justify-content` distribuye los elementos a lo largo del eje principal (horizontal por defecto).

```html
<div class="justify-gallery">
  <div>
    <p class="alignment-label">flex-start</p>
    <div class="alignment-stage alignment-stage--justify-start">
      <div class="alignment-item">1</div>
      <div class="alignment-item">2</div>
      <div class="alignment-item">3</div>
    </div>
  </div>
  <div>
    <p class="alignment-label">flex-end</p>
    <div class="alignment-stage alignment-stage--justify-end">
      <div class="alignment-item">1</div>
      <div class="alignment-item">2</div>
      <div class="alignment-item">3</div>
    </div>
  </div>
  <div>
    <p class="alignment-label">center</p>
    <div class="alignment-stage alignment-stage--justify-center">
      <div class="alignment-item">1</div>
      <div class="alignment-item">2</div>
      <div class="alignment-item">3</div>
    </div>
  </div>
  <div>
    <p class="alignment-label">space-between</p>
    <div class="alignment-stage alignment-stage--justify-between">
      <div class="alignment-item">1</div>
      <div class="alignment-item">2</div>
      <div class="alignment-item">3</div>
    </div>
  </div>
  <div>
    <p class="alignment-label">space-around</p>
    <div class="alignment-stage alignment-stage--justify-around">
      <div class="alignment-item">1</div>
      <div class="alignment-item">2</div>
      <div class="alignment-item">3</div>
    </div>
  </div>
</div>
```

```css
.justify-gallery {
  display: grid;
  gap: 16px;
}

.alignment-label {
  margin: 0 0 6px;
  font-weight: 600;
}

.alignment-stage--justify-start {
  justify-content: flex-start;
}

.alignment-stage--justify-end {
  justify-content: flex-end;
}

.alignment-stage--justify-center {
  justify-content: center;
}

.alignment-stage--justify-between {
  justify-content: space-between;
}

.alignment-stage--justify-around {
  justify-content: space-around;
}
```

![Comparativa de flex-start, flex-end, center, space-between y space-around](../assets/flex-justify-variants.png)

## Alineación en el eje secundario

`align-items` controla la posición sobre el eje perpendicular al principal. Con `flex-direction: row` esto significa mover los elementos verticalmente.

```html
<div class="align-gallery">
  <div>
    <p class="alignment-label">flex-start</p>
    <div class="alignment-stage alignment-stage--align-start">
      <div class="alignment-item">1</div>
      <div class="alignment-item">2</div>
      <div class="alignment-item">3</div>
    </div>
  </div>
  <div>
    <p class="alignment-label">flex-end</p>
    <div class="alignment-stage alignment-stage--align-end">
      <div class="alignment-item">1</div>
      <div class="alignment-item">2</div>
      <div class="alignment-item">3</div>
    </div>
  </div>
  <div>
    <p class="alignment-label">center</p>
    <div class="alignment-stage alignment-stage--align-center">
      <div class="alignment-item">1</div>
      <div class="alignment-item">2</div>
      <div class="alignment-item">3</div>
    </div>
  </div>
</div>
```

```css
.align-gallery {
  display: grid;
  gap: 16px;
}

.alignment-stage--align-start {
  align-items: flex-start;
}

.alignment-stage--align-end {
  align-items: flex-end;
}

.alignment-stage--align-center {
  align-items: center;
}
```

![Ejemplos de flex-start, flex-end y center para align-items](../assets/flex-align-items.png)

Cuando se cambia el eje principal con `flex-direction: column`, `justify-content` pasa a controlar el reparto vertical del espacio.

```html
<div class="alignment-stage alignment-stage--column">
  <div class="alignment-item">1</div>
  <div class="alignment-item">2</div>
  <div class="alignment-item">3</div>
</div>
```

```css
.alignment-stage--column {
  flex-direction: column;
  justify-content: space-between;
}
```

![Columnas alineadas con justify-content: space-between](../assets/flex-column-justify.png)
