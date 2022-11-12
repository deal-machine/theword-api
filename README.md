# API NodeJS

## Estrutura Clean Architecture

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
-   [x] Husky Hook
-   [x] NodeJS
-   [x] Typescript
-   [x] Eslint + Prettier
-   [x] Integration Tests with jest
-   [x] Unit Tests with jest
-   [x] Swagger Documentation
-   [x] CORS Configuration
-   [x] dotenv + cross-env
-   [x] Path Mapping
-   [ ] Postgres Database
-   [ ] Prisma ORM
-   [ ] Express

<br>
<hr>
<br>
