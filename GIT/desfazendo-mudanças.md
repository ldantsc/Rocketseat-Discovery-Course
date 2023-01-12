# Desfazendo mudanças

## git restore

Nesta aula, veremos como reverter alterações que foram feitas no seu arquivo, que você possa ter feito sem querer e ter salvo no seu editor.

Apenas rode o comado a seguir:

* git restore nomedoarquivo

Esse comando vai fazer com que as alterações sejam descartadas, ao pegar uma versão anterior do arquivo no seu repositório.

## Trazendo de volta pro Staged

Desfazer alguma alteração que foi ao nosso stage area, usamos o comando a seguir:

* git restore --staged nomedoarquivo

Há também outra forma, que é no caso de termos múltiplos arquivos, e é usado da seguinte forma:

* git restore --staged .

Podemos rodar o comando git status para conferir a remoção do(s) arquivo(s) do stage area.

## Corrigindo Commit 

Caso queiramos alterar algo de importante no nosso mais recente commit, como a mensagem, vamos usar uma opção do comando commit, que é a --amend, dessa forma:

* git commit --amend -m "nova mensagem"

O git commit --amend também serve para modificar o conteúdo do commit, podendo servir para remover arquivos ou adicionar novos arquivos mas apenas válidos para o último commit, não tente modificar outros commits, pois isso é algo muito avançado e vai ser uma grande dor de cabeça.

## Recuperando Arquivos 

Podemos recuperar nossos commits antigos usando o comando git checkout.

Primeiramente usamos o git log para encontrar o commit que precisamos, e copiamos os primeiros caracteres da hash, após isso, podemos rodar o comando, da seguinte forma:

* git checkout HASH -- nomedoarquivo

(Cuidado, caso haja um arquivo de mesmo nome e formato, será inteiramente substituído, fazendo com que você precise pegar a versão mais recente num último commit)

## Removendo Arquivos não Rastreados

O comando git clean vai deletar tudo que não está rastreado no seu master branch, mas cuidado, ele será apagado para sempre, não será possível recuperá-los, pois não vão para um lixeira.

Caso queira confirmar o que o comando vai fazer use a opção -n, que vai mostrar os arquivos que o git vai apagar.

## Revertendo Commit

O primeiro passo é ter um diretório limpo, sem nenhum arquivo não rastreado, sem nada na stage area.

Usaremos então o comando git log, e onde nossa HEAD estiver, a cada commit subtrairemos 1, então, considere o commit atual como 0, o abaixo desse -1, o abaixo desse -2 e por aí vai.

Use o comando git revert, mas ao invés de um sinal de menos(-), use um til (~), da seguinte maneira:

* git revert HEAD~5

Também há outra forma de fazer isso, que é usando a hash de onde exatamente você deseja reverter, hash que pode ser obtida facilmente através do comando git log --oneline, ficaria parecido com:

git revert 7f121d7