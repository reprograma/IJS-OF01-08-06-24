const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular o pacote correto para cada projeto', () => {
  test('Retorna um pacote básico caso o número total de horas seja inferior a 50h.', () => {
    //setup 
    const totalDeHoras = 46

    //action
    const resultado = calcularPacote(totalDeHoras)

    //verification
    expect(resultado).toBe('pacote_basico')
  })

  test('Retorna o pacote básico caso o número total de horas seja exatamente 50.', () => {
    //setup 
    const totalDeHoras = 50

    //action
    const resultado = calcularPacote(totalDeHoras)

    //verification
    expect(resultado).toBe('pacote_basico')
  })

  test('Retorna um pacote intermediário caso o número total de horas seja superior a 51h e inferior a 100h.', () => {
    //setup 
    const totalDeHoras = 88

    //action
    const resultado = calcularPacote(totalDeHoras)

    //verification
    expect(resultado).toBe('pacote_intermediario')
  })

  test('Retorna o pacote itermediário caso o número total de horas seja exatamente 100h.', () => {
    //setup 
    const totalDeHoras = 100

    //action
    const resultado = calcularPacote(totalDeHoras)

    //verification
    expect(resultado).toBe('pacote_intermediario')
  })

  test('Retorna um pacote premium caso o número total de horas seja superior a 101h e inferior a 200h.', () => {
    //setup 
    const totalDeHoras = 165

    //action
    const resultado = calcularPacote(totalDeHoras)

    //verification
    expect(resultado).toBe('pacote_premium')
  })

  test('Retorna o pacote premium caso o número total de horas seja exatamente 200h.', () => {
    //setup 
    const totalDeHoras = 200

    //action
    const resultado = calcularPacote(totalDeHoras)

    //verification
    expect(resultado).toBe('pacote_premium')
  })
})