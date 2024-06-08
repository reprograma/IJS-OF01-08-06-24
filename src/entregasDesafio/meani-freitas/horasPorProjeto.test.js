const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto.js');
const { HORAS_POR_FUNCIONALIDADE } = require('../../dominio/calculadora/constantes/constantes.js');

describe('Cálculo de horas totais de um projeto', () => {
  test('Dado um array de funcionalidades, deve-se retornar a soma de horas necessárias totais', () => {
    const funcionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'ssr',
      'construcao_1_pagina'
    ];
    const resultado = calcularHorasDeProjeto(funcionalidades);
    expect(resultado).toBe(56);
  });

  test('Somar corretamente funcionalidades repetidas', () => {
    const funcionalidades = [
      'formulario',
      'formulario',
      'formulario',
      'formulario'
    ];
    const resultado = calcularHorasDeProjeto(funcionalidades);
    expect(resultado).toBe(64);
  });

  test('Retornar 0 para uma lista vazia de funcionalidades', () => {
    const listaDeFuncionalidades = [];
    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);
    expect(resultado).toBe(0);
  });

  test('Retornar horas corretas para uma única funcionalidade', () => {
    const listaDeFuncionalidades = ['integracao_api_propria'];
    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);
    expect(resultado).toBe(HORAS_POR_FUNCIONALIDADE['integracao_api_propria']);
  });

  test('Retornar a soma correta das horas para múltiplas funcionalidades', () => {
    const listaDeFuncionalidades = ['integracao_mailchimp', 'construcao_1_pagina'];
    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);
    const esperado = HORAS_POR_FUNCIONALIDADE['integracao_mailchimp'] + HORAS_POR_FUNCIONALIDADE['construcao_1_pagina'];
    expect(resultado).toBe(esperado);
  });
  
  //Este é um teste que quebra visto que a lógica não foi implementada no código original
  test('Retornar erro para funcionalidade não existente', () => {
    const listaDeFuncionalidades = ['funcionalidadeInexistente'];
    expect(() => calcularHorasDeProjeto(listaDeFuncionalidades)).toThrow();
  });
  
  test('Retornar um número de horas dada uma funcionalidade', () => {
    const listaDeFuncionalidades = ['ssr'];
    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);
    expect(resultado).not.toBeNaN();
  });
  
})