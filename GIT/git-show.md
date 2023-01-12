# git show

Podemos usar o comando git show e as letras iniciais da hash de um commit, da seguinte forma:

* git show 7f121d7

Assim, veremos exatamente aonde essas mudanças ocorreram, e o que foi retirado ou adicionado, e podemos ser ainda mais específicos, usando a seguinte opção:

* git show 7f121d7 --color-words

Essa opção vai nos permitir ver as palavras exatas que foram alteradas no nosso commit.

Podemos também ver as mudanças que houveram dentro de um diretório específico (nesse caso o diretório views, dentro do diretório src) através do --, usado da seguinte forma:

* git show 7f121d7 -- src/views/*

Diferentemente do git diff, o git show serve como um atalho para mostrar exatamente o que há em um repositório em qualquer momento da história, enquanto o git diff vai apresentar as diferenças encontradas no working directory e stage area.