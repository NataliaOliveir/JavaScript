# PESQUISA SOBRE JavaScript


# 1-Defina JavaScript e sua principal função no desenvolvimento web

### JavaScript é uma linguagem de programação de alto nível que permite a criação de páginas dinâmicas e interativas na web. Sua principal função no desenvolvimento web é possibilitar a implementação de comportamentos complexos e interativos em páginas da internet, como animações, gráficos, mapas interativos e até mesmo jogos. JavaScript atua como um complemento às linguagens HTML e CSS, sendo essencial para enriquecer a experiência do usuário e oferecer funcionalidades avançadas no front-end.

## >Pesquise sobre a história do JavaScript e sua evolução ao longo dos anos

###  JavaScript foi criada em 1996 por Brendan Eich, um programador que também é um dos fundadores da Mozilla. Inicialmente, a linguagem era conhecida como LiveScript e Mocha. No entanto, para aproveitar o sucesso da linguagem Java no mercado, os executivos da Netscape decidiram alterar o nome para JavaScript. Desde sua criação, JavaScript passou por diversas atualizações e evoluções. Sua evolução inclui a introdução de novos padrões e funcionalidades, que ampliaram suas capacidades e consolidaram seu papel como uma das linguagens mais importantes no desenvolvimento web moderno.
 # 2-Características Básicas do JavaScript

###  > O que são variáveis e como são declaradas em JavaScript?
  ## Variaveis:
### Variáveis ​​são usadas para armazenar valores de dados. Por exemplo, uma variável pode ser usada para armazenar o endereço de e-mail de um usuário ou seu nome. Em JavaScript, uma variável pode conter qualquer tipo de dado, como uma string, um booleano verdadeiro ou falso, um objeto ou um número.
    
  ## Declarando variáveis
  # var 
### Declara uma variável com escopo de função ou global. Não tem escopo de bloco, o que pode levar a problemas inesperados em alguns casos.
  # Sintaxe
       var nome = 'Alice'
       var idade = 30
  # Exemplo 
      function exemploVar() {
    var idade = 30;
    if (true) {
        var idade = 25; // redeclara a variável no mesmo escopo
        console.log(idade); // 25
    }
    console.log(idade); // 25, pois `var` tem escopo de função  
    }
       exemploVar(); 

### Características:
### **Hoisting: As declarações var são "elevadas" ao topo do seu escopo. Isso significa que a variável pode ser usada antes da linha onde foi declarada.**

### **Escopo: Tem escopo de função ou global, não de bloco.**
 # Sintaxe

       let nome = 'Bob';
       let idade = 25;
  # Exemplo
    function exemploLet() {
    let idade = 30;
    if (true) {
        let idade = 25; // variável com escopo de bloco
        console.log(idade); // 25
    }
    console.log(idade); // 30, pois `let` tem escopo de bloco
    }
    exemploLet();

   # Características:
### **Escopo: Tem escopo de bloco. Isso significa que a variável só existe dentro do bloco {} em que foi declarada.**

### **Hoisting: A declaração é elevada, mas não inicializada. Tentar acessar a variável antes da linha de declaração resultará em um erro.** 
 # sintaxe
       
       const PI = 3.14159;
  # Exemplo
        function exemploConst() {
    const pi = 3.14;
    if (true) {
        const pi = 3.1415; // variável com escopo de bloco
        console.log(pi); // 3.1415
    }
    console.log(pi); // 3.14, pois `const` tem escopo de bloco e é imutável
    }
    exemploConst();

 # Características:
### **Escopo: Tem escopo de bloco, como o let.**

### **Imutabilidade: O valor de uma variável const não pode ser alterado, embora objetos e arrays declarados com const ainda possam ter seus conteúdos alterados.**

### **Hoisting: Semelhante ao let, o const é elevado, mas não inicializado. O acesso antes da declaração resultará em um erro.**

# Exemplos de Declaração e Uso de Variáveis
    // Usando var
    var nome = 'Alice';
    console.log(nome); // 'Alice'
    nome = 'Bob'; 
    console.log(nome); // 'Bob'

    // Usando let
    let idade = 30;
    console.log(idade); // 30
    idade = 31;
    console.log(idade); // 31

    // Usando const
    const pi = 3.14;
    console.log(pi); // 3.14
    // pi = 3.14159; // Erro: Assignment to constant variable

    // Exemplo de escopo de bloco com let e const
    {
    let a = 10;
    const b = 20;
    console.log(a); // 10
    console.log(b); // 20
     }
    // console.log(a); // Erro: a is not defined
    // console.log(b); // Erro: b is not defined

## var: Escopo de função ou global, hoisting, menos recomendado para novos códigos.
## let: Escopo de bloco, hoisting com erro antes da declaração, recomendado para variáveis que podem mudar.
## const: Escopo de bloco, valor imutável (não pode ser reatribuído), recomendado para constantes e referências imutáveis.
# O que São Funções em JavaScript?
### Em JavaScript, funções são uma das construções fundamentais e mais versáteis da linguagem. Elas são tratadas como objetos de primeira classe, o que significa que podem ser atribuídas a variáveis, passadas como argumentos para outras funções, e retornadas como valores. Esse comportamento permite uma grande flexibilidade na programação, possibilitando padrões avançados como programação funcional e orientada a objetos.
 ## Como elas são criadas ?
 ## Declaração de Função (Function Declaration)
  ### A declaração de função é a forma mais tradicional e amplamente utilizada para definir uma função em JavaScript.
  # Sintaxe
    function square(numero) {
    return numero * numero;
    }
  # Exemplo
    function somar(a, b) {
    return a + b;
    }

    console.log(somar(5, 3)); // 8
  # Expressão de Função (Function Expression)
   ### Tal função pode ser anônima; ele não tem que ter um nome. Por exemplo, a função square poderia ter sido definida como:
  # Sintaxe 
     function minhaFuncao(objeto) {
     objeto.make = "Toyota";
     Declaração de Função: Tradicional e içada, permite chamada antes da definição.
# 3-JavaScript no Navegador:

## >Como o JavaScript interage com HTML e CSS?
   ### Eles podem manipular tanto o HTML quanto o CSS para atualizar a interface do usuário dinamicamente, baseado na interação do usuário ou em outros eventos.

## >Pesquise sobre o DOM (Document Object Model) e sua relação com o JavaScript.
 ### O DOM (Document Object Model) é a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web. Neste guia, apresentaremos brevemente o DOM. Veremos como o DOM representa um documento HTML ou XML na memória e como você usa APIs para criar aplicativos e conteúdo da Web.A relação entre o DOM (Document Object Model) e o JavaScript é fundamental para o desenvolvimento web dinâmico e interativo. O DOM fornece uma estrutura de representação de um documento HTML ou XML em forma de árvore, e o JavaScript é a linguagem de programação que permite interagir com e modificar essa estrutura.
 
 # 4-Ferramentas e Ambiente de Desenvolvimento:
 ## > Quais são algumas das ferramentas e ambientes que você pode usar para escrever e testar código JavaScript? (Exemplo: navegadores, editores de código como VS Code)
### Visual Studio Code (VS Code): Um editor de código popular e altamente extensível. Oferece suporte para JavaScript e outras linguagens, extensões para depuração e integração com sistemas de controle de versão.
# 5-Recursos de Aprendizado
   ## Identifique e liste alguns recursos úteis para aprender JavaScript (sites, tutoriais, cursos online).
   >Edabit
  
  >CodinGame

  >CodeWars

  >Leet Code 







 



  



