const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Cálculo de horas totais de um projeto',()=>{
    test('Dado um array com funcionalidades desejadas do projeto deve-se retornar a soma de horas necessárias totais',
        ()=>{
        //setup
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'ssr',
            'construcao_1_pagina'
        ]

        //ação
        const resultado = calcularHorasDeProjeto(funcionalidades)

        //verificação
        expect(resultado).toBe(56)
    })

    test('Deve somar corretamente funcionalidades repetidas', ()=>{
        //setup
        const funcionalidades = [
            'setup',
            'setup',
            'responsividade',
            'ssr'
        ]

        //ação
        const resultado = calcularHorasDeProjeto(funcionalidades)

        //verificação
        expect(resultado).toBe(40)
    })

    test('Deve lançar um erro caso o array contenha funcionalidade inexistente', ()=>{
        //setup
        const funcionalidades = [
            'setup',
            'inexistente',
            'responsividade',
            'ssr'
        ]

        //verificação
        expect(()=>{calcularHorasDeProjeto(funcionalidades)}).toThrow()
    })

    test('Deve lançar um erro caso não tenha funcionalidade ', ()=>{
        //setup
        const funcionalidades = []

        //verificação
        expect(()=>{calcularHorasDeProjeto(funcionalidades)}).toThrow()
    })
})