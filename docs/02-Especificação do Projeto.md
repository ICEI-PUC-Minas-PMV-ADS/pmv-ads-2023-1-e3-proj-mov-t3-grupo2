# Especificações do Projeto

A definição do problema e os pontos relevantes tratados neste projeto foram consolidados em um trabalho de imersão realizado pelos membros da equipe.
Os detalhes levantados nesse processo sobre os clientes ideais que esta solução almeja estão apresentados na forma de personas e histórias de usuários relatados nesta documentação.

## Personas

As personas, ou clientes típicos levantados no decorrer do procedimento de elucidação do problema, estão descritas nas figuras que se seguem:

![Persona 01](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo2/blob/main/docs/img/user_persona_matheus.jpg)
![Persona 02](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo2/blob/main/docs/img/user_persona_yara.jpg)
![Persona 03](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo2/blob/main/docs/img/user_persona_carlos.jpg)
![Persona 04](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo2/blob/main/docs/img/user_persona_juliano.jpg)




## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|-----------------------|----------------------------------------------------|----------------------------------------|
|Estudante de Finanças  |  Ler notícias e artigos educacionais sobre finanças  | Expandir meu conhecimento sobre o mercado financeiro  |
|Consultor de Investimentos  | Me atualizar em tempo real sobre o setor financeiro  | Compartilhar estratégias de investimento e ajudar meus clientes a tomar decisões rápidas e informadas. |
|Investidora Iniciante |  Ver o que estão compartilhando sobre finanças pessoais  | Correr menos riscos quando começar a investir |
|Empreendedora  |  Estar informada sobre o mercado financeiro   |Me manter atualizada para tomar decisões estratégicas para minha empresa  |



## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente, os usuários interessados em acompanhar as notícias sobre o mercado financeiro precisam verificar várias fontes diferentes, como sites de notícias, redes sociais, blogs e outras plataformas de mídia, o que pode ser demorado e confuso. Além disso, essas fontes podem ser tendenciosas ou desatualizadas, o que pode levar a decisões equivocadas de investimento. Portanto, há uma necessidade clara de um aplicativo que centralize todas as informações relevantes sobre o mercado financeiro em um só lugar.

### Descrição Geral da Proposta

Em resumo, o modelo de negócio do aplicativo Finance News se baseia na coleta e distribuição de notícias relevantes para os usuários, com a possibilidade de interação do usuário, além da monetização por meio de publicidade e assinaturas premium.

Modelagem do processo de negócio:

Cadastro do usuário: O aplicativo reune as pessoas com interesses em comum sobre o tema financeiro. 

Coleta de notícias: O aplicativo coleta as notícias através de postagens realizadas pelos usuários cadastrados.

Distribuição de notícias: As notícias são distribuídas para os usuários do aplicativo no formato de links para os artigos completos. 

Monetização: O aplicativo pode gerar receita por meio de publicidade e assinaturas premium que ofereçam recursos adicionais.


### Processo 1 – LOGIN


![Processo 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo2/blob/main/docs/img/diagrama_login.jpg)

### Processo 2 – CADASTRO E DISTRIBUIÇÃO DE NOTÍCIAS


![Processo 2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo2/blob/main/docs/img/diagrama_cadastro.jpg)

## Indicadores de Desempenho

| # | Indicador | Objetivos | Descrição | Cálculo | Fonte | Perspectiva|  
|---|-----------|-----------|-----------|---------|-------|------------|
| 1 | Downloads | Acompanhar o crescimento do aplicativo | Avaliar a taxa de downloads realizados na loja| nº de downloads / período | Playstore | Crescimento e Aprendizado |
| 2 | Usuários Cadastrados | Mensurar a quantidade de cadastros efetuados no aplicativo | Avaliar a taxa de cadastros realizados no aplicativo após o download | nº de cadastros / período | Banco de Dados| Crescimento e Aprendizado |
| 3 | Engajamento | Avaliar o sucesso do aplicativo | O engajamento medirá o tempo em que as pessoas permanecem utilizando o aplicativo e quantas vezes ele é aberto | Realizado pela ferramenta Google Mobile App Analytics | Google Mobile App Analytics | Crescimento e Aprendizado |
| 4 | Avaliação | Acompanhar as opiniões de usuários | Analisar os comentários dos usuários | Análise direta da nota | Playstore | Crescimento e Apendizado | 
| 5 | Desinstalação | Compreender as razões que levaram à desinstalação | Avaliar o que pode ser mudado para prevenir outras desinstalações do aplicativo | nº de desinstalações / período | Playstore | Processos Internos | 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve permitir que o usuário se cadastre | ALTA | 
|RF-002| O aplicativo deve permitir que o usuário realize o login | ALTA |
|RF-003| O aplicativo deve permitir que o usuário visualize a lista de links com as notícias mais recentes | ALTA |
|RF-004| O aplicativo deve permitir que o usuário cadastre uma nova notícia | ALTA |
|RF-005| O aplicativo deve permitir que o usuário possa interagir curtindo uma notícia  | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Usabilidade: o aplicativo deve ter uma interface intuitiva, com botões bem definidos e fácil navegação| ALTA | 
|RNF-002| Desempenho: o aplicativo deve ser rápido em todas as suas funcionalidades | ALTA | 
|RNF-003| Compatibilidade: o aplicativo deve funcionar em diferentes dispositivos e plataformas |  ALTA | 
|RNF-004| Responsividade: o aplicativo deve ser responsivo para rodar em dispositivos móveis |  ALTA | 
|RNF-005| Segurança: os dados do usuário devem ser armazenados de forma segura e protegidos contra possíveis invasões ou vazamentos de informações.|  ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Diagrama 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo2/blob/main/docs/img/casos_de_uso.jpg)


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

Com o objetivo de mapear e explicitar as dependências internas e externas do projeto, desenvolvemos uma matriz de rastreabilidade de requisitos (Requirements Traceability Matrix - RTM).

A matriz que elaboramos está em constante atualização e será atualizada à medida em que avancemos com nosso projeto.

![Matriz 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo2/blob/main/docs/img/matriz.png)



# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
