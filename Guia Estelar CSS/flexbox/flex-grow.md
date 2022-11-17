# flex-grow

- O crescimento do item dentro do container em relação aos espaços vazios.

```css

.box {
  display: flex;
  border: 1px dotted red;
  
}

.box div {
  border: 1px solid;
  flex-basis: auto;
}

.box div:nth-child(1) {
  flex-grow: 1;
}

```

eixo coluna

```css

.box {
  display: flex;
  flex-direction: column;
  height: 120px;
  border: 1px dotted red;
  
}

.box div {
  border: 1px solid;
  flex-basis: auto;
}

.box div:nth-child(1) {
  flex-grow: 1;
}