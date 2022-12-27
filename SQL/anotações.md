

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

-- Usando operadores relacionais...

-- >= Maior ou igual
-- <= Menor ou igual
-- <> Não igual a
-- != diferente de

SELECT * FROM aluno WHERE matricula <> 2
SELECT * FROM aluno WHERE matricula >= 2

-- Usando operadores matemáticos...

-- + Adição
-- - Subtração
-- / Divisão
-- * Mutiplicação
-- % Modulo, resto da divisão

SELECT * FROM aluno WHERE matricula = 1+1 --matricula 2
SELECT * FROM aluno WHERE matricula = 3*1 --matricula 3
SELECT * FROM aluno WHERE matricula = 4/2 --matricula 2
SELECT * FROM aluno WHERE matricula = 4%3 --matricula 1

-- Operadores Lógicos

-- AND (E)
-- OR  (OU)
-- BETWEEN (ENTRE)
-- IN e NOT IN
-- IS NULL e IS NOT NULL


SELECT * FROM aluno WHERE nome like "j%" AND matricula < 2
SELECT * FROM aluno WHERE matricula > 1 OR nome like 'G%'

-- entre os funcionarios com id entre 4 e 7

SELECT * FROM funcionarios WHERE id_funcionario BETWEEN 4 and 7

-- buscar id de funcionarios menos entre 4 e 7
SELECT * FROM funcionarios WHERE id_funcionario NOT BETWEEN 4 and 7

-- buscar id de departamento dos funcionarios que contenham os seguintes numeros
SELECT * FROM funcionarios WHERE id_departamento IN (1, 2, 5)

-- trazer todos que não sejam dos seguintes departamentos
SELECT * FROM funcionarios WHERE id_departamento NOT IN (1, 2, 5)

-- trazer funcionarios caso o id de departamento seja nulo (campo não preenchido)
SELECT * FROM funcionarios WHERE id_departamento IS NULL

-- NÃO trazer funcionarios caso o id de departamento seja nulo (campo não preenchido)
SELECT * FROM funcionarios WHERE id_departamento IS NOT NULL


-- COMANDO INSERT para inserir dados no banco

-- não precisa inserir a matricula pois é uma primary key, irá inseri um valor automaticamente

INSERT INTO aluno(aluno, cpf, responsavel) VALUES ("Maria Luiza", 1234567891, "Wantuil Soares")


-- COMANDO UPDATE para alterar dados

-- IMPORTANTE - USE O COMANDO WHERE PARA DIZER QUAL O DADO ALTERAR

UPDATE aluno SET nome="Mariano Soares", reponsavel="Marcio Soares" WHERE matricula = 2

-- COMANDO DELETE

DELETE FROM aluno WHERE matricula = 3