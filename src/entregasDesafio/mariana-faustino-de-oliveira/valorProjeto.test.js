const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')
jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('Valor total do projeto', ()=>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })

    test('Retornar valor total de um projeto dado as funcionalidades e valor hora da pessoa desenvolvedora',
        ()=>{
            //setup
            const funcionalidades = [
                'setup',
                'formulario',
                'responsividade',
                'construcao_1_pagina',
                'ssr'
            ]
            const valorHora = 70

            //ação
            const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

            //verificacao
            expect(resultado).toEqual(4312)
        }
    )

    test('Deve lancar excecao quando não passar funcionalidades',
        ()=>{
            //setup
            const funcionalidades = []
            const valorHora = 70
            //verificacao
            expect(()=> {
    calcularValorTotalProjeto(funcionalidades, valorHora)
            }).toThrow()
        }
    )

    test('Deve lancar excecao quando valor hora for negativo',
        ()=>{
            //setup
            const funcionalidades = ['setup']
            const valorHora = -70
            //verificacao
            expect(()=> {
    calcularValorTotalProjeto(funcionalidades, valorHora)
            }).toThrow()
        }
    )

    test('Deve lancar excecao quando valor hora for zero',
        ()=>{
            //setup
            const funcionalidades = ['setup']
            const valorHora = 0
            //verificacao
            expect(()=> {
    calcularValorTotalProjeto(funcionalidades, valorHora)
            }).toThrow()
        }
    )
})