const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Valor por hora', () => {
    test('retornar o valor aredondado correto dado um valor recebido no mês', () => {
        //setup
        const valorPorMes = 5000
        //ACAO
        const resultado = calcularValorPorHora(valorPorMes)
        //verificação
        expect(resultado).toEqual(29)
    });

    test('retornar valor arredondado para cima em uma renda mensal decimal', () => {
        //setup
        const valorPorMes = 1450.80
        //ACAO
        const resultado = calcularValorPorHora(valorPorMes)
        //verificação
        expect(resultado).toEqual(9)

    }
    )

    test('retornar zero caso valor seja negativo', () => {
        //setup
        const valorPorMes = 0
        //ACAO
        const resultado = calcularValorPorHora(valorPorMes)
        //verificação
        expect(resultado).toEqual(0)

    }
    )
}
)


