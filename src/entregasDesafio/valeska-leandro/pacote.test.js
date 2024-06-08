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
})