# Senai Exchange

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
A **Senai Exchange** é uma aplicação web criada para alunos do **SENAI**, com o objetivo de conectar estudantes, promover o aprendizado colaborativo e fortalecer o desenvolvimento pessoal e profissional.

O projeto funciona como uma plataforma de interação entre alunos, permitindo troca de conhecimentos, compartilhamento de conteúdos, dúvidas e experiências entre cursos da instituição.

---

## Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Principais Funcionalidades](#-principais-funcionalidades)
- [Público-Alvo](#-público-alvo)
- [Regras da Comunidade](#-regras-da-comunidade)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Contribuição](#-contribuição)
- [Equipe](#-equipe)

---

## Sobre o Projeto

A plataforma foi pensada para suprir a necessidade de um espaço virtual onde alunos do SENAI possam estudar juntos, tirar dúvidas e compartilhar conhecimento.

A **Senai Exchange** permite publicações, comentários, recomendações, criação de grupos e interação entre estudantes do mesmo curso ou de áreas diferentes.

Este repositório contém o código-fonte da aplicação, desenvolvida como parte do curso de **Desenvolvimento de Sistemas** da **Escola SENAI Suíço-Brasileira "Paulo Ernesto Tolle"**.

---

## Principais Funcionalidades

### Funcionalidades (RFs)

- **Perfis de Usuário:** Login com e-mail institucional, exibição de nome, foto e curso, e edição de perfil.
- **Interação e Conteúdo:** Publicar perguntas, pedidos de ajuda, textos informativos e recomendações.
- **Comentários e Avaliações:** Comentar e avaliar conteúdo publicado por outros usuários.
- **Formatação de Conteúdo:** Suporte a texto formatado, inserção de links, imagens e blocos de código.
- **Organização por Tags:** Categorizar publicações e fixar comentários úteis no topo.
- **Busca Completa:** Filtro por curso, tags, usuários e palavras-chave.
- **Feed Personalizado:** Seguir usuários ou temas de interesse para receber conteúdo relevante.
- **Destaques:** Ranking de postagens e usuários com boa reputação.
- **Comunicação Segura:** Chat privado com mensagens pré-definidas (sem envio de arquivos ou links).
- **Moderação:** Sistema de denúncias com análise por administradores e reputação por boa conduta.
- **Acesso Restrito:** Visitantes podem visualizar publicações, mas com funções limitadas.

### Requisitos Não-Funcionais (RNFs)

- **Usabilidade:** Interface intuitiva para iniciantes.
- **Design Responsivo:** Compatível com desktop e mobile.
- **Acessibilidade:** Compatível com leitores de tela e opções de contraste.
- **Desempenho:** Resposta às ações em até 3 segundos.
- **Disponibilidade:** Online continuamente (exceto manutenção).
- **Conformidade:** Adequado à LGPD para proteção de dados dos usuários.

---

## Público-Alvo

Projetado exclusivamente para **alunos matriculados no SENAI**.  
Persona principal: **“Lyan”, 19 anos**, estudante do SENAI em busca de apoio no aprendizado e interação com colegas.

---

## Regras da Comunidade

Para garantir um ambiente seguro e educacional:

- **Exclusividade:** Apenas e-mails institucionais do SENAI podem se cadastrar.
- **Responsabilidade:** Usuários são responsáveis pelo conteúdo publicado.
- **Moderação:** Penalidades podem incluir advertência, suspensão ou banimento.
- **Chat Seguro:** Apenas mensagens pré-definidas para evitar golpes e assédio.
- **Conteúdo Proibido:** Palavras ofensivas, preconceituosas ou impróprias são bloqueadas.

---

## Tecnologias

Este projeto foi desenvolvido utilizando apenas tecnologias nativas da web:

| Tecnologia            | Descrição                                              |
| --------------------- | ------------------------------------------------------ |
| **HTML5**             | Estrutura e semântica da aplicação                     |
| **CSS3**              | Estilização e design responsivo                        |
| **JavaScript (ES6+)** | Lógica, interatividade e funcionalidades da plataforma |

---

## Estrutura do Projeto

/src
├── assets/ # Imagens e arquivos estáticos
│ └── images/
├── components/ # Componentes reutilizáveis
│ ├── btn-add-post/
│ ├── navbar/
│ └── topMenu/
├── pages/ # Páginas da aplicação
│ ├── error/
│ ├── helpPageAbout/
│ ├── helpPageServices/
│ ├── post/
│ └── rules/
├── scripts/ # Scripts JavaScript
├── styles/ # Estilos CSS
│ ├── global.css
│ ├── library.css
│ └── styles.css
└── ...

---

## Equipe

Desenvolvido por:

Diana Oliveira

Manuela Andrade

Miguel Zacharias da Silva

Sarah Santos

Thiago Soares

---

## Orientação

Prof.ª Fiama Brenda


---
### Obrigado por visitar o projeto Senai Exchange!
