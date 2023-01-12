# gitignore

O primeiro passo é criar o arquivo .gitignore, adicionar o nome do arquivo ou diretório que desejamos ignorar, e adicionar o nosso .gitignore ao nosso repositório, primeiro com o comando git add, e depois o git commit.

O seu .gitignore já foi para dentro do repositório e está pronto para rastrear os arquivos.

Caso tenha algum arquivo no seu repositório que você tenha adicionado ao .gitignore, como no exemplo do vídeo, o .DS_Store, apenas rode o comando abaixo:

* git rm -r --cached .

Esse comando vai fazer o git parar de rastrear todos os arquivos, deixando-os no working directory apenas.

Após isso, executaremos o comando git add . que vai colocar todos os arquivos novamente na stage area, exceto os que serão ignorados pelo nosso .gitignore.