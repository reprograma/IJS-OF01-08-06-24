const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe ('Calculo de horas totais de um projeto', ()=>{
    test('Dado um array com funcionalidades desejadas do projeto, deve-se retornar a soma de horas necessárias totais', ()=>{
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
    });

    test('Deve somar corretamente funcionalidade repetidas', ()=> {  
    const funcionalidades = [
        'setup',
        'setup',
        'formulario'
    ] 
    //ação
    const resultado = calcularHorasDeProjeto(funcionalidades)
    //verificação
    expect(resultado).not.toBe(5)
    expect(resultado).toBeGreaterThan(30)
    })

    test('Dado um array com funcionalidades desejadas do projeto, deve-se retornar um valor maior que 50h', ()=>{
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
        expect(resultado).toBeGreaterThan(50)
        });
})