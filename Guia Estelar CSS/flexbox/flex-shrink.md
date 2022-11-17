# flex-shrink

- O encolher do item dentro do container.
   * padrão flex-shrink: 1; (encurtar em relação ao outros elementos da caixa.)
   * flex-shrink: 0; pegando os 160px da caixa.

;;encolher

```css

.box {
  display:flex;
  width: 160px;
  border: 1px dotted red;
  
}

.box div {
  border: 1px solid;
  flex-basis: 100%;
}

.box div:nth-child(1) {
  flex-shrink: 2;
}

```

eixo coluna

```css

.box {
  display:flex;
  flex-direction: column;
  height: 160px;
  border: 1px dotted red;
  
}

.box div {
  border: 1px solid;
  flex-basis: 100%;
}

.box div:nth-child(1) {
  flex-shrink: 2;
}

```