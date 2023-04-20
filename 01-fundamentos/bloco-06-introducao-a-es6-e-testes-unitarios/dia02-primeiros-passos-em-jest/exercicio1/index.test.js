const myRemove = require('./index.js')

describe('Testes da função `myRemove`', () => {
    test('Testando retorno com parametro `myRemove([1, 2, 3, 4], 3)`', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
    test('Testando retorno com parametro `myRemove([1, 2, 3, 4], 3)`', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})