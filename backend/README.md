# Backend - tema 28

Essa aplicação é responsavel pela conexão com o banco de dados e expor os dados em endpoints com express.

## Docker

Essa aplicação está dockerizada com um container na pasta raiz do projeto, e pode ter todas suas instancias levantadas com o comando

```bash
  docker compose up -d
```

## Instalacao

Use o comando npm para instalar as dependencias:

```zsh
  npm install
```

Voce tambem pode subir a aplicaçao em um container Docker, isso requer que voce tenha o docker instalado no seu computador.

## Rodando

```zsh
  npm run dev
```

**Alerta: A aplicação tentará acessar um banco de dados mongoDB no endereço `db:27027`, sendo `db` um namespace de container docker.**

## [Documentação da API](https://documenter.getpostman.com/view/21135120/2s8YRjosme#d12beebb-aa63-4db4-8332-0a2252bd5f84)

Detalhes sobre os endpoints, retornos podem ser lidos na documentaçao pelo POSTMAN.
