const myFizzBuzz = require('./index')

describe('Testes para a função `myFizzBuzz`', () => {
    test('Testando com parametro `15`', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    test('Testando com parametro `12`', () => {
        expect(myFizzBuzz(12)).toBe('fizz')
    })
    test('Testando com parametro `5`', () => {
        expect(myFizzBuzz(5)).toBe('buzz')
    })
    test('Testando com parametro `11`', () => {
        expect(myFizzBuzz(11)).toBe(11)
    })
    test('Testando com parametro de tipo primitivo diferente de number', () => {
        expect(myFizzBuzz('Sova')).toBe(false)
    })
})