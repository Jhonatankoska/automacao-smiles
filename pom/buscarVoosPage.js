// buscarVoosPage.js
const { BasePage } = require("../pom/basePage"); // Importe a classe BasePage ou outra classe base, se aplicável

class BuscarVoosPage extends BasePage {
  get botaoBuscarVoos() {
    return $('//*[@text="BUSCAR VOOS"]');
  }

  async clicarBotaoBuscarVoos() {
    await this.clickElement(this.botaoBuscarVoos);
  }
}

module.exports = new BuscarVoosPage();
