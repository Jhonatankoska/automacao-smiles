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
    const naoPermitir = await driver.$('//*[@text="Não permitir"]');
    await naoPermitir.click();
    const pular = await driver.$('//*[@text="Pular"]');
    await pular.click();
    await driver.pause(5000);
    const continuar = await driver.$('//*[@text="Continuar"]');
    await continuar.click();
    const entrar = await driver.$('//*[@text="Continuar como visitante"]');
    await entrar.click();
  } finally {
    await driver.pause(10000);
    await driver.deleteSession();
  }
}
runTest().catch(console.error);
