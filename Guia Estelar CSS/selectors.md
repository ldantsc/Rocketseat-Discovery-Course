# Selectors

Conecta um elemento HTML com o CSS

## Tipos

- Global selector `*`
- Element/Type selector `h1, h2, p, div`
- ID Selector `#box, #container`
- Class Selector `.red , .m-4`
- Attribute selector, Pseudo-class, Pseudo-element, e outros.

---

## Element Selector

- Todos os elementos HTML

<h1>Título da página</h1>
<p>Conteúdo da minha página</p>

```css
h1 {
  color: blue;
  font-size: 60px;
}

p {
  color: green;
}
```

## ID Selector

- Um elemento que tenha um atributo id
- Cada id deverá ser único
- Usa-se # para indicar um ID selector

<h1 id="title">Título da página</h1>
<p id="content">Conteúdo da minha página</p>

```css
#title {
  color: yellow;
}

#content {
  color: orange;
}
```

## Class Selector

- Os elementos com atributo class
- Podemos ter uma ou mais classes
- Usa-se . para indicar um class selector
- Todos os elementos com a mesma class são alterados

<h1 class="red big">Título da página</h1>
<p class="red big">Conteúdo da minha página</p>

```css
.red {
  color: red;
}

.big {
  font-size: 3em;
}
```

## Attribute Selector

Um elemento que tenha um atributo específico

<h1 title="Algum titlulo">Título da página</h1>
<p title="Conteúdo da página">Conteúdo da minha página</p>

```css
[title] {
  color: orange;
}
```

## Pseudo-class Selector

Elementos em um estado específico

<h1 class="red big">Título da página</h1>
<p class="red big">Conteúdo da minha página</p>

```css
p:hover {
  color: red;
}

h1:hover {
  color: red;
}
```

## Múltiplos

É possível selecionar múltiplos elementos e aplicar alguma regra CSS para todos eles.

Usamos uma separação por vírgulas para isso:

```css
h1,
p,
.title,
.title:hover {
  color: red;
}
```
