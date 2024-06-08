const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe('Valor por hora', () => {
  test('Retornar o valor arredondado correto dado um valor recebido no mês', () => { 
    //setup 
    const valorPorMes = 5000;

    //action
    const resultado = calcularValorPorHora(valorPorMes)

    //verification
    expect(resultado).toEqual(29)
  })

  test('Retornar o valor arredondado para cima em uma renda decimal', () => { 
    //setup 
    const valorPorMes = 1450.80;

    //action
    const resultado = calcularValorPorHora(valorPorMes)

    //verification
    expect(resultado).toEqual(9)
  })

  test('Retornar 0 se a renda mensal for 0.', () => { 
    //setup 
    const valorPorMes = 0;

    //action
    const resultado = calcularValorPorHora(valorPorMes)

    //verification
    expect(resultado).toBe(0)
  })
})
