const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');
const { HORAS_POR_FUNCIONALIDADE, TAXAS_CONTRATUAIS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes.js');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');

describe('Valor total do projeto', () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue('pacote_basico');
  });
  test('Retornar valor total de um projeto dadas as funcionalidades e valor da hora da pessoa desenvolvedora', () => {
    const funcionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'construcao_1_pagina',
      'ssr'
    ];
    const valorHora = 70;
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(resultado).toBe(4312);
  });

  test('Retornar 0 para lista de funcionalidades vazia', () => {
    const funcionalidades = [];
    const valorHora = 100;
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(resultado).toBe(0);
  });
  
  test('Retornar o valor correto para uma única funcionalidade', () => {
    const funcionalidades = ['otimizacao_seo'];
    const valorHora = 100;
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const totalDeHoras = HORAS_POR_FUNCIONALIDADE['otimizacao_seo'];
    const valorBase = totalDeHoras * valorHora;
    const pacoteCalc = pacote.calcularPacote(totalDeHoras);
    const valorEsperado = Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacoteCalc]);
    expect(resultado).toBe(valorEsperado);
  });

  test('Retornar o valor correto para múltiplas funcionalidades', () => {
    const funcionalidades = [
      'otimizacao_seo',
      'construcao_1_pagina',
      'integracao_mailchimp'
    ];
    const valorHora = 100;
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const totalDeHoras = HORAS_POR_FUNCIONALIDADE['otimizacao_seo'] + HORAS_POR_FUNCIONALIDADE['construcao_1_pagina'] + HORAS_POR_FUNCIONALIDADE['integracao_mailchimp'];
    const valorBase = totalDeHoras * valorHora;
    const pacoteCalc = pacote.calcularPacote(totalDeHoras);
    const valorEsperado = Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacoteCalc]);
    expect(resultado).toBe(valorEsperado);
  });

  test('Retornar 0 para uma quantidade de horas sendo 0h', () => {
    const funcionalidades = ['responsividade'];
    const valorHora = 0;
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(resultado).toBe(0);
  });

  test('Retornar o valor arredondado corretamente dada uma lista de funcionalidade e valor por hora da pessoa desenvolvedora', () => {
    const funcionalidades = ['setup', 'formulario', 'responsividade'];
    const valorHora = 100;
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const totalDeHoras = HORAS_POR_FUNCIONALIDADE['setup'] + HORAS_POR_FUNCIONALIDADE['formulario'] + HORAS_POR_FUNCIONALIDADE['responsividade'];
    const valorBase = totalDeHoras * valorHora;
    const pacoteCalc = pacote.calcularPacote(totalDeHoras);
    const valorEsperado = valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacoteCalc];
    expect(resultado).toBeCloseTo(valorEsperado, 0);
  });
  
  test('Retornar valor maior que zero para uma funcionalidade válida', () => {
    const funcionalidades = ['otimizacao_seo'];
    const valorHora = 100;
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(resultado).toBeGreaterThan(0);
  });

  test('Não retornar null ou undefined dada uma funcionalidade válida e o valor da hora da pessoa desenvolvedora', () => {
    const funcionalidades = ['construcao_1_pagina'];
    const valorHora = 100;
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(resultado).toBeDefined();
  });
});