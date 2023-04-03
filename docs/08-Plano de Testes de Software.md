# Plano de Testes de Software

## Introdução

Este plano de testes tem como objetivo garantir que o Finance News atenda aos requisitos funcionais e não funcionais, além de verificar sua usabilidade e segurança. O escopo deste plano de testes inclui as funcionalidades da aplicação móvel, conforme descritas nos requisitos funcionais e não funcionais.

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

### Usabilidade

| **Caso de Teste** 	| **CT-006 – Usabilidade** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RNF-001 – Usabilidade |
| Objetivo do Teste 	| Verificar se a interface do aplicativo é intuitiva e fácil de usar, com botões bem definidos e navegação simplificada. |
| Pré-requisitos 	| Instalação do aplicativo em um dispositivo móvel. |
| Passos 	| 1) Abrir o aplicativo; 2) Analisar a disposição dos botões na tela principal; 3) Acessar as funcionalidades do aplicativo e verificar se a navegação é intuitiva; 4) Verificar se as informações são apresentadas de forma clara e organizada.|
|Critério de Êxito | - Os botões devem estar bem definidos e a navegação deve ser intuitiva; - As informações devem ser apresentadas de forma clara e organizada.|
|  	|  	|
 
 ### Desempenho
 
| **Caso de Teste** 	| **CT-007 – Desempenho** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RNF-002 – Desempenho |
| Objetivo do Teste 	| Verificar se o aplicativo é rápido em todas as suas funcionalidades, sem atrasos ou travamentos. |
| Pré-requisitos 	| Instalação do aplicativo em um dispositivo móvel. |
| Passos 	| 1) Abrir o aplicativo; 2) Acessar as funcionalidades do aplicativo e verificar se as respostas são imediatas; 3) Executar testes de carga para verificar a capacidade de processamento do aplicativo; 4) Verificar se o aplicativo mantém a performance mesmo com múltiplas tarefas executadas simultaneamente.|
|Critério de Êxito | - As respostas do aplicativo devem ser imediatas; - O aplicativo deve manter a performance mesmo com múltiplas tarefas executadas simultaneamente;|
|  	|  	|

 ### Compatibilidade
 
| **Caso de Teste** 	| **CT-008 – Compatibilidade** 	|
|:---:	|:---:	|
|	Requisito Associado 	| CT-RNF-003 – Compatibilidade |
| Objetivo do Teste 	| Verificar se o aplicativo funciona em diferentes dispositivos , sem apresentar falhas ou erros. |
| Pré-requisitos 	| Instalação do aplicativo em diferentes dispositivos móveis. |
| Passos 	| 1) Instalar o aplicativo em diferentes dispositivos móveis; 2) Executar o aplicativo em diferentes sistemas; 3) Verificar se todas as funcionalidades do aplicativo estão disponíveis e funcionando corretamente; 4) Verificar se a interface do aplicativo se adapta aos diferentes tamanhos de tela. |
|Critério de Êxito | - O aplicativo deve funcionar corretamente em diferentes dispositivos móveis e sistemas operacionais; - Todas as funcionalidades do aplicativo devem estar disponíveis e funcionando corretamente em todas as plataformas; |
|  	|  	|

 ### Responsividade

| **Caso de Teste** 	| **CT-009 – Responsividade em Dispositivos Móveis** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RNF-004 – Responsividade 	|
| Objetivo do Teste 	| Verificar se o aplicativo é responsivo e se adapta adequadamente a diferentes tamanhos de tela em dispositivos móveis. |
| Pré-requisitos 	| Dispositivo móvel com diferentes tamanhos de tela e o aplicativo instalado. |
| Passos 	| 1) Acessar o aplicativo em um dispositivo móvel; 2) Verificar se o aplicativo se adapta adequadamente a diferentes tamanhos de tela, sem distorções ou perda de informações; 3) Testar todas as funcionalidades do aplicativo em diferentes tamanhos de tela; 4) Verificar se as opções de menus e botões estão facilmente acessíveis em todas as telas. |
|Critério de Êxito | - O aplicativo deve se adaptar adequadamente a diferentes tamanhos de tela em dispositivos móveis; - Todas as funcionalidades do aplicativo devem ser acessíveis e funcionais em diferentes tamanhos de tela; - As opções de menus e botões devem estar facilmente acessíveis em todas as telas. |
|  	|  	|

 ### Segurança

| **Caso de Teste** 	| **CT-010 – Armazenamento Seguro de Dados do Usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RNF-005 – Segurança 	|
| Objetivo do Teste 	| Verificar se os dados do usuário são armazenados de forma segura e protegidos contra possíveis invasões ou vazamentos de informações. |
| Pré-requisitos 	| Usuário logado no aplicativo e acesso a ferramentas de monitoramento de segurança. |
| Passos 	| 1) Acessar o aplicativo e realizar o login com um usuário válido; 2) Acessar as configurações do aplicativo e verificar se há opções de segurança disponíveis; 3) Utilizar ferramentas de monitoramento de segurança para verificar a proteção dos dados do usuário armazenados pelo aplicativo; 4) Tentar acessar os dados do usuário através de métodos não autorizados. |
|Critério de Êxito | - Os dados do usuário devem ser armazenados de forma segura e protegidos contra possíveis invasões ou vazamentos de informações; - O aplicativo deve possuir opções de segurança para proteger os dados do usuário; - Não deve ser possível acessar os dados do usuário através de métodos não autorizados. |
|  	|  	|

 
## Ferramentas de Testes 

Para realização dos testes, serão utilizadas as seguintes ferramentas:

- Jest: Framework de testes unitários para JavaScript, que será utilizado para testar as funcionalidades e lógicas da aplicação;

- Selenium: Ferramenta de teste de compatibilidade que será utilizada para verificar se a aplicação é compatível com diferentes navegadores e dispositivos;

Com a utilização dessas ferramentas, será possível garantir que a aplicação atenda aos requisitos estabelecidos, proporcionando uma experiência satisfatória para o usuário.
 

