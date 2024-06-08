const { calcularValorProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')

describe('Calculo do valor', () => {
    test('funcionalidade desejadas', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'ssr',
        ]
        const resultado = calcularValorProjeto(funcionalidades)
        expect(resultado).toEqual(150000)
    })
}
)