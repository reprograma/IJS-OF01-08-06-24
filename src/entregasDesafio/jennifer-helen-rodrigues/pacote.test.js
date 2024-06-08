const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular o pacote correto para cada projeto', () => {
  test('Retorne um pacote básico caso o número total de horas seja até 50 horas', () => {
    //setup
    const totalDeHorasPorProjeto = 49;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(resultado).toEqual('pacote_basico')
  })

// retorna erro pois código está olhando se value > totalDeHorasPorProjeto, e deveria ser >= 
  test('Retorna o pacote básico caso o número total de horas seja exatamente 50', () => {
    //setup
    const totalDeHorasPorProjeto = 50;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(resultado).toEqual('pacote_basico')
  })

  // retorna erro pois código está olhando se value > totalDeHorasPorProjeto, e deveria ser >=
  test('Retorna pacote intermediário caso o numero total de horas seja exatamente 100', () => {
    //setup
    const totalDeHorasPorProjeto = 100;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(resultado).toEqual('pacote_intermediario')
  })

  test('Retorna pacote intermediário caso o numero total de horas seja acima de 50 e menor que 100', () => {
    //setup
    const totalDeHorasPorProjeto = 70;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(resultado).toEqual('pacote_intermediario')
  })

  // retorna erro pois código está olhando se value > totalDeHorasPorProjeto, e deveria ser >=
  test('Retorna pacote premium caso o numero total de horas seja exatamente 200', () => {
    //setup
    const totalDeHorasPorProjeto = 200;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(resultado).toEqual('pacote_premium')
  })
  
  test('Retorna pacote premium caso o numero total de horas seja acima de 100 e menor que 200', () => {
    //setup
    const totalDeHorasPorProjeto = 170;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(resultado).toEqual('pacote_premium')
  })

  test('Retorna erro caso o número de horas seja passado como uma string', () => {
    //ação
    const resultado = calcularPacote('170 horas')

    //verificação
    expect(resultado).toThrow();
  })

  test('Retorna erro caso o número passado seja acima do máximo de qualquer pacote', () => {
    //setup
    const totalDeHorasPorProjeto = 17000;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(resultado).toThrow();
  })
})