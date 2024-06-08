const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require ('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor total de projeto', ()=>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    test('Retornar valor total de um projeto dado as funcionalidades de horas da pessoa desenvolvedora', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'construcao_1_pagina',
            'ssr'
        ]

        const valorHora = 70

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(resultado).toEqual(4312)
    })
})