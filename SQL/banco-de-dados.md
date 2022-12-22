# SQL

 * SQL (Structured Query Language) é uma linguagem de consulta usada para criar, manipular e gerenciar bancos de dados relacionais. Aqui estão alguns conceitos básicos de SQL que você deve saber:

 * Bancos de dados: Um banco de dados é um conjunto de dados organizados em tabelas, que armazenam informações relacionadas. Por exemplo, um banco de dados de vendas poderia ter uma tabela de clientes, uma tabela de produtos e uma tabela de vendas.

 * Tabelas: Uma tabela é uma estrutura de dados que armazena informações em linhas e colunas. Cada linha representa um registro único, enquanto as colunas representam os campos de dados diferentes para cada registro. Por exemplo, uma tabela de clientes poderia ter colunas para nome, endereço e telefone.

 * Chaves primárias: Uma chave primária é um campo de uma tabela que é usado para identificar de maneira única cada linha da tabela. As chaves primárias são geralmente usadas para estabelecer relações entre tabelas.

 * Consultas SQL: Uma consulta SQL é uma instrução usada para recuperar dados de um banco de dados. Existem muitos tipos diferentes de consultas SQL, como SELECT, INSERT, UPDATE e DELETE, que permitem ao usuário recuperar, inserir, atualizar e excluir dados, respectivamente.


## Exemplos

 - Essa consulta seleciona todos os campos (*) da tabela de clientes onde o campo "pais" é igual a "Brasil". Ela retornará todas as linhas da tabela de clientes que atendam a esse critério.

```sql
SELECT * FROM clientes WHERE pais = 'Brasil';
```

 * SELECT: usado para selecionar dados de uma tabela. Por exemplo, a consulta a seguir seleciona todos os campos da tabela de clientes:

```sql
SELECT * FROM clientes;
```

 * INSERT: usado para inserir novos registros em uma tabela. Por exemplo, a consulta a seguir insere um novo registro na tabela de clientes:

```sql
INSERT INTO clientes (nome, endereco, telefone) VALUES ('João', 'Rua dos Bobos, 0', '999-9999');
```

 * UPDATE: usado para atualizar registros existentes em uma tabela. Por exemplo, a consulta a seguir atualiza o endereço de um cliente com o ID 1:

```sql
UPDATE clientes SET endereco = 'Rua das Flores, 1' WHERE id = 1;
```

 * DELETE: usado para excluir registros de uma tabela. Por exemplo, a consulta a seguir exclui o cliente com o ID 1:

```sql
DELETE FROM clientes WHERE id = 1;
```

*Chat Gpt*
