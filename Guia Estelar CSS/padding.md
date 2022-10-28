## padding

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left
- values: `<length>` | `<percentage>` | auto

```css

div {
    /* shorthand */
    padding: 12px 16px 10px 4px;         `TOP - RIGHT - BOTTOM - LEFT`
    padding: 12px 16px 0;                `TOP - RIGHT/LEFT - BOTTOM`
    padding: 8px 16px;                   `TOP/BOTTOM - RIGHT/LEFT`
    padding: 8px;                        `ALL`
}
```

    * Padding poderá causar diferença na largura de um elemento   