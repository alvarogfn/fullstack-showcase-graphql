# Tema 28 - Vitrine de Produtos

## Pre-requisitos

Esse configuraçao assume que voce tem o Docker instalado no computador, com ele rodando.

Para instruções de como instalar o docker, veja na [documentacao](https://www.docker.com/).

### Subindo os componentes da aplicação

Você pode subir a aplicação apartir dos containers do docker pelo docker compose apartir do comando:

```bash
  docker compose up -d
```

As portas usadas pelo docker compose serao:

* 27017:27017
* 3000:3000
* 3001:3001
* 3002:8080

### Backend

Voce deve ser capaz de acessar a API conectada ao mongo pelo endpoint:

```text
  http://localhost:3000
  ```

### Backend for Frontend

Voce deve ser capaz de acessar a API graphql pelo endpoint:

```text
  http://localhost:3001
```

### Frontend

Voce deve ser capaz de acessar a interface da aplicaçao pelo endpoint:

```text
  http://localhost:3002
```

## [Documentacao das APIs Rest](https://documenter.getpostman.com/view/21135120/2s8YRjosme#2b456d0f-7f8a-4ebc-870e-5ac5dd458298)

No link acima, temos a documentacao das APIs tanto do backend quanto do BFF.


## [Documentação do frontend](https://www.figma.com/file/0v8UFV4bhodDfu0zGFtC1B/a?node-id=0%3A1)

Componentes do frontend documentados e desenhados no figma.
