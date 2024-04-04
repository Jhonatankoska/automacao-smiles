// tiposDePassagensPage.js
const { BasePage } = require("../pom/basePage"); // Importe a classe BasePage ou outra classe base, se aplicável

class TiposDePassagensPage extends BasePage {
  get opcaoPassagem() {
    return $('//*[@text="1.000"]');
  }
  get textoSemMilhas() {
    return $('//*[@text="Sem milhas para a viagem?"]');
  }

  async selecionarOpcaoPassagem() {
    await this.clickElement(this.opcaoPassagem);
  }

  async clicarTextoSemMilhas() {
    await this.clickElement(this.textoSemMilhas);
  }
}

module.exports = new TiposDePassagensPage();
