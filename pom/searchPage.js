// searchPage.js
const { BasePage } = require("../pom/basePage");

class SearchPage extends BasePage {
  get pesquiseAquiOrigem() {
    return $('//*[@text="Pesquise aqui"]');
  }
  get aeroportoOrigem() {
    return $('//*[@text="São Paulo, Brasil, Guarulhos (GRU)"]');
  }
  get tipoDePassagem() {
    return $('//*[@text="Ida e Volta"]');
  }
  get passagemSoIda() {
    return $('//*[@text="Só ida"]');
  }
  get aplicar() {
    return $('//*[@text="APLICAR"]');
  }
  get pesquiseAquiDestino() {
    return $('//*[@text="Pesquise aqui"]');
  }
  get aeroportoDestino() {
    return $(
      '//*[@text="Rio de Janeiro, Brasil, Galeão/Antonio Carlos Jobim &nbsp; (GIG)"]'
    );
  }

  async preencherPesquisaOrigem(valor) {
    await this.setValue(this.pesquiseAquiOrigem, valor);
  }

  async selecionarAeroportoOrigem() {
    await this.clickElement(this.aeroportoOrigem);
  }

  async selecionarTipoPassagem() {
    await this.clickElement(this.tipoDePassagem);
  }

  async selecionarPassagemSoIda() {
    await this.clickElement(this.passagemSoIda);
  }

  async clicarAplicar() {
    await this.clickElement(this.aplicar);
  }

  async preencherPesquisaDestino(valor) {
    await this.setValue(this.pesquiseAquiDestino, valor);
  }

  async selecionarAeroportoDestino() {
    await this.clickElement(this.aeroportoDestino);
  }
}

module.exports = new SearchPage();
