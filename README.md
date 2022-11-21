# The Word API

## Features

-   [ ] Business Management - Gestão Administrativa
-   [ ] Events - Agendamentos, calendários e eventos
-   [ ] Members - Membros
-   [ ] Groups and Segments- Grupos e segmentos
-   [ ] Timeline and notifications (events, news) - Linha do tempo e notificações com eventos e noticias
-   [ ] Bible - Biblia online
-   [ ] Messages and words(text, video and sound) - Mensagens e palavras(texto, video e sons)
-   [ ] Notepad - Bloco de anotações
-   [ ] Pray requests - Pedidos de oração
-   [ ] Offers - Ofertas e doações

## Entities

-   [ ] Church
-   [ ] Address
-   [ ] Event
-   [ ] Group
-   [ ] Notification
-   [ ] Content -> Bible, Message, Word
-   [ ] Notepad
-   [ ] Request -> Pray
-   [ ] Offer

## Setup

### Open project folder and install dependencies

> npm install

> yarn install

### To run app

> npm run dev

> yarn dev

### To run tests

> npm run test

> yarn test

### To run typeorm generate

> npx typeorm migration:create ./src/infra/database/typeorm/migrations/{MigrationName}

### To run typeorm migrations

> npm run migrate

### To revert typeorm migrations

> npm run revert

<br>
<hr>
<br>

## Structure

### domain

> Regras e entidades de negócio.

> Entidades de dominio.

> Erros de dominio.

> Protocolos e definições de negócio.

### data

> Regras do sistema.

> Operações de mais alto nível e features do sistema.

> Casos de Uso.

> Erros direcionados ao tratamento dos casos de uso.

### main

> Camada onde configurações, adapters e dependencias são injetadas.

> Camada que conhece as demais e as solidifica.

> Documentação (docs), injeção de dependencias (factories), configuração servidor (http)

### presentation

> Camada de adaptadores de intreface, como as controllers.

> Chama casos de uso e tecnologias especificas.

### infra

> Camada onde a infraestrutura é concentrada.

> Disponibiliza adaptadores de bibliotecas externas e banco de dados.

<br>
<div  align="center" >
<img src="./assets/clean.png " alt="clean architecture layers - folder by Otávio Lemos" style="height: 550px; width:650px;border-radius:20%;"/>
</div>

<br>
<hr>
<br>

### Detalhes do Projeto

-   [x] Clean Architecture
-   [x] Git - Conventional Commits
-   [x] Husky Hook + Lint Staged
-   [x] NodeJS
-   [x] Typescript
-   [x] Eslint + Prettier
-   [x] Integration Tests with jest
-   [x] Unit Tests with jest
-   [x] Swagger Documentation
-   [x] CORS Configuration
-   [x] dotenv + cross-env
-   [x] Path Mapping
-   [x] Postgres Database
-   [x] TypeORM
-   [x] Express

<br>
<hr>
<br>
