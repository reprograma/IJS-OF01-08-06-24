const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')

const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor total do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    test('Retornar valor total de um projeto dado as funcionalidades e valor hpra da pessoa desenvolvedora', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'construcao_1_pagina',
            'ssr'
        ]
        const valorHora = 70 

        //acao
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

        //verificação
        expect(resultado).toEqual(4312)
    })

    test('Retornar valor total de um projeto personalizado com pacte premium e valor hora ', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'construcao_1_pagina',
            'ssr',
            'integracao_mailchimp',
            'otimizacao_seo'
        ]
        //acao
        const valorHora = 120

        pacote.calcularPacote.mockReturnValue('pacote_premium')
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)
        //verificacao
        expect(resultado).toBeGreaterThan(12000)
    });


    test('Retorna o valor total de um projeto com numero total ultrapassando a quantidade de horas máxima por pacote', () => {
        //acao
        const totalDeHorasPorProjeto = 220
        const valorHora = 150

        pacote.calcularPacote.mockReturnValue('pacote_premium')

        const resultado = calcularValorTotalProjeto(totalDeHorasPorProjeto, valorHora)
        //verificacao
        expect(resultado).toEqual(33000)
    });

})