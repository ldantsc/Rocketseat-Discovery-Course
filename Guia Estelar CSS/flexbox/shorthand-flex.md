# fle Shorthand

- flex-grow flex-shrink flex-basis
- podem ter 1, 2 ou 3 valores

* flex: grow, shrink, basis;


```html
<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
```

```css
.box {
  display:flex;
  border: 1px dotted red; 
}

.box div {
  border: 1px solid;
  flex: 1;
}
```

* se unidade de medida, ex: flex: 1 40px; flex: grow basis;

```css
.box {
  display:flex;
  border: 1px dotted red;
}

.box div {
  border: 1px solid;
  flex: 0 40px; 
}
```
