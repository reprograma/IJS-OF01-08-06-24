const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcula o pacote correto para cada projeto', () => {
  test('Retorne um pacote básico caso o número total de horas seja até 50h', () => {
    //setup
    const totalDeHorasPorProjeto = 49;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    //verificação
    expect(resultado).toEqual('pacote_basico');
  });

  test('Retorna o pacote básico caso o número total de horas seja exatamente 50h', () => {
    //setup
    const totalDeHorasPorProjeto = 50;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    //verificação
    expect(resultado).toEqual('pacote_basico');
  });


  //---------------------------- DESAFIO ----------------------------------------
  test('Retorna pacote_intermediario caso o numero total de horas seja exatamente 100', () => {
    //setup
    const totalDeHorasPorProjeto = 100;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    //verificação
    expect(resultado).toEqual('pacote_intermediario');
  });

  test('Retorna pacote diferente de pacote_intermediario caso o numero total de horas seja 100', () => {
    //setup
    const totalDeHorasPorProjeto = 100;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    //verificação
    expect(resultado).not.toBe('pacote_intermediario');
  });

  test('Deve retornar erro se o parametro passado for null', () => {
    //setup
    const totalDeHorasPorProjeto = null;

    //verificação
    expect(() => calcularPacote(totalDeHorasPorProjeto)).toThrow(Error);
  });

  test('Deve retornar erro caso o numero total de horas seja maior que 200', () => {
    //setup
    const totalDeHorasPorProjeto = 201;

    //verificação
    expect(() => calcularPacote(totalDeHorasPorProjeto)).toThrow(Error);
  });

  test('Valores abaixo de 100 não devem retornar pacote_intermediario', () => {
    //setup
    const totalDeHorasPorProjeto = 99;

    //ação
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    //verificação
    expect(resultado).not.toMatch(/intermediario/);
  });
})