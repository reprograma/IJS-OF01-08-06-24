const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calculo de horas totais de um projeto', ()=> {
    //abaixo abro unidade de teste
    test('Dado um arrays com funcionalidades desejadoas do projeto, deveśe retornar a soma de horas necessarias totais', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'ssr',
            'contrucao_1_pagina'
        ]
        const resultado = calcularHorasDeProjeto(funcionalidades);
        expect(resultado).toBe(56)
    });

    test('Deve-se somar corretamente funcionalidade repetidas', () => {
        const funcionalidades = [
            'setup',
            'setup',
            'formulario'
        ]
    const resultado = calcularHorasDeProjeto(funcionalidades)
    expect(resultado).toBe(32)
    expect(resultado).toBeGreaterThan(30)
    })
})