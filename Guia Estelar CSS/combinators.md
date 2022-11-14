# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre os seletores
* Busca um elemento dentro de outro, mesmo que existam outros elementos no caminho


<body>
	<article>
		<h2>Um Título</h2>
	</article>
</body>

```css
body article h2 {
	color: red;
}
```

## Utilizando combinadores 



<ul>
  <li>Alooo</li>
  <li class="red">Hey</li>
</ul>

```CSS

ul > li[class="red"] {
	color: red;
}
```

Dica:

Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização
Muitas vezes, um simples uso de classes, torna o trabalho mais eficiente