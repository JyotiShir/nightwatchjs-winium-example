/* jshint expr: true */
module.exports = {
  'Addition' : function (client) {
    client
      .page.main_window()
      .assert.elementPresent('@window',"Калькулятор запущен")
      // вводим 12345
      .verify.elementPresent('@num1')
      .click('@num1')
      .verify.elementPresent('@num2')
      .click('@num2')
      .verify.elementPresent('@num3')
      .click('@num3')
      .verify.elementPresent('@num4')
      .click('@num4')
      .verify.elementPresent('@num5')
      .click('@num5')
      .verifyResultText('@result', '12345')
      // нажимаем Плюс
      .click('@plus')
      .verifyResultText('@result', '12345')
      // вводим 67890
      .verify.elementPresent('@num6')
      .click('@num6')
      .verify.elementPresent('@num7')
      .click('@num7')
      .verify.elementPresent('@num8')
      .click('@num8')
      .verify.elementPresent('@num9')
      .click('@num9')
      .verify.elementPresent('@num0')
      .click('@num0')
      .verifyResultText('@result', '67890')
      .click('@equal')
      .verifyResultText('@result', '80235')

    client
      .end()
  }
};
