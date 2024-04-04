require("dotenv").config();
const { remote } = require("webdriverio");
const LoginPage = require('../pom/loginPage');
const SearchPage = require('../pom/searchPage');
const CalendarPage = require('../pom/calendarPage');
const BuscarVoosPage = require('../pom/buscarVoosPage');
const TiposDePassagensPage = require('../pom/tiposDePassagensPage');


const capabilities = {
  platformName: "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android",
  "appium:appPackage": "com.pontomobi.smiles",
  "appium:appActivity": "com.pontomobi.smiles.ui.common.SplashActivity",
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || "0.0.0.0",
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: "info",
  capabilities,
};

(async function runTest() {
  const driver = await remote(wdOpts);
  const loginPage = new LoginPage(driver); 

  try {
    await driver.pause(10000);

    // Página de uso do app
    await loginPage.clicarDuranteOUsoDoApp(); // Utilização do método clicarDuranteOUsoDoApp
    await loginPage.clicarPular(); // Utilização do método clicarPular
    await loginPage.clicarContinuar(); // Utilização do método clicarContinuar
    await loginPage.clicarEntrar(); // Utilização do método clicarEntrar
    await loginPage.preencherCpfOuNumeroSmiles(process.env.LOGIN); // Utilização do método preencherCpfOuNumeroSmiles
    await loginPage.preencherSenha(process.env.SENHA); // Utilização do método preencherSenha
    await loginPage.clicarEntrar(); // Utilização do método clicarEntrar
    await driver.pause(15000);

    // Lidar com pop-ups ou mensagens
    try {
      await loginPage.clicarOK(); // Utilização do método clicarOK
      await loginPage.clicarEntrar(); // Utilização do método clicarEntrar
    } catch (error) {
      await loginPage.clicarDepois(); // Utilização do método clicarDepois
    }

    // Página de pesquisa
    await loginPage.clicarVamosViajar();
    await driver.pause(15000);
    await SearchPage.preencherPesquisaOrigem("gru");
    await SearchPage.selecionarAeroportoOrigem();
    await SearchPage.selecionarTipoPassagem();
    await SearchPage.selecionarPassagemSoIda();
    await SearchPage.clicarAplicar();
    await SearchPage.preencherPesquisaDestino("gig");
    await SearchPage.selecionarAeroportoDestino();
    await driver.pause(10000);

    // Página do calendário
    await driver.pause(10000);
    const dataFormatada = await CalendarPage.getDataFormatada();
    await CalendarPage.selecionarData(dataFormatada);
    await driver.pause(10000);

    // Confirmar data selecionada
    await CalendarPage.confirmarData();
    await BuscarVoosPage.clicarBotaoBuscarVoos();

    // Selecionar a opção de passagem
    await TiposDePassagensPage.selecionarOpcaoPassagem();

    // Clicar no botão "Sem milhas para a viagem?"
    await TiposDePassagensPage.clicarTextoSemMilhas();
  } finally {
    await driver.pause(10000);
   // await driver.deleteSession();
  }
})();
