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
})