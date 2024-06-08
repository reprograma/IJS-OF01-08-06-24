const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calculo de horas totais de um projeto', () => {
    test('Dado um array com funcionalidades desejadas do projeto, deve-se retornar a soma de horas necessarias totais', () => {
        //setup
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'construcao_1_pagina',
            'ssr'

        ]
        //acao
        const resultado = calcularHorasDeProjeto(funcionalidades)

        //verificacao

        expect(resultado).toBe(56)
    });
    test(' Deve somar corretamente funcionalidades reptidas', () => {
        //setup
        const funcionalidades = [

            'setup',
            'setup',
            'formulario',


        ]
        //acao
        const resultado = calcularHorasDeProjeto(funcionalidades)
        //verificacao
        expect(resultado).toBe(32)
        expect(resultado).toBeGreaterThan(30)
    })

    test(' Verifica se o valor corresponde realmente a funcionalidade', () => {
        //setup
        const funcionalidades = [
            'setup'
        ]
        //acao
        const resultado = calcularHorasDeProjeto(funcionalidades)
        //verificacao

        expect(resultado).toEqual(8)


    })

}
)