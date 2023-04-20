const { encode, decode, mapString } = require('./index');

describe('Testando as funções `encode` e `decode`', () => {
    test('Testando se são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    })
    test('Testando a função `encode`', () => {
        expect(encode('KillJoy é melhor que Sage')).toEqual('K3llJ4y é m2lh4r q52 S1g2');
        expect(encode('aeiou')).toEqual('12345')
        expect(encode('KillJoy é melhor que Sage').length).toEqual(25)
    })
    test('Testando a função `decode`', () => {
        expect(decode('KillJoy fez 32 kills neste mapa')).toEqual('KillJoy fez ie kills neste mapa');
        expect(decode('12345')).toEqual('aeiou')
        expect((decode('KillJoy fez 32 kills')).length).toEqual(20)
    })
})