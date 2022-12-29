# git-config

git config --global user.name "Seu nome completo entre aspas"
git config --global user.email seuemailaqui@dominio.com

- Isso é importante porque em cada commit essa informação será utilizada, e é carimbada de forma imutável nos commits que você começa a criar.

- Caso você queira substituir essa informação para um projeto específico, apenas rode o comando sem a opção 
--global dentro daquele projeto.

- Caso queira trocar o editor padrão, que é o vim, pelo VS Code, rode o comando abaixo:

git config --global core.editor "code -w"

- Por fim, caso queira verificar as suas configurações, apenas rode o comando abaixo:

git config --list