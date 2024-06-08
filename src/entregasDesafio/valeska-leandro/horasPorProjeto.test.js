const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Cálculo de horas totais de um projeto', () => {
  test('Dado um array com funcionalidades do projeto, deve-se retornar a soma de horas necessárias totais', () => { 
    //setup
    const funcionalidades = ['setup', 'formulario', 'responsividade', 'ssr', 'construcao_1_pagina']

    //action
    const resultado = calcularHorasDeProjeto(funcionalidades)

    //verification
    expect(resultado).toBe(56)
  })

  test('Retornar a soma correta de funcionalidade repetidas', () => { 
    //setup
    const funcionalidades = ['setup', 'setup', 'setup', 'ssr']

    //action
    const resultado = calcularHorasDeProjeto(funcionalidades)

    //verification
    expect(resultado).toBe(32)
    expect(resultado).toBeGreaterThan(30)
  })

  test('Retornar 0 horas caso não receba nenhuma funcionalidade', () => {
    //setup
    const funcionalidades = []

    //action
    const resultado = calcularHorasDeProjeto(funcionalidades)

    //verification
    expect(resultado).toBe(0)
  })

  test('Retornar NaN caso receba um funcionalidade não listada', () => {
    //setup
    const funcionalidades = ['inválida', 'setup']

    //action
    const resultado = calcularHorasDeProjeto(funcionalidades)

    //verification
    expect(resultado).toBeNaN()
    
  })
})