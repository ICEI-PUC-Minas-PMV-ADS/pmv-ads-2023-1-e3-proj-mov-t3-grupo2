# FINANCE NEWS APP

## INTRODUÇÃO
O Finance News é um aplicativo para compartilhamento de notícias construído em React Native e JSON-SERVER.

## VIDEO DEMO
Clique [aqui](https://drive.google.com/file/d/1CiAZGEycML9xZHMR3GzycmPfymRwW1WC/view) para assistir a demo

## DEPENDÊNCIAS
* [NodeJS](https://nodejs.org/en), preferencialmente a última versão v19.8.1, mas a LTS deve funcionar.
* [Expo](https://expo.dev/), preferencialmente versão 0.6.2

OBS: Recomendamos utilizar um [gerenciador de dependências](https://asdf-vm.com/guide/getting-started.html) para instalar as versões sem problemas de conflito.

## PRIMEIROS PASSOS
1. Com as dependencias instaladas, clone o projeto utilizando o protocolo de sua preferência, recomendamos a utilizar do [Github CLI](https://cli.github.com/).
2. Com o projeto clonado, navegue até pasta finance_news -> <code>cd finance_news</code>.
3. Dentro da pasta `finance_news` instale as dependências -> <code>npm install</code>
4. Pronto! Agora basta seguir os passos descritos abaixo para iniciar a API e o APP REACT NATIVE.

## FINANCE NEWS API

A API foi construída utilizando [JSON-SERVER](https://github.com/typicode/json-server) e sua documentação está disponível [aqui](./API_Collection/README.md).

Para iniciar o servidor da API basta executar o script adicionado em [package.json](./package.json) da seguinte maneira: <code>npm run api</code>.

O servidor irá escutar a porta 3000 e dispõe dos seguintes recursos:

* News -> http://localhost:3000/news
* Users -> http://localhost:3000/users

A API segue o padrão [RESTFul](https://pt.wikipedia.org/wiki/REST)

## APLICATIVO REACT NATIVE

Para iniciar o aplicativo, basta usar o script de sua preferência:

* "start": "expo start",
* "android": "expo start --android",
* "ios": "expo start --ios",
* "web": "expo start --web",

Recomendamos rodar usando o script <code>expo start</code> e ler o QR Code utilizando o APP compatível com o S.O do seu celular:

* Para Android -> https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US

* Para IOS -> https://apps.apple.com/br/app/expo-go/id982107779