# Page Layouts

    - Tables
    - Floats e clear
    - Frameworks e Grid System
    - Flexbox
    - Grid

## Position 

Controla onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

- name: position
- Value: static(default) | relative | absolute | fixed

Lembrando que o fluxo normal dos elementos é ficar um abaixo do outro, a não ser no caso de elementos inline, que ficam um ao lado do outro.

## Static

Por padrão os elementos são **static**. Isso significa que os elementos irão seguir o fluxo normal do HTML.

## Relative

O position indica onde o elemento vai ser posicionado na página. Ao usar o position podemos adicionar outras propriedades como top, right, bottom, left e z-index, que vão determinar o posicionamento final do elemento.

Quando o position é **relative** os elementos são deslocados do seu posicionamento normal, mas sem afetar o posicionamento de outros elementos da página.

```css

.box1 {
  background-color: red;
  position: relative;
  left: 100px;
  top: 80px
}

```

## Absolute

Quando o position é absolute o elemento é deslocado saindo do fluxo normal. O elemento de position absolute é posicionado em relação ao seu parent element mais próximo. Se esse elemento "pai" não existir, ele será posicionando em relação ao bloco contendo a raiz do elemento.

```css

.box1 {
  background-color: red;
  position: absolute;
  left: 100px;
  top: 80px
}

```

## Fixed

Quando aplicado o position **fixed** é como se criasse um elemento flutuante que fica fixo na página, independente do scrolling feito.