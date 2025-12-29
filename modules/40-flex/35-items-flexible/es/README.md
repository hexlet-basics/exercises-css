Flex le dio a los desarrolladores una de sus características más potentes: la flexibilidad. Cada elemento puede crecer o encogerse automáticamente según el espacio disponible en el contenedor.

Hay dos propiedades clave para controlar este comportamiento:

1. `flex-grow` — define qué parte del espacio libre recibe un elemento
2. `flex-shrink` — indica cuánto puede reducirse un elemento cuando falta espacio

En la práctica se suelen usar valores sencillos (0 o 1) para evitar cálculos complejos.

```html
<div class="items-track">
  <div class="items-chip chip-red">Item 1</div>
  <div class="items-chip chip-dark">Item 2</div>
  <div class="items-chip chip-blue">Item 3</div>
  <div class="items-chip chip-green">Item 4</div>
</div>
```

```css
.items-track {
  display: flex;
  gap: 12px;
  width: 600px;
  padding: 16px;
  border-radius: 16px;
  background: rgba(148, 163, 184, 0.35);
}

.items-chip {
  width: 100px;
  height: 50px;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chip-red { background: #ef4444; }
.chip-dark { background: #0f172a; }
.chip-blue { background: #2563eb; }
.chip-green { background: #22c55e; }
```

![Elementos con un ancho fijo dentro del contenedor](../assets/flex-items-fixed.png)

Si damos `flex-grow: 1` a todos los elementos, el espacio libre (por ejemplo, 200 píxeles sobrantes) se reparte equitativamente entre ellos.

```css
.items-chip {
  flex-grow: 1;
}
```

![Los elementos crecen a partes iguales gracias a flex-grow: 1](../assets/flex-items-grow.png)

También se puede aplicar `flex-grow: 1` solo a un elemento para que ocupe todo el espacio restante, mientras el resto mantiene su ancho base. `flex-shrink` funciona de forma similar pero restando espacio: con el valor por defecto `1`, todos los elementos pueden encogerse proporcionalmente cuando el contenedor no tiene suficiente ancho.
