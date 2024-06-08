const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('Valor total do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    });

    test('Retornar valor total de um projeto dado as funcionalidades e valor hora das pessoas', () => {
        // Setup
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina', 'ssr'];
        const valorHora = 70;
        // Ação
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
        // Verificação
        expect(resultado).toEqual(4312);
    });

    test('Retornar 0 dado as funcionalidades correta e valor hora negativo das pessoas', () => {
        // Setup
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina', 'ssr'];
        const valorHora = -70;
        // Ação
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
        // Verificação
        expect(resultado).toEqual(0);
    });

    test('Retornar 0 dado as funcionalidades invalida e valor hora correto das pessoas', () => {
        // Setup
        const funcionalidades = ['funcionalidade_invalida', 'formulario', 'responsividade', 'construcao_1_pagina', 'ssr'];
        const valorHora = 70;
        // Ação
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
        // Verificação
        expect(resultado).toEqual(0);
    });
})
