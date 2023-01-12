# git add


Primeiramente temos o Working Directory, as vezes também chamado de working tree, é o local onde estamos trabalhando, mas não é aqui onde a magia ocorre, na verdade é na Stage Area, as vezes também chamada de Index ou ainda de Stage tree, é aqui onde seus arquivos vão ser preparados para poderem ser salvos no repositório, que é o banco de dados dos nossos arquivos, onde todos os nossos commits vão ser salvos.

Mas vamos começar pelo cenário de que nós temos um arquivo em uma pasta, que precisamos rastrear, antes de tudo vamos iniciar o git através do comando git init, assim que nosso diretório estiver pronto, vamos usar o comando git add + o nome do arquivo que queremos adicionar ao nosso Stage Area, mas também podemos fazer isso de outra forma, que é o comando git add .(ponto) , que vai levar todos os arquivos e pastas do nosso working directory ao stage area, o que não é recomendado, já que é melhor fazer uma série de pequenos commits, mas ainda é possível realizar um commit com quantos arquivos quisermos.

Uma outra maneira de adicionar múltiplos arquivos além do git add .(ponto), é possível adicionar arquivos por sua extensão, através do comando git add *.(extensão do arquivo).