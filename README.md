# Desafio Frontend JustTravel

Este projeto é a implementação de um desafio técnico para uma vaga de desenvolvedor Frontend, consistindo na criação da interface de uma loja de turismo. A aplicação permite aos usuários visualizar, buscar, paginar e adicionar ingressos de turismo a um carrinho de compras.

---

## ✨ Features

- **Listagem e Paginação:** Visualização dos ingressos disponíveis com paginação (6 por página).
- **Busca Dinâmica:** Campo de busca para filtrar ingressos por nome ou localização em tempo real.
- **Detalhes do Ingresso:** Página dedicada com informações detalhadas, descrição e mapa de localização para cada ingresso.
- **Carrinho de Compras:** Adição e remoção de ingressos do carrinho, com cálculo de subtotal, descontos e valor total.
- **Design Responsivo:** Interface adaptada para uma boa experiência tanto em desktops quanto em dispositivos móveis.

---

## 🚀 Como Rodar o Projeto

Para executar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

### Instalação e Execução

1.  **Clone o repositório:**

    ```bash
    git clone [git@github.com:LeonSantana7/desafio-just-travel.git](git@github.com:LeonSantana7/desafio-just-travel.git)
    ```

2.  **Acesse o diretório do projeto:**

    ```bash
    cd NOME_DO_REPOSITORIO
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173`

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias modernas do ecossistema Frontend:

- **React.js:** Biblioteca principal para a construção da interface de usuário.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática, cumprindo um dos requisitos bônus.
- **Redux Toolkit:** Gerenciador de estado para o carrinho e os dados dos ingressos.
- **React Router:** Para o gerenciamento das rotas da aplicação (página inicial e detalhes).
- **React-Bootstrap & Bootstrap:** Para componentes de UI e estilização base.
- **Axios:** Cliente HTTP para consumir os dados da API.
- **Leaflet & React-Leaflet:** Para a exibição do mapa de localização na página de detalhes.
- **React Icons:** Para a utilização de ícones vetoriais.
- **Vite:** Ferramenta de build para um desenvolvimento rápido.

---

## 🌐 Interação com a API

A aplicação consome a API de mock fornecida para obter os dados dos ingressos.

- **URL Base da API:** `https://65b98494b71048505a8aea91.mockapi.io/api/v1`

### Endpoints Utilizados:

- **`GET /tickets`**: Utilizado na página inicial para carregar a lista completa de todos os ingressos disponíveis.

  - _Observação: A filtragem por nome/localização e a paginação foram implementadas no lado do cliente (client-side) para este desafio._

- **`GET /tickets/{ticketId}`**: Utilizado na página de detalhes para buscar as informações completas de um ingresso específico.

---
