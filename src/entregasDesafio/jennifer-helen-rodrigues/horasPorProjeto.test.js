const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe.only('Calculo de horas totais de um projeto', () => {
  test('Dado um array com funcionallidade desejadas do projeto, deve-se retornar a soma de horas necessarias totais', () => {
    // setup
    const funcionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'ssr',
      'construcao_1_pagina'
    ];

    // ação
    const resultado = calcularHorasDeProjeto(funcionalidades);

    //verificação
    expect(resultado).toBe(56);
  })

  test('Deve somar corretamente funcionalidades repetidas', () => {
    // setup
    const funcionalidades = [
      'setup',
      'setup',
      'responsividade',
      'ssr'
    ];

    // ação
    const resultado = calcularHorasDeProjeto(funcionalidades);

    //verificação
    expect(resultado).toBe(40);
  })


  test('Deve retornar só o valor de horas da própria funcionalidade caso só haja 1', () => {
    // setup
    const funcionalidades = [
      'setup'
    ];

    // ação
    const resultado = calcularHorasDeProjeto(funcionalidades);

    //verificação
    expect(resultado).toBe(8);
  })

  test('Deve retornar erro caso uma funcionalidade passada não exista na lista de funcionalidades', () => {
    // setup
    const funcionalidades = [
      'setup',
      'integracao_com_whatsapp'
    ];

    // ação
    const resultado = calcularHorasDeProjeto(funcionalidades);

    //verificação
    expect(resultado).toThrow();
  })
})