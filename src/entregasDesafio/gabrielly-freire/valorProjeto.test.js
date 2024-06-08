const { calcularValorTotalProjeto } = require ('../../dominio/calculadora/Projeto/valorProjeto.js')
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor total do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    });

    test('deve retornar o valor total de um projeto dado as funcionadades e valor hora da pessoa desenvolvedora', () => {
        //setup
        const funcionadades = [
            'setup',
            'formulario',
            'responsividade',
            'construcao_1_pagina',
            'ssr'
        ];

        const valorHora = 70;
        //ação
        const resultado = calcularValorTotalProjeto(funcionadades, valorHora);
        //verificação
        expect(resultado).toEqual(4312);
    });

    test('deve retornar o valor total de um projeto dado as funcionadades repetidas e valor hora da pessoa desenvolvedora', () => {
        //setup
        const funcionadades = [
            'formulario',
            'formulario',
            'construcao_1_pagina',
            'ssr'
        ];

        const valorHora = 50;
        //ação
        const resultado = calcularValorTotalProjeto(funcionadades, valorHora);
        //verificação
        expect(resultado).toEqual(2640);
    });

    test('deve retornar o valor total 0 dado um projeto sem funcionadades e valor hora da pessoa desenvolvedora', () => {
        //setup
        const funcionadades = [];

        const valorHora = 50;
        //ação
        const resultado = calcularValorTotalProjeto(funcionadades, valorHora);
        //verificação
        expect(resultado).toEqual(0);
    });

    test('deve lançar um erro quando a funcionalidade não existe', () => {
        //setup
        const funcionalidades = ['landing_page'];
        
        const valorHora = 50;
        //ação e verificação
        expect(() => calcularHorasDeProjeto(funcionalidades)).toThrow("Essa funcionalidade não existe");

    });
});