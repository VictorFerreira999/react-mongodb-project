# React-mongodb-project

Este é um projeto full-stack que utiliza **React** no frontend, **Node.js** no backend e **MongoDB** como banco de dados. A aplicação é containerizada usando **Docker** e orquestrada com **Docker Compose**. O objetivo deste projeto é fornecer um exemplo de como configurar uma aplicação moderna full-stack com uma configuração simples para desenvolvimento e testes.

## Tecnologias Usadas

- **Frontend**: React
- **Backend**: Node.js
- **Banco de Dados**: MongoDB
- **Containerização**: Docker
- **Orquestração**: Docker Compose

## Pré-requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

- **Docker**: [Instalar Docker](https://www.docker.com/get-started)
- **Docker Compose**: [Instalar Docker Compose](https://docs.docker.com/compose/install/)

## Instruções para Rodar o Projeto

### 1. Clone o Repositório

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/react-mongodb-project.git
cd react-mongodb-project
```

### 2. Construir as Imagens Docker

Utilize o Docker Compose para construir as imagens e iniciar os contêineres:

```bash
docker-compose up --build
```

Esse comando irá:

- Construir as imagens para o **frontend**, **backend** e **MongoDB**.
- Subir os contêineres.
- Expor as portas: 
  - **Frontend** na porta **3000**
  - **Backend** na porta **5000**
  - **MongoDB** na porta **27017**

### 3. Acessar a Aplicação

Após o comando acima, você poderá acessar a aplicação nos seguintes links:

- O **frontend** estará disponível em: [http://localhost:3000](http://localhost:3000)
- O **backend** estará disponível em: [http://localhost:5000](http://localhost:5000)

### 4. Interagir com a API

Você pode testar a API do **backend** utilizando ferramentas como **Postman** ou **cURL** para enviar requisições HTTP. A API estará configurada para interagir com o banco de dados **MongoDB** e realizar operações básicas, como criar, ler, atualizar e excluir documentos.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```