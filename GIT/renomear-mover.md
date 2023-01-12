# Renomear arquivos

Podemos renomear o arquivo manualmente, e se rodarmos o comando git status veremos que ele mostra o arquivo com nome antigo como removido, e o novo nome consta como não rastreado.

Podemos então usar o git rm (nome antigo), e git add (novo nome), e assim que rodarmos o git status novamente poderemos observar que ele consta agora como renamed (nome antigo) → (nome novo).

Podemos também fazer isso em um único passo, usando o comando git mv, cuja sintaxe é:

* git mv nomeatual.txt novonome.txt

Ao rodar novamente o comando git status veremos que consta como renamed: nomeatual.txt → novonome.txt.

# Mover

também podemos mover arquivos através do git, usando o comando git mv, usado da seguinte forma:

* git mv arquivoquevaimover nomedodiretório/arquivoquevaimover