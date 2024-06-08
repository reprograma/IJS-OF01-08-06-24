const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

// Funções de simulação - .mock é uma propriedade onde os dados sobre como a função a qual foi chamada são mantidos.
jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor total do projeto', ()=> {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    test('Retornar valor total de um projeto dado as funcionalidades e valor hora da pessoa desenvolvedora', ()=> {
        // setup
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'construcao_1_pagina',
            'ssr'
        ]

        const valorHora = 70

        // ação
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

        // verificação
        expect(resultado).toEqual(4312)
    });

    test('Retornar o valor total de um projeto dado as funcionalidades', ()=>{
        //setup
        const funcionalidades = [
            'integracao_mailchimp',
            'otimizacao_seo'
        ]

        const valorProjeto = 20

        //ação 
        const resultado = calcularValorTotalProjeto(funcionalidades, valorProjeto)

        //verificação
        expect(resultado).toEqual(700)
    })
})

