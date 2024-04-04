// calendarPage.js
const { BasePage } = require("../pom/basePage");

class CalendarPage extends BasePage {
  get frameCalendar5() {
    return $(`(//android.view.ViewGroup[@content-desc="${dataFormatada}"])[2]`);
  }
  get confirmar() {
    return $('//*[@text="CONFIRMAR"]');
  }

  async selecionarData(data) {
    // Lógica para selecionar uma data específica no calendário
    const frameCalendario = await this.frameCalendar5;
    await this.clickElement(frameCalendario);
  }

  async confirmarData() {
    // Lógica para confirmar a data selecionada no calendário
    const btnConfirmar = await this.confirmar;
    await this.clickElement(btnConfirmar);
  }

  async getDataFormatada() {
    const dataAtual = new Date();
    dataAtual.setDate(dataAtual.getDate() + 10);

    const dia = String(dataAtual.getDate()).padStart(2, "0");
    const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
    const ano = dataAtual.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }
}

module.exports = new CalendarPage();
