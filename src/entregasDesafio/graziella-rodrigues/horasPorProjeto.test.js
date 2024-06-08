const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('cálculo de horas totais de um projeto', ()=>{
    test('Dado um array com funcionalidades desejadas do projeto, deve-se retornar a soma de horas necessárias totais', ()=>{
        //setup
        const funcionalidades = [
            'setup',
            'formulario',
            'funcionalidade',
            'ssr',
            'construcao_1_pagina'
        ]
        // acao
        const resultado = calcularHorasDeProjeto(funcionalidades)

        // verificação
        expect(resultado).toEqual(56)
    });

    test('Esse teste deve somar corretamente funcionalidades repetidas', ()=>{
        // setup
        const funcionalidades = [
            'setup',
            'setup',
            'formulario'
        ]

        // ação
        const resultado = calcularHorasDeProjeto(funcionalidades)

        // verificação
        expect(resultado).toBe(32)
        expect(resultado).toBeGreaterThan(30)
    })
})