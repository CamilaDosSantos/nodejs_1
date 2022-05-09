# nodejs_1
### Exercícios
---

    PARTE 1 (Responder esses exercicios (1 ao 9) em um README no repositório da aplicação node / express de vocês.)

1. Pesquisar sobre o que é JWT (Json Web Token) e Cookies para transporte de dados, descrever.

 Para fazer o transporte de dados efeito em uma requisição onde por exemplo pode conter, como por exemplo endereço de e-mail e senha, que será o corpo da requisição de uma API com esses dados essociados pelo cliente e tenha sido autenticados no servidor, este  criará um token JWT que é criptografado em algorimico que é salvo geralmente em um local Store, e depois envia por que la no servidor ele tem um script uma função de discriptografar ele consegue extrair as informações do token por isso que fica só la no backend e o cliente não tem acesso para não permitir ecesso de hachers por exemplo, pra que os usuarios tenham privacidade em seus dados pessoais colocados la.

2. Atualizar o sistema de autenticação básico da ultima aula para utilizar JWT. (Procurar tutoriais como por exemplo: https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-nodejs/) e implementar a sua solução.


3. Finalizado a implementação do JWT, enviar para mim o link do repositório (que vocês vem trabalhando no exercicio das 14 branches) no privado no discord com o novo sistema de autenticação.

    PARTE 2 (Na próxima aula começaremos estudar programação orientada a objetos e posteriormente Java)

4. Pesquisar sobre POO (Programação Orientada a Objetos). O que é POO ?
-Programação Orientada a Objetos é um modelo de análise, projeto e programação de software baseado na composição e interação entre diversas unidades chamadas de 'objetos'.
6. Quais as diferenças entre programação estruturada e programação orientada a objetos ?

7. Quais linguagens estruturadas e quais linguagens orientadas a objetos ?
8. O que são classes e o que são objetos ?
9. Quais o quatro pilares da POO ? Descreva cada um deles com suas palavras. 

### Observações Sobre os Projetos
OBS: Os repositórios de projetos desenvolvidos para PADO, DEVEM ser criados como privado na organização PADOLabs (NÃO CRIAR EM REPOSITÓRIO PESSOAL, VISTO QUE É SOFTWARE PROPRIETÁRIO).



JWT (JSON Web Token) é um método RCT 7519 padrão da indústria para realizar autenticação entre duas partes por meio de um token assinado que autentica uma requisição web. Esse token é um código em Base64 que armazena objetos JSON com os dados que permitem a autenticação da requisição.