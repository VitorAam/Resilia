CREATE DATABASE `resilia`;

USE `resilia`;

CREATE TABLE `cursos` (
    id_curso INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(255)
);

CREATE TABLE `turma` (
    id_turma INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_curso INT,
    FOREIGN KEY (id_curso)
        REFERENCES cursos (id_curso)

);

CREATE TABLE `alunos` (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(255),
    cpf VARCHAR(11),
    idade INT,
    id_turma INT,
    FOREIGN KEY (id_turma)
        REFERENCES turma (id_turma)
);

CREATE TABLE `entregas` (
    id_entregas INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    link_entrega VARCHAR(255),
    modulo INT,
    aluno INT,
    FOREIGN KEY (aluno)
        REFERENCES alunos (id_aluno),
    conceito VARCHAR(255)
);

CREATE TABLE `email` (
    id_email INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(255),
    id_aluno INT,
    FOREIGN KEY (aluno_id)
        REFERENCES alunos (id_aluno)
);

