const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Calculo de horas totais de um projeto', () => {
  test('Dado um array com funcionalidades desejadas do projeto, deve-se retornar a soma de horas totais', () => {
    //setup
    const funcionalidades = ['setup', 'formulario', 'responsividade', 'ssr', 'construcao_1_pagina'];

    //ação
    const resultado = calcularHorasDeProjeto(funcionalidades);

    //verificação
    expect(resultado).toBe(56);
  });

  test('Deve somar corretamente funcionalidades repetidas', () => {
    //setup
    const funcionalidades = ['setup', 'setup', 'formulario', 'ssr'];

    //ação
    const resultado = calcularHorasDeProjeto(funcionalidades);

    //verificação
    expect(resultado).toBe(40);
  });


  //---------------------------- DESAFIO ----------------------------------------
  test('Deve retornar um resultado correto mesmo com um array de 1 unico elemento', () => {
    //setup
    const funcionalidade = ['setup'];

    //ação
    const resultado = calcularHorasDeProjeto(funcionalidade);

    //verificação
    expect(resultado).toBe(8);
  });

  test('Um array vazio deve retornar o numero 0', () => {
    //setup
    const funcionalidade = [];

    //ação
    const resultado = calcularHorasDeProjeto(funcionalidade);

    //verificação
    expect(resultado).toEqual(0);
  });


  test('Deve retornar um erro de tipagem se o parametro passado não for um array', () => {
    //setup
    const funcionalidade = 'setup';

    //verificação
    expect(() => calcularHorasDeProjeto(funcionalidade)).toThrow(TypeError);
  });

  test('Resultado deve ser maior que 0 se array conter ao menos 1 elemento', () => {
    //setup
    const funcionalidade = ['formulario'];

    //ação
    const resultado = calcularHorasDeProjeto(funcionalidade);

    //verificação
    expect(resultado).toBeGreaterThan(0);
  });

})