-- Saber quem são os alunos que entregaram o projeto do módulo 1 e estão com o conceito em "Pronto" ou "Mais que pronto"

SELECT 
    *
FROM
    entregas
WHERE
    conceito LIKE 'Pronto'
        OR conceito LIKE 'Mais que pronto'
HAVING modulo = 1;

-- Consultar quantos alunos temos em cada turma

SELECT 
    turma, COUNT(turma)
FROM
    alunos
GROUP BY turma;

-- Quantos projetos no total (entre todas as turmas) foram entregues com conceito "Ainda não está pronto" e "Chegando lá"

SELECT 
    COUNT(aluno)
FROM
    entregas
WHERE
    conceito LIKE 'Ainda não está pronto'
        OR conceito LIKE 'Chegando lá';

SELECT * FROM entregas order by conceito ASC;

-- Qual a turma com a maior quantidade de projetos no "Mais que pronto"

SELECT 
    alunos.turma, COUNT(alunos.turma) AS total
FROM
    alunos
        INNER JOIN
    entregas ON entregas.aluno = alunos.id_aluno
WHERE
    entregas.conceito LIKE 'Mais que pronto'
GROUP BY alunos.turma
ORDER BY total DESC;