# Pseudo-classes


É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse sobre ele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class `:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child
* :nht-of-type()
* :nth-child()

## Ações do Usuário

* :hover
* :focus

## Atributos 

* :disable 
* :required

## Referência

**https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes**


--------------------------------------------------------------------------------------------------------

## first-child

:first-child

* É quando queremos selecionar o primeiro filho de um grupo de elementos.

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>

```CSS

ul li:first-child {
  font-weight: bold;
}

```

## nth-of-type

:nth-of-type()

* Pega o elemento por tipo e posição

<ul>
  <h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>


```CSS


ul li:nth-of-type(1) {
  font-weight: bold;
}

```

## nth-child

:nth-child()

* É quando queremos selecionar o primeiro filho de um grupo de elementos.


<ul>
	<h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>


```CSS

ul li:nth-child(2) {
  font-weight: bold;
}

```

## nth-child odd e even

:nth-child(odd) e :nth-child(even)

even - números pares
odd - números ímpares

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>

```CSS

ul li:nth-child(odd) {
  color: gray;
}

```

## Ações do usuário

Algumas estilos só são aplicados quando o usuário faz alguma ação na página.

:hover

Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link

```css

a:hover {
  color: red;
}

```

:focus 

é aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual o input "ativo".

```css

input:focus {
  border-color: red;
}

```
## disabled e required

Também podemos usar atributos para selecionar elementos no CSS

Atributos
:disabled



<input type="text" disabled>

```CSS

input:disabled {
  background-color: green;
}

```

:required

<input type="text" required>

```CSS

input:required {
  background-color: red;
}

```