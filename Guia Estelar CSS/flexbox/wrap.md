# flex-wrap

- Podemos usar multi linhas.
- Cada nova linha, um novo flex container

<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>

```css

.box {
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px dotted black;
  
}

.box div {
  border: 1px solid;
  width: 50vh;
}

```