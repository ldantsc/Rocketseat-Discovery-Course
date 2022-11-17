# flex-basis

* Por padrão o valor dele é auto


flex-basis propriedade especifica o comprimento inicial de um item flexível.

Observação: se o elemento não for um item flexível, a flex-basis propriedade não terá efeito.

```css

.box {
  display:flex;
  border: 1px dotted red;
}

.box div {
  border: 1px solid;
  flex-basis: 25px;
}

.box div:nth-child(1) {
  flex-basis:10vh;
}

```
