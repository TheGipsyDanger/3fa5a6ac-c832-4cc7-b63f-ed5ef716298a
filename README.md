# Anime App - Next.js Redux Saga GraphQL Project

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Redux Saga](https://img.shields.io/badge/Redux_Saga-999999?style=for-the-badge&logo=redux-saga&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

Este projeto é uma aplicação web desenvolvida com Next.js, utilizando Redux para o gerenciamento de estado, Redux-Saga para efeitos colaterais, GraphQL com Codegen para consultas e mutações, e Jest para testes unitários.

Ela também está disponibilizada no seguinte link: 

https://main--animelistrenan.netlify.app/

## Índice

- [Anime App - Next.js Redux Saga GraphQL Project](#anime-app---nextjs-redux-saga-graphql-project)
  - [Índice](#índice)
  - [Sobre](#sobre)
  - [Instalação](#instalação)
  - [Estrutura dos componentes](#estrutura-dos-componentes)
  - [Testes](#testes)
  - [Notas](#notas)

## Sobre

Este projeto foi criado para demonstrar uma arquitetura moderna de frontend usando Next.js com integração de GraphQL e Redux-Saga. A aplicação está configurada para utilizar GraphQL Code Generator para gerar automaticamente hooks e operações GraphQL baseadas em schemas e queries/mutations GraphQL.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/TheGipsyDanger/3fa5a6ac-c832-4cc7-b63f-ed5ef716298a.git anime-app

    cd anime-app
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:
    Crie um arquivo `.env.local` na raiz do projeto e adicione suas variáveis de ambiente:
    ```bash
    NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://sua-api-graphql.com/graphql
    ```

4. Execute o projeto:
    ```bash
    npm run dev
    ```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Estrutura dos componentes

O padrão do projeto é MVVM, então cada camada é dividida entre layout e lógica.

Ao gerar um Componente, a estrutura básica é esta:
```
├ index.tsx       … camada de layout.
├ Name.model.ts   … camada de lógica. 
├ Name.styles.ts  … camada de estilos.
├ Name.test.ts    … camada de testes.
├ Name.types.ts   … arquivos de interface do componente.
```

## Testes

1. Execute o comando:
    ```bash
    npm run test
    # ou
    npm run test:full
    ```

## Notas

- **Variáveis de Ambiente**: Certifique-se de adicionar as variáveis de ambiente reais que sua aplicação requer.
- **Imagens**: Adicione suas imagens de captura de tela no diretório `screenshots` e ajuste os caminhos conforme necessário.
- **Instruções de Contribuição**: Adapte as instruções de contribuição conforme suas necessidades específicas.

Esse `README.md` fornece uma visão geral abrangente do projeto e deve ser útil tanto para desenvolvedores que desejam contribuir quanto para novos usuários que desejam entender e utilizar o projeto.