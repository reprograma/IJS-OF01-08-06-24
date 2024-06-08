const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor total do projeto', () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue('pacote_basico');
  })

  test('Retornar valor total de um projeto dado as funcionalidades e valor horas da pessoa desenvolvedora', () => {
    // setup
    const funcionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'construcao_1_pagina',
      'ssr'
    ];

    const valorHora = 70;

    // ação
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    // verificação
    expect(resultado).toEqual(4312);
  })

  test('Retornar erro caso o valor hora passado seja por extenso e não um número', () => {
    // setup
    const funcionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'construcao_1_pagina',
      'ssr'
    ];

    const valorHora = 'Setenta reais';

    // ação
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    // verificação
    expect(resultado).toThrow();
  })

  test('Retornar erro caso as funcionalidades passadas não estejam na lista de horas por funcionalidades', () => {
    // setup
    const funcionalidades = [
      'setup',
      'aplicativo_android'
    ];

    const valorHora = 70;

    // ação
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    // verificação
    expect(resultado).toThrow();
  })
})