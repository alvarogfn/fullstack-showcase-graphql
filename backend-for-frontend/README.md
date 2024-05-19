# BFF - tema 28

Essa aplicação é uma camada adicional feita em GRAPHQL entre o backend e o frontend.

## Docker

Essa aplicação esta dockerizada com um container na pasta raiz do projeto, e pode ter todas suas instancias levantadas com o comando

```bash
  docker compose up -d
```

## Instalação

Use o comando npm para instalar as dependencias:

```zsh
  npm install
```

## Rodando

```zsh
  npm run dev
```

A aplicacao tentara acessar um backend na porta:

`http://backend:3000`.

**Alerta: `backend` é um namespace de container docker, onde deve conter a API em node.js conectada ao banco de dados.**

## [Documentacao da API](https://documenter.getpostman.com/view/21135120/2s8YRjosme#d12beebb-aa63-4db4-8332-0a2252bd5f84)

Detalhes sobre os endpoints, retornos podem ser lidos na documentação pelo POSTMAN.
