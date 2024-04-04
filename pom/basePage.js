// basePage.js
class BasePage {
  async clickElement(element) {
    await element.click();
  }

  async setValue(element, value) {
    await element.setValue(value);
  }
}

module.exports = { BasePage };
