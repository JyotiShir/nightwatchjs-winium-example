module.exports = {
  elements: {
    window: {
      selector: '//*[@Name="Калькулятор" and @LocalizedControlType="окно"]',
      locateStrategy: 'xpath'
    },
    num1: {
      selector: '1',
      locateStrategy: 'name'
    },
    num2: {
      selector: '2',
      locateStrategy: 'name'
    },
    num3: {
      selector: '3',
      locateStrategy: 'name'
    },
    num4: {
      selector: '4',
      locateStrategy: 'name'
    },
    num5: {
      selector: '5',
      locateStrategy: 'name'
    },
    num6: {
      selector: '//*[@Name="6" and @LocalizedControlType="кнопка"]',
      locateStrategy: 'xpath'
    },
    num7: {
      selector: '//*[@Name="7" and @LocalizedControlType="кнопка"]',
      locateStrategy: 'xpath'
    },
    num8: {
      selector: '//*[@Name="8" and @LocalizedControlType="кнопка"]',
      locateStrategy: 'xpath'
    },
    num9: {
      selector: '//*[@Name="9" and @LocalizedControlType="кнопка"]',
      locateStrategy: 'xpath'
    },
    num0: {
      selector: '//*[@Name="0" and @LocalizedControlType="кнопка"]',
      locateStrategy: 'xpath'
    },
    plus: {
      selector: 'Сложение',
      locateStrategy: 'name'
    },
    equal: {
      selector: 'Равно',
      locateStrategy: 'name'
    },
    result: {
      selector: '158',
      locateStrategy: 'id'
    }
  }
}