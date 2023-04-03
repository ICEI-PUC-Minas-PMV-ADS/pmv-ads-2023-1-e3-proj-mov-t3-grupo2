# Plano de Testes de Software

## Introdução

Este plano de testes tem como objetivo garantir que a aplicação móvel desenvolvida atenda aos requisitos funcionais e não funcionais, além de verificar sua usabilidade, desempenho, compatibilidade, responsividade e segurança. O escopo deste plano de testes inclui as funcionalidades da aplicação móvel, conforme descritas nos requisitos funcionais e não funcionais.

## Cenários de Teste

| **Caso de Teste** 	| **CT-001 – Cadastro de Usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 – Cadastro de Usuário |
| Objetivo do Teste 	| Verificar se é possível realizar o cadastro de usuário na aplicação. |
| Passos 	| 1) Acessar o aplicativo móvel "Finance News". 2) Selecionar a opção "Criar Conta". 3) Preencher os campos de cadastro com dados válidos. 4) Selecionar a opção "Registrar". |
|Critério de Êxito | - Usuário cadastrado com sucesso na aplicação. |
|  	|  	|


| **Caso de Teste** 	| **CT-002 – Login de Usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-002 – Autenticação de usuário |
| Objetivo do Teste 	| Verificar se é possível realizar o login do usuário aplicativo.|
| Pré-requisitos 	| Ter um usuário cadastrado no aplicativo e conexão com a internet.|
| Passos 	| 1) Acessar o aplicativo. 2) Visualizar a página de Login, clicando em "Log In" na página inicial 3) Inserir o e-mail e senha cadastrados 4) Redirecionamento para pagina inicial onde poderá acessar as notícias. |
|Critério de Êxito | - A tela de login deve abrir corretamente. - O login e senha cadastrados devem direcionar o usuário para a tela principal do aplicativo. - Login e senha incorretos devem exibir uma mensagem de erro informando que os dados informados estão incorretos. |
|  	|  	|

| **Caso de Teste** 	| **CT-003 – Visualização de Notícias** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-003 – Exibição de Notícias |
| Objetivo do Teste 	| Verificar se a lista de notícias é exibida corretamente na aplicação. |
| Pré-requisitos 	| Usuário logado e conexão com a internet. |
| Passos 	| 1) Abrir a aplicação 2) Verificar se a lista de últimas notícias é exibida corretamente |
|Critério de Êxito | - A lista de notícias deve ser exibida corretamente, com o título de cada notícia - A lista deve ser ordenada por data de publicação, do mais recente para o mais antigo. |
|  	|  	|

| **Caso de Teste** 	| **CT-004 – Envio de Notícias** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-004 – Envio de Notícias |
| Objetivo do Teste 	| Verificar se é possível enviar uma notícia com sucesso através do aplicativo. |
| Pré-requisitos 	| Usuário logado e conexão com a internet. |
| Passos 	| 1) Acessar o aplicativo "Finance News"; 2) Selecionar a opção "Enviar Notícia"; 3) Preencher os campos de "Título" e "Link" com informações válidas; 4) Selecionar a opção "Enviar Notícia". |
|Critério de Êxito | - O aplicativo deve permitir o envio de notícias com título e link; - Após o envio, o usuário deve redirecionado para pagina inicial; - A noticia cadastrada deve aparecer na primeira colocação da lista.|
|  	|  	|

| **Caso de Teste** 	| **CT-005 – Curtir uma Notícia** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-005 – Curtir uma Notícia |
| Objetivo do Teste 	| Verificar se é possível curtir uma notícia com sucesso através do aplicativo. |
| Pré-requisitos 	| Usuário logado e conexão com a internet. |
| Passos 	| 1) Acessar o aplicativo "Finance News"; 2) Selecionar uma notícia na página inicial; 3) Selecionar a opção "Curtir"; 4) Verificar se o ícone de curtida foi alterado para indicar que a notícia foi curtida com sucesso.|
|Critério de Êxito | - O aplicativo deve permitir a curtida de notícias; - O ícone de curtida deve ser alterado para indicar que a notícia foi curtida com sucesso.|
|  	|  	|
 
 
## Ferramentas de Testes 

Para realização dos testes, serão utilizadas as seguintes ferramentas:

- Jest: Framework de testes unitários para JavaScript, que será utilizado para testar as funcionalidades e lógicas da aplicação;

- Selenium: Ferramenta de teste de compatibilidade que será utilizada para verificar se a aplicação é compatível com diferentes navegadores e dispositivos;

Com a utilização dessas ferramentas, será possível garantir que a aplicação atenda aos requisitos estabelecidos, proporcionando uma experiência satisfatória para o usuário.
 

