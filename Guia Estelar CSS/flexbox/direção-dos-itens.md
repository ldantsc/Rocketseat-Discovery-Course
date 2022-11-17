# Direção dos itens

- Flex é uma dimensão (horizontal e vertical)
- podemos mudar a direção com `flex-direction`
- valores (row | row-reverse | column | column-reverse)

```css

.container {
    display:flex;
    flex-direction: row-reverse;
}

.container {
    display:flex;
    flex-direction: column-reverse;
    height: 80vh;
}
```