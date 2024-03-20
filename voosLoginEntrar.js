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
    // await cpfOuNumeroSmiles.click();
    await cpfOuNumeroSmiles.setValue("123479086");
    const senha = await driver.$(
      '//*[@resource-id="com.pontomobi.smiles:id/login_input_password"]'
    );
    // await senha.click();
    await senha.setValue("1521");
    await entrar.click();
    await driver.pause(30000);
    const depois = await driver.$('//*[@text="Depois"]');
    await depois.click();
    // const maisTarde = await driver.$(
    // '//*[@resource-id="com.pontomobi.smiles:id/buttonMoreLatterIncentive"]'
    // );
    // await maisTarde.click();
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

    const frameCalendar = await driver.$(
      '//*[@resource-id="com.pontomobi.smiles:id/calendar"]'
    );

    await frameCalendar.click();
    const dataDoVoo = await driver.$('//*[@text="29"]');
    await dataDoVoo.click();
    await dataDoVoo.click();

    // const frameContent = await driver.$(
    //   '//*[@resource-id="android:id/content"]'
    // );
    // await driver.pause(10000);

    // await frameContent.click();
    // await driver.pause(10000);

    const confirmar = await driver.$('//*[@text="CONFIRMAR"]');
    await driver.pause(10000);

    await confirmar.click();
    await driver.pause(10000);

    const buscarVoos = await driver.$('//*[@text="BUSCAR VOOS"]');
    await buscarVoos.click();

    // await driver.pause(15000);
    // const passagem = await driver.$('//*[@text="+ R$ 900,00"]');
    // await passagem.click();
    // 00000000-0000-01f2-ffff-ffff00000775
    // ('//*[@resource-id="com.pontomobi.smiles:id/btn_continue"]')

    await driver.pause(10000);

  

    const continuarPassagem = await driver.$('//*[@text="CONTINUAR"]');
    await continuarPassagem.click();
    await driver.pause(10000);

    const concordarComtermos = await driver.$(
      '//*[@resource-id="com.pontomobi.smiles:id/check_box"]'
    );
    await concordarComtermos.click();

    const continuarCompra = await driver.$('//*[@text="CONTINUAR"]');
    await continuarCompra.click();

    const adulto1 = await driver.$(
      '//*[@resource-id="com.pontomobi.smiles:id/arrow"]'
    );
    await continuarCompra.click();

    const passageiro = await driver.$('//*[@text="Jhonatan K."]');
    await passageiro.click();

    const ddi = await driver.$('//*[@text="DDI"]');
    await ddi.setValue("55");

    const dddENumero = await driver.$('//*[@text="DDD X XXXX XXXX"]');
    await dddENumero.setValue("47997194946");

    const incluir = await driver.$('//*[@text="INCLUIR"]');
    await incluir.click();
  } finally {
    await driver.pause(10000);
    // await driver.deleteSession();
  }
}
runTest().catch(console.error);
