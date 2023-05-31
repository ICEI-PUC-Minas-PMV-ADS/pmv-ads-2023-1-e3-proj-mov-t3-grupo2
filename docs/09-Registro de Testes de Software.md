# Registro de Testes de Software

O registro de testes de software é uma prática essencial no desenvolvimento de sistemas, visando documentar e rastrear todas as atividades relacionadas aos testes realizados. Por meio desse registro, é possível registrar detalhes sobre os casos de teste, os resultados obtidos, as falhas identificadas e as ações corretivas tomadas. 

Relatório com as evidências dos testes de software realizados no sistema pela equipe nos requisito que já possuem funcionalidade e que tornaram possíveis os testes, para ter uma visão geral dos testes que serão executados veja: **[Plano de Teste de Software]
<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.


## CT-01 – Acesso a página "Home e cadastro"

Permitir que o usuário crie uma conta no aplicativo.

<table>
    <tr>
     <td width='330'>1 - Cadastro de usuários</td>
     <td width='330'>2 - Validação de senha cadastro</td>
     <td width='330'>3 - Cadastro realizado</td>
    </tr>
    <tr>
    <td><img src= 'C:\Users\furla\OneDrive\Área de Trabalho\pmv-ads-2023-1-e3-proj-mov-t3-grupo2\docs\img\09-1-cadastro.jpeg'/></td>
    <td><img src= 'C:\Users\furla\OneDrive\Área de Trabalho\pmv-ads-2023-1-e3-proj-mov-t3-grupo2\docs\img\09-2-erro_cadastro.jpeg'/></td>
    <td><img src= 'C:\Users\furla\OneDrive\Área de Trabalho\pmv-ads-2023-1-e3-proj-mov-t3-grupo2\docs\img\09-3-cadastro_realizado.jpeg'/></td>
    </tr>
 </table>

### Critério de Exito: Sucesso
Usuário foi capaz de cadastrar uma conta no aplicativo e foi redirecionado para Home-Page.

### Fluxo Alternativo
Esse caso de teste não possui fluxo alternativo.

## CT-02 – Efetuar login
Verificar se o usuário é capaz de realizar login.

<table>
 <tr>
     <td width='330'>4 - Login</td>
     <td width='330'>5 - Validação de login</td>
     <td width='330'>6 - Usuário logado</td>
    </tr>
    <tr>
    <td><img src= 'C:\Users\furla\OneDrive\Área de Trabalho\pmv-ads-2023-1-e3-proj-mov-t3-grupo2\docs\img\9-4-login.jpeg'/></td>
    <td><img src= 'C:\Users\furla\OneDrive\Área de Trabalho\pmv-ads-2023-1-e3-proj-mov-t3-grupo2\docs\img\9-5-erro_login.jpeg'/></td>
    <td><img src= 'C:\Users\furla\OneDrive\Área de Trabalho\pmv-ads-2023-1-e3-proj-mov-t3-grupo2\docs\img\9-6-logado_criar_noticia.jpeg'/></td>
 </tr>   
</table>

### Critério de Exito: Sucesso
O login foi realizado com sucesso e o úsuario deve ser redirecionado para a página de Exito.

### Fluxo Alternativo
Se usuário digitar email ou senha incorretos.


## CT-08 – Visualizar notícias cadastradas

Objetivo principal deste teste é verificar se o usuário consegue visualizar as notícias cadastradas na aplicação.

<table>
 <tr>
     <td width='330'>7 - Visualizar Notícias</td>
     <td width='330'>8 - Adicionar Notícia</td>
     <td width='330'>9 - Notícia Adicionada</td>
    </tr>
    <tr>
    <td><img src= 'C:\Users\furla\OneDrive\Área de Trabalho\pmv-ads-2023-1-e3-proj-mov-t3-grupo2\docs\img\9-7-visualizar_noticia.jpeg'/></td>
    <td><img src= 'C:\Users\furla\OneDrive\Área de Trabalho\pmv-ads-2023-1-e3-proj-mov-t3-grupo2\docs\img\9-8-adicionar_noticia.jpeg'/></td>
    <td><img src= 'C:\Users\furla\OneDrive\Área de Trabalho\pmv-ads-2023-1-e3-proj-mov-t3-grupo2\docs\img\9-9-noticia_adicionada.jpeg'/></td>
 </tr>   
</table>

### Critério de Exito: Sucesso

Usuário foi capaz de visualizar as notícias cadastrados em seu perfil e adicionar novas notícias.

### Fluxo Alternativo
Esse caso de teste não possui fluxo alternativo.

## Avaliação

Os testes de software mostraram que os requisitos demonstrados foram atendidos, funcionando como planejado. Para as próximas iterações, serão acrescentados os demais casos de testes a medida que as funcionalidades e novas features forem sendo implementados no projeto.


> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
