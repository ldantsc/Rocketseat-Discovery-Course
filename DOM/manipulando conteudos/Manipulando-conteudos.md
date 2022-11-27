# Manipulando conteúdos


* textContent (Alterar conteúdo de texto do elemento)
* innerText   (Trocar texto do HTML [parecido com textContent])
* innerHTML   (Trocar o conteúdo HTML)
* Value       (Manipular valor de um input)

## Manipulando Atributos


* setAttribute (adicionar um atributo)
* getAttribute (Pegar apenas o atributo existente dentro da tag)

```html

    <body>
        <header class="bg"> <!-- Manipulando a tag header -->
            <h1>Olá mundo!</h1>
        </header>
    </body>

```


```js

/* Selecionando a tag header do HTML */
const header = document.querySelector('header')

/* Adicionando o atributo id na tag header */
header.setAttribute('id', 'header')

/* Pesquisando novamente o atributo da tag e exibindo no console*/

const headerID = document.querySelection('#header')


/* Apenas o atributo id */
console.log(headerID.getAttribute('id'))

/* Remover um atributo */

header.removeAttribute('id')
header.removeAttribute('class')

``` 

