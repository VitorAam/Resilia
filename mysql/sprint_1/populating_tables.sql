-- Populando a tabela cursos

INSERT INTO cursos (nome) VALUES ('Desenvolvimento WEB');

INSERT INTO cursos (nome) VALUES ('Análise de dados');

-- Populando a tabela turma

INSERT INTO turma(curso) VALUES (1);

INSERT INTO turma(curso) VALUES (2);

-- Populando a tabela alunos

INSERT INTO alunos (nome, cpf, email, idade, turma) VALUES ('Xamã','12345678911','teste@gmail.com',35,1);

INSERT INTO alunos (nome, cpf, email, idade, turma) VALUES ('VitinJS','12345678912','teste@gmail.com',23,2);

INSERT INTO alunos (nome, cpf, email, idade, turma) VALUES ('Fernando','12345678913','teste@gmail.com',28,1);

INSERT INTO alunos (nome, cpf, email, idade, turma) VALUES ('Leticia','12345678914','teste@gmail.com',23,2);

INSERT INTO alunos (nome, cpf, email, idade, turma) VALUES ('Nod.js','12345678915','teste@gmail.com',19,1);