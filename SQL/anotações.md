

```sql
-- Selecionar todos da tabela aluno cuja a matricula é igual a 3

SELECT * FROM aluno WHERE matricula = 3

-- Selecionar todos da tabela aluno da coluna cpf é igual a n/number
-- o igual "=" só funciona com campos que são do tipo number
SELECT * FROM aluno WHERE cpf = 45678945678

--usar like caso a busca seja um campo de texto, colocar aspas
SELECT * FROM aluno WHERE nome like = 'nome'

--primeira letra do nome seja M quando não sei o restante da string
SELECT * FROM aluno WHERE nome like = 'M%'

--ultima letra do nome seja A quando não sei o começo da string
SELECT * FROM aluno WHERE nome like = '%a'
