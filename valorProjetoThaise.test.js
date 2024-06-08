const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/valorProjeto.js')

describe('Valor total', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_premium')

    })
    test('retornar valor total conforme funcionalidades', () => {
        const funcionalidades = [
            'setup',
            'formulario',
        'otimizacao_seo',
        'construcao_1_pagina',
        'integracao_mailchimp',
        ]

        const valorHora = 100

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(resultado).toEqual(10000)
    })
})