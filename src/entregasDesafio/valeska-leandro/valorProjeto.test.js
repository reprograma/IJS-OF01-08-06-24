const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor total do projeto', () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue('pacote_basico')
  })

  test('Retornar valor total de um projeto dado as funcionalidades e o valor/hora da pessoa desenvolvedora', () => {
    //setup
    const funcionalidades = ['setup', 'formulario', 'responsividade', 'ssr', 'construcao_1_pagina']
    const valorHora = 70

    //action
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

    //verification
    expect(resultado).toEqual(4312)

  })  

  test('Retornar valor do projeto 0 caso a lista de funcionalidades esteja vazia.', () => {
    //setup
    const funcionalidades = []
    const valorHora = 70

    //action
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

    //verification
    expect(resultado).toEqual(0)

  })

  test('Retornar valor do projeto 0 caso a o valor da hora do desenvolvedor seja 0.', () => {
    //setup
    const funcionalidades = ['setup', 'formulario', 'responsividade', 'ssr', 'construcao_1_pagina']
    const valorHora = '0'

    //action
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

    //verification
    expect(resultado).toEqual(0)

  })

  test('Retornar NaN caso a o valor da hora do desenvolvedor não seja um número.', () => {
    //setup
    const funcionalidades = ['setup', 'formulario', 'responsividade', 'ssr', 'construcao_1_pagina']
    const valorHora = 'string inválida'

    //action
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

    //verification
    expect(resultado).toBeNaN()

  })
})