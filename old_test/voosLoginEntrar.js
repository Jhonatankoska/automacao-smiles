require("dotenv").config();
const { remote } = require("webdriverio");
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
async function runTest() {
  const driver = await remote(wdOpts);
  try {
    await driver.pause(10000);
    const duranteOUsoDoApp = await driver.$(
      '//*[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]'
    );
    await duranteOUsoDoApp.click();
    const pular = await driver.$(
      '//*[@resource-id="com.pontomobi.smiles:id/btn_intro_jump"]'
    );
    await pular.click();
    await driver.pause(10000);
    const continuar = await driver.$(
      '//*[@resource-id="com.pontomobi.smiles:id/lgpd_accept_agreed"]'
    );
    await continuar.click();
    const entrar = await driver.$('//*[@text="ENTRAR"]');
    await entrar.click();
    const cpfOuNumeroSmiles = await driver.$(
      '//*[@resource-id="com.pontomobi.smiles:id/login_input_member_number"]'
    );
    await cpfOuNumeroSmiles.setValue(process.env.LOGIN);
    const senha = await driver.$(
      '//*[@resource-id="com.pontomobi.smiles:id/login_input_password"]'
    );
    await senha.setValue(process.env.SENHA);
    await entrar.click();
    await driver.pause(15000);

    try {
      const OK = await driver.$('//*[@text="OK"]');
      await OK.click();
      await entrar.click();
    } catch (error) {
      const depois = await driver.$('//*[@text="Depois"]');
      await depois.click();
    }

    const vamosViajar = await driver.$('//*[@text="Vamos viajar, Jhonatan?"]');
    await vamosViajar.click();
    await driver.pause(15000);

    const pesquiseAquiOrigem = await driver.$('//*[@text="Pesquise aqui"]');
    await pesquiseAquiOrigem.setValue("gru");

    const aeroportoOrigem = await driver.$(
      '//*[@text="São Paulo, Brasil, Guarulhos (GRU)"]'
    );
    await aeroportoOrigem.click();

    const tipoDePassagem = await driver.$('//*[@text="Ida e Volta"]');
    await tipoDePassagem.click();

    const passagemSoIda = await driver.$('//*[@text="Só ida"]');
    await passagemSoIda.click();

    const aplicar = await driver.$('//*[@text="APLICAR"]');
    await aplicar.click();

    const pesquiseAquiDestino = await driver.$('//*[@text="Pesquise aqui"]');
    await pesquiseAquiDestino.setValue("gig");

    const aeroportoDestino = await driver.$(
      '//*[@text="Rio de Janeiro, Brasil, Galeão/Antonio Carlos Jobim &nbsp; (GIG)"]'
    );
    await aeroportoDestino.click();
    await driver.pause(10000);

    var dataAtual = new Date();
    dataAtual.setDate(dataAtual.getDate() + 10);

    var dia = String(dataAtual.getDate()).padStart(2, "0");
    var mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
    var ano = dataAtual.getFullYear();

    var dataFormatada = dia + "/" + mes + "/" + ano;

    console.log(dataFormatada);

    const frameCalendar5 = await driver.$(
      `(//android.view.ViewGroup[@content-desc="${dataFormatada}"])[2]`
    );
    await frameCalendar5.click();

    await driver.pause(10000);

    const confirmar = await driver.$('//*[@text="CONFIRMAR"]');
    await driver.pause(10000);

    await confirmar.click();
    await driver.pause(10000);

    const buscarVoos = await driver.$('//*[@text="BUSCAR VOOS"]');
    await buscarVoos.click();

    await driver.pause(15000);
    const passagem = await driver.$('//*[@text="1.000"]');
    await passagem.click();

    const clicaAleatorio = await driver.$(
      '//*[@text="Sem milhas para a viagem?"]'
    );
    await clicaAleatorio.click();
  } finally {
    await driver.pause(10000);
    // await driver.deleteSession();
  }
}
runTest().catch(console.error);
