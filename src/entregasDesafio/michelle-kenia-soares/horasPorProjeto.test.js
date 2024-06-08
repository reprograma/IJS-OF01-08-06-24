const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Cálculo de horas totais de um projeto', ()=> {
    test('Dado um array com funcionalidade desejadas do projeto, deve-se retornar a soma de horas necessarias totais', ()=> {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'ssr', 
            'construcao_1_pagina'
        ]

        const resultado = calcularHorasDeProjeto(funcionalidades)

        expect(resultado).toBe(56)
    })

    test('Esse teste deve somar corretamente funcionalidades repetidas', ()=> {
        const funcionalidades = [
            'setup',
            'setup',
            'formulario'
        ]

        const resultado = calcularHorasDeProjeto(funcionalidades)

        expect(resultado).toBe(32)
        expect(resultado).toBeGreaterThan(30)
    })

    test('Calcular o valor total de horas considerando todas as funcionalidades disponíveis', ()=> {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'
        ]

        const resultado = calcularHorasDeProjeto(funcionalidades)

        expect(resultado).toBe(88)
    })

})