const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calculo de horas totais de um projeto', ()=> {
    test('Dado um array com funcionalidades desejadas do projeto, deve-se retornar a soma de horas necessárias totais', ()=> {
        // setup
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'ssr',
            'construcao_1_pagina'
        ]
        // ação
        const resultado = calcularHorasDeProjeto(funcionalidades)
        // verificação
        expect(resultado).toBe(56)
    });

    test('Deve somar corretamente funcionalidades repetidas', ()=> {
        //setup
        const funcionalidades = [
            'setup',
            'setup',
            'formulario',
        ]
        //ação
        const resultado = calcularHorasDeProjeto(funcionalidades)
        //verificação
        expect(resultado).toBe(32)
        expect(resultado).toBeGreaterThan(30)
    });

    test('Deve somar corretamente as horas das funcionalidades escolhidas', ()=>{
        //setup
        const funcionalidades = [
            'ssr',
            'integracao_api_propria'
        ]
        //ação
        const resultado = calcularHorasDeProjeto(funcionalidades)
        //verificação
        expect(resultado).toEqual(24)
    })
})