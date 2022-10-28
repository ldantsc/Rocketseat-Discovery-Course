# Element Stacking

É o empilhamento de elementos. Podemos usar o **z-index** para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.

```css

.box1 {
  background-color: red;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 3; /*elemento na camada 3*/
}

.box2 {
  background-color: green;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2; /*elemento na camada 2*/
}

.box3 {
  background-color: blue;
  position: absolute;
  left: 15px;
  top: 15px;
  z-index: 5; /*elemento na camada 5*/
}
```