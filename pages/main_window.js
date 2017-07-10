let windowLocator = {selector: '/*[@Name="Калькулятор"]', locateStrategy: 'xpath'}

function buttonLocator(num){ return {selector: num, locateStrategy: 'name'} }

module.exports = {
  elements: {
    window: {
      selector: '/*[@Name="Калькулятор" and @LocalizedControlType="окно"]',
      locateStrategy: 'xpath'
    },
    num1: {
      selector: [windowLocator,{selector: '1', locateStrategy: 'name'}],
      locateStrategy: 'recursion'
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
      selector: '//*[@Name="6"]',
      locateStrategy: 'xpath'
    },
    num7: {
      selector: [windowLocator, buttonLocator(7)],
      locateStrategy: 'recursion'
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