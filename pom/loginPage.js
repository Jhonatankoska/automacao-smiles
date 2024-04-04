// appPage.js
const { BasePage } = require("../pom/basePage");

class LoginPage extends BasePage {

  constructor(driver) {
    super(driver); // Chama o construtor da classe pai e passa o driver
  }
  get duranteOUsoDoApp() {
    return $(
      '//*[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]'
    );
  }
  get pular() {
    return $('//*[@resource-id="com.pontomobi.smiles:id/btn_intro_jump"]');
  }
  get continuar() {
    return $('//*[@resource-id="com.pontomobi.smiles:id/lgpd_accept_agreed"]');
  }
  get entrar() {
    return $('//*[@text="ENTRAR"]');
  }
  get cpfOuNumeroSmiles() {
    return $(
      '//*[@resource-id="com.pontomobi.smiles:id/login_input_member_number"]'
    );
  }
  get senha() {
    return $(
      '//*[@resource-id="com.pontomobi.smiles:id/login_input_password"]'
    );
  }
  get OK() {
    return $('//*[@text="OK"]');
  }
  get depois() {
    return $('//*[@text="Depois"]');
  }
  get vamosViajar() {
    return $('//*[@text="Vamos viajar, Jhonatan?"]');
  }

  async clicarDuranteOUsoDoApp() {
    await this.clickElement(this.duranteOUsoDoApp);
  }

  async clicarPular() {
    await this.clickElement(this.pular);
  }

  async clicarContinuar() {
    await this.clickElement(this.continuar);
  }

  async clicarEntrar() {
    await this.clickElement(this.entrar);
  }

  async preencherCpfOuNumeroSmiles(valor) {
    await this.setValue(this.cpfOuNumeroSmiles, valor);
  }

  async preencherSenha(valor) {
    await this.setValue(this.senha, valor);
  }

  async clicarOK() {
    await this.clickElement(this.OK);
  }

  async clicarDepois() {
    await this.clickElement(this.depois);
  }

  async clicarVamosViajar() {
    await this.clickElement(this.vamosViajar);
  }
}

module.exports = new LoginPage();
