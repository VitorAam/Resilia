CREATE DATABASE resilia;

CREATE TABLE `cursos` (
    `id_curso` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    `nome` VARCHAR(255)
);

CREATE TABLE `turma` (
    `id_turma` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    `curso` INT,
    FOREIGN KEY (curso)
        REFERENCES cursos (id_curso)
);

CREATE TABLE `alunos` (
    `id_aluno` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    `nome` VARCHAR(255),
    `cpf` VARCHAR(11),
    `email` VARCHAR(255),
    `idade` INT,
    `turma` INT,
    FOREIGN KEY (turma)
        REFERENCES turma (id_turma)
);