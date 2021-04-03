<h1>A construção do projeto do test da empresa Din Digital</h1> 

<h2>Introdução</h2>
<p>
O desafio do processo seletivo da empresa Din Digital se tratar de um teste técnico que consiste em desenvolver uma aplicação de um site conforme o Layout  responsivo da plataforma Figma (Não tenho permissão de compartilhar o link nesse exato momento), também utilizado durante a construção da estrutura do html5 com as tags SEO que facilita que fique no topo de pesquisa do google search, portanto consumindo api de terceiro(ex:’listagem cards’) para implementar na página home da área central(conteúdo central), porém será  construindo com as tecnologias de single-page-application( ex:‘ Angular/React/Vanilla, etcc...’) e por fim a entrega deve ser por um link do projeto hospedado. 
</p>

<h2>Quais são as tecnologias utilizada no test</h2>

<p>Bem decidi utilizar framework angular, pois já me familiarizei um pouco com essa tecnologia e também já vem com várias tecnologias já configurada como pré-processador sass e outras dependências já estabelecida. Implementei  Sass no projeto, pois queria usar somente algumas funcionalidades do framework bootstraps, por exemplo, somente ‘utilities’ que permite a utilização de flex-box, margin, etc... Portanto sem utilização de componentes do Bootstraps.</p>       

<p>Enfim usei Angular que permite criar página single-page-application com conjunto de  tecnolgias web como html5. Sass(Pré precessador css), com algumas funcionalides( flex-box, margin, etc...) de estilização com framework bootstraps  e por fim TypeScript( superconjunto de JavaScript).</p>

<h2>Estrutura do projeto em si</h2>

<p>Usei arquitetura de padrão para organizar como camadas/módulos para ficar mais legível e ser compartilhando para outros dev/pessoas. Portanto me preocupo bastante nesse requisito e penso que é muito importante contribuir com isso.</p>

<p>Enfim nos arquivos como ‘components’ que ficam pequenos pedaços que em conjunto forma um layout completo em si, na camada ‘pages' é onde fica as rotas das páginas do projeto que é configurando no arquivo app-routing.module.ts, e ‘model’ é a camada em que eu vou criar as mesmas classes de objetos  da api, por fim o arquivo ‘servico’ que é responsável de consumir Api da lista de cards e também fazer funcionalidade da regra de negócios.</p>

<h2>Como executar o Projeto </h2>

<h3>Primeiro passo é necessário clonar o repositório</h3>

$ git clone https://github.com/caiomyrapereira/challenge-test-din-digital.git 

<h3>Segundo passo é entrar na pasta do repositório local e depois instalar as dependências necessárias</h3>

$ cd challenge-test-din-digital  

$ npm install 

<h3>O penúltimo passo é executar um comando que vai compilar o projeto em si, pois é necessário esperar um momento até termina a execução.</h3>

$ ng serve 

<h3>E o último passo vai abrir uma porta que vai ser acessada a qualquer navegador/bowser que interpretar o html5, css3 e javascrip.</h3>

Local da porta: http://localhost:4200 
