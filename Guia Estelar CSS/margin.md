## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentage>` | auto

```css

div {
    /* shorthand */
    margin: 12px 16px 10px 4px;         `TOP - RIGHT - BOTTOM - LEFT`
    margin: 12px 16px 0;                `TOP - RIGHT/LEFT - BOTTOM`
    margin: 8px 16px;                   `TOP/BOTTOM - RIGHT/LEFT`
    margin: 8px;                        `ALL`
}
```

    * Cuidado com margin collapse (top se ajunta ao bottom)   