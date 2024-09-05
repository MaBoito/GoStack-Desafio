# Método HTTP e Parâmetros

Esse projeto foi desenvolvido para criar IDs aleatórias com título e dono, listar, alterar o título e o dono e excluir a ID.


## ⚙️ Executando o projeto

Para executar o projeto, precisamos do app INSOMNIA baixado.
Dentro do INSOMNIA iremos criar um novo projeto e como estamos usando a porta: 3333 iremos em "MANAGE ENVIRONMENT" e criremos uma nova base com o seguinte código 

{
	"base_url": "http://localhost:3333"
} 

Após isso dentro do projeto iremos adicionar 4 http request um "GET", "POST", "PUT" e "DEL".

- Dentro do GET iremos colocar "/projects/" após a base URL.
- Dentro do POST iremos colocar "/projects" após a base URL e dentro do Body iremos colocar o código abaixo:

{
"title": "seu título",
"owner": "seu nome"
}

- Dentro do PUT iremos colocar "/projects/ID" após A BASE URL, porém o id que será colocado será gerado somente quando executarmos o projeto e dentro do Body iremos colocar o código abaixo:

{
"title": "Novo título",
"owner": "Novo nome"
}

- Dentro do DEL iremos colocar "/projects/ID" após a base URL, porém o id que será colocado será gerado somente quando executarmos o projeto.

Após finalizarmos as configurações do INSOMNIA, basta executar no terminal yarn dev para finalizar e poder executar o projeto para ver o resultado.


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Git e Github
- Insomnia
- JSON
- JavaScript
- Yarn


---
⌨️ com ❤️ por [Matheus Boito](https://github.com/MaBoito/) 😊