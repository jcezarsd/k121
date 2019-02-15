
# Sorteador de amigo oculto K121

Demo: https://k121-santa.herokuapp.com/#/

Sistema para sorteio de amigo oculto. As tecnologias utilizadas no backend são: 

* NodeJS
* ExpressJS
* Mongoose

No frontend são as seguintes:

* Bootstrap
* AngularJS

## Como executar?

* Será necessário ter o NodeJS instalado em sua máquina (https://nodejs.org/en/download/);
* Tem o MongoDB instalado em sua máquina ou utilizar algum serviço de database na núvem.

#### Com os itens acima instalados, é só seguir os passos a baixo:

1. Faça o download do código fonte.
2. Abra o terminal e acesse a pasta do projeto e execute o comando `npm run deps`, com isso todas as dependências serão instaladas.
3. Edite o arquivo `backend/app.js` e altere a variável `devDBUrl` para a url do seu banco de dados mongo.
4. Volte na pasta raiz do projeto e execute o comando `npm start`, se tudo ocorrer corretamente você verá a seguinte mensagem: `Server is up and running on port number 8989`.
