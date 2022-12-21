# EJS

* Iniciamos o npm (npm init -y) criando o arquivo .json no projeto
* Criando o .html, feito e estilizado com bootstrap
* após o .html , o formato do arquivo foi trocado para .ejs
* instalando via npm os modulos ejs e express
 - express (Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web.)
 - ele vai renderizar js para o navegador
 **https://expressjs.com/pt-br/guide/routing.html**

* criado arquivo server.js
* precisamos criar uma pasta views e passar o index.js para dentro desse diretório
    *Failed to lookup view "index" in views directory "D:\Rocketseat\node-ejs\views"*
 - o express por padrão espera que o arquivo a ser renderizado esteja dentro do diretório views

* rodar server.js
* pagina sendo renderizada em localhost:8080
* na pasta views, posso agora separar partes do html em para outros arquivos .ejs *paginas dinâmicas*
 
 - Não é preciso parar o node server.js, porem se for alterar arquivos js precisamos parar o servidor e rodar o arquivo novamente

 *sintaxe ejs para incluir alguma parte de uma página, ex: <%- include('header'); %>*

## views e partials - Organização

* organizar arquivos entre paginas e partes de uma pagina separadamente
    - criar 2 pastas dentro do diretório views 
        - pages
        - partials
* mudar o caminho no server.js
    - Não é necessario "views/pages/index" pois o index ja esta implicito
* mudar o caminho html .ejs
    - <%- include('../partials/header'); %>
* rodar novamente o server



