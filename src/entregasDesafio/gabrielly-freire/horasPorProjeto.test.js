const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calculo de horas totais de um projeto', () => {
    test('dado um array com funcionalidades desejadas do projeto, deve-se retornar a soma de horas necessárias totais', () => {
        //setup
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'ssr',
            'construcao_1_pagina'
        ];
        //ação
        const resultado = calcularHorasDeProjeto(funcionalidades);
        //verificação
        expect(resultado).toBe(56);
    });

    test('deve somar corretamente funcionalidades repetidas', () => {
        //setup
        const funcionalidades = [
            'formulario',
            'formulario',
            'formulario',
        ];

        //ação
        const resultado = calcularHorasDeProjeto(funcionalidades);
        //verificação
        expect(resultado).toBe(48);
    });

    test('deve retornar 0 quando o projeto não tem funcionalidades', () => {
        //setup
        const funcionalidades = [];
        
        //ação
        const resultado = calcularHorasDeProjeto(funcionalidades);
        
        //verificação
        expect(resultado).toEqual(0);
    });

    //ponto de refatoração
    test('deve lançar um erro quando a funcionalidade não existe', () => {
        //setup
        const funcionalidades = ['landing_page'];
        
        //ação e verificação
        expect(() => calcularHorasDeProjeto(funcionalidades)).toThrow("Essa funcionalidade não existe");
    });
});
