# Conceitos

## Estagios

Para podermos iniciar um projeto, colocamos o git init (ou git clone, caso queiramos copiar os arquivos de outro repositório, mas veremos isso mais adiante), após isso, o git vai iniciar um repositório local, fazendo com que nosso arquivos fiquem no Working Directory, a primeira etapa do processo. Após isso, faremos o git add, que nos coloca na Stage Area, a segunda etapa do processo, e finalmente faremos um commit, para levar nossos arquivos até o repositório local.

O working Directory é o diretório no qual se encontra nosso projeto, então os arquivos são preparados para serem commitados, a Stage Area, onde nosso arquivos ficam preparados, para podermos enfim criarmos o nosso commit, e é a partir desse ponto em que nosso arquivo fica salvo como um ponto na história

## Git Workflow 

Primeiramente suponhamos que temos um arquivo, e nós o preparamos através do git add. Isso significa que ele teve uma cópia de si feita, e essa cópia foi enviada para a nossa stage area, então temos dois arquivos, onde podemos trabalhar em nosso working directory, enquanto nossa versão no stage area continua a mesma, podendo ter duas versões diferentes do nosso arquivo.

Podemos então colocar ele no nosso repositório local, através do comando git commit, onde criamos um ponto na história, onde temos nosso arquivo naquele momento do tempo.

Agora faremos uma alteração nesse arquivo, e teremos então o arquivo (v2), e faremos o mesmo processo para ele, passando para o stage area, e iniciando um commit, então no nosso repositório teremos a v1 e a v2, a v2 ficando por último, visto que é uma linha do tempo, então podemos criar a v3 e fazer o mesmo processo, criar a v4 e repetir, e nós teremos todas as versões do nosso arquivo salvas dentro do nosso repositório.

## Hash SHA-1

A cada commit que criamos, o git vai gerar um checksum, que converte os dados da nossa operação em um número, o que garante a integridade dos nossos dados. Essa hash é uma linha de 40 caracteres hexadecimais.

Dentro dessa string existe uma snapshot, que mostra o autor, o pai e a mensagem do nosso commit.

O pai do commit é o commit do qual ele foi criado, então o nosso primeiro commit sempre terá um valor nulo, enquanto os próximos terão o valor do commit anterior a ele.

## Head

No git, a HEAD é um ponteiro, que nos aponta em que ponto da história estamos, em qual commit nós estamos.