# Cypress POC (Proof of Concept)

Este projeto é uma Prova de Conceito (POC) utilizando o framework de automação **Cypress** com **Cucumber** (Gherkin syntax) para testes end-to-end.

## 🧪 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [Cucumber](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
- JavaScript (ES6+)
- Page Object Model (POM)

## 📁 Estrutura do Projeto
Cypress_POC/
├── cypress/
│ ├── e2e/
│ │ ├── features/
│ │ │ ├── login.feature
│ │ │ ├── tags.feature
│ │ ├── step_definitions/
│ │ │ ├── login.js
│ │ │ ├── tags.js
│ ├── page-object/
│ │ ├── LoginPage.js
│ ├── support/
│ │ ├── commands.js
│ │ ├── e2e.js
├── cypress.config.js
├── package.json
├── jsconfig.json
└── .gitignore


## 🚀 Como Executar

### Pré-requisitos

- Node.js (recomenda-se a versão LTS)
- npm (gerenciador de pacotes)

### Instalação

1. Clone o repositório ou extraia o ZIP:
   ```bash
   git clone https://github.com/PamArosti/Cypress/
   cd Cypress_POC/Cypress-main
   npm install

### Servidor local
Cypress_POC/server/login-server/
├── server.py
├── templates/
│   └── index.html

Instale o python
Dentro da pasta abra um prompt de comando e execute:
    python server.py

Acesse no navegador: http://localhost:5000

### Rodando os testes
Abra a interface interativa do Cypress:
    npx cypress open

Ou rode os testes diretamente no terminal:

    npx cypress run



