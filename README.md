# cucumber-class

Este repositório contém um projeto de automação de testes utilizando **Cucumber.js** e **Selenium WebDriver** em Node.js.

## Pré-requisitos

- Node.js (versão 20 ou superior recomendada)
- npm
- Google Chrome (para execução dos testes)
- [ChromeDriver](https://chromedriver.chromium.org/downloads) compatível com sua versão do Chrome

## Instalação

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/seu-usuario/cucumber-class.git
cd cucumber-class
npm install
```

## Estrutura do Projeto

```
cucumber-class/
├── features/
│   ├── login.feature
│   └── step_definitions/
│       └── loginSteps.js
├── package.json
└── ...
```

## Como executar os testes

Execute todos os testes definidos nos arquivos `.feature`:

```sh
npm test
```