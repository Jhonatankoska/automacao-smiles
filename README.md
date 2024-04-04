# Automação do Fluxo de Login do App Smiles com Appium

Este projeto foi criado para automatizar o fluxo de login do aplicativo Smiles utilizando o framework Appium.

## Iniciando o Projeto

Para iniciar o projeto, siga as etapas abaixo:

1. Execute o seguinte comando para instalar as dependências necessárias:

```
npm install
```

2. Iniciar o emulador no Android Studio 

3. Instalar o appium no projeto

```
npm i --location=global appium
```

4. Instalar Uiautomator 

```
appium driver install uiautomator2
```

5. Inicie o servidor do Appium com o seguinte comando:

```
appium
```


6. Agora você pode executar casos de teste específicos usando o comando:

```
node nome_do_seu_test.js
```

## Objetivo do Projeto

O objetivo deste projeto é praticar a automação de testes utilizando o Appium e o aplicativo Smiles. Além disso, também estou praticando o uso do Git Flow, com as branches master/main e develop, conforme planejado nas tarefas abaixo:

- **TASK-0001:** Escrever README e subir automação login
- **TASK-0002:** Automatizar fluxo de voo e alterar para padrão POM (Page Object Model)

## Observações
- O projeto usa dotenv. Para definir a login e senha do App use o arquivo .env e sete as variáveis LOGIN e SENHA

## Referências

- [Documentação do Appium](https://appium.io/docs/en/about-appium/intro/)
- [Site do App Smiles](https://www.smiles.com.br/)
