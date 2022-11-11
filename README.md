# API NodeJS

## Estrutura Clean Architecture

### entities

> Regras e entidades de negócio.

> Dominio.

> Erros de dominio.

> Protocolos e interfaces.

### usecases

> Casos de Uso.

> Regras do sistema.

> Operações de mais alto nível e features do sistema.

> Erros direcionados ao tratamento dos casos de uso.

### main

> Camada onde configurações, adapter e dependencias são injetadas.

> Camada que conhece as demais e as solidifica.

> Documentação (docs), injeção de dependencias (factories), configuração servidor (http)

### presentation

> Camada de adaptadores de intreface.

> Chama casos de uso e tecnologias especificas.

<br>

### Criação do Projeto

-   [x] criação do projeto
-   [x] versionamento
-   [x] configuração de typescript
-   [x] configuração de eslint/prettier
-   [x] configuração de jest
-   [x] configuração swagger
-   [x] configuração CORS
-   [x] configuração dotenv + cross-env

### Configuração do ORM

-   [ ] configuração de banco
-   [ ] criação de conexões -> dev e test
-   [ ] estrutura para teste de integração(supertest) e unitário
-   [ ] confiração do path mapping e folders
-   [ ] estruturação da arquitetura do projeto
