Assim que rodar o comando no seu projeto, verá que temos uma hash, do tipo SHA-1, e também teremos entre parênteses o nosso branch, nesse caso o master, e no commit (sua hash), teremos o autor do commit, a data do mesmo e a mensagem do commit.

Caso queiramos um resultado menor desse comando, podemos usar a opção --oneline, da seguinte forma:

git log --oneline
Ele vai encurtar a hash, retirar o autor, a data e exibir a mensagem do commit ao lado.

Suponhamos que você tem 50 commits, e precisa apenas dos últimos 5, nesse caso, rode o comando a seguir:

git log -n 5
Ou seja, apenas coloque o argumento -n e a quantidade dos últimos commits que deseja.

Caso queira ver os commits após uma data específica, utilize o argumento --since, da seguinte forma:

git log --since=aaaa-mm-dd
Já caso queira os commits antes de uma data específica, use o argumento --until, da seguinte forma:

git log --until=aaaa-mm-dd
Você também pode aplicar um filtro para o autor do commit, para procurar os commits de uma pessoa em específico, usando o argumento --author, utilizado da seguinte forma:

git log --author=nomedoautor(nao precisa ser completo)
Também temos a forma mais poderosa de se utilizar o git log que é com o argumento grep, usado da seguinte forma:

git log --grep="o que quer que esteja buscando, ex: bugfix"
Basicamente significa expressão regular global, é muito comum na programação, e vai ser usado para buscar na mensagem do commit o que quer que você esteja buscando.