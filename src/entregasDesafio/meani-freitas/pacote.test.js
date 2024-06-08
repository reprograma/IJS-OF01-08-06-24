const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular o pacote correto para cada projeto', () => {
  test('Retornar um pacote básico caso o número total de horas seja até 50h', () => {
    const totalDeHorasPorProjeto = 49;
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual('pacote_basico');
  });

  test('Retornar o pacote básico caso o número total de horas seja exatamente 50h', () => {
    const totalDeHorasPorProjeto = 50;
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual('pacote_basico');
  });

  test('Retornar o pacote intermediário caso o número total de horas seja exatamente 100', () => {
    const totalDeHorasPorProjeto = 100;
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual('pacote_intermediario');
  });

  test('Retornar o pacote premium caso o número total de horas seja exatamente 200', () => {
    const totalDeHorasPorProjeto = 200;
    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual('pacote_premium');
  });

  test('Retornar o pacote correto para o valor mínimo de horas', () => {
    const totalDeHoras = 10;
    const resultado = calcularPacote(totalDeHoras);
    expect(resultado).toBe('pacote_basico');
  });
  
  //Este é um teste que quebra visto que a lógica não foi implementada no código original
  test('Retornar erro para horas negativas', () => {
    const totalDeHoras = -5;
    expect(() => calcularPacote(totalDeHoras)).toThrow();
  });

  test('Retornar uma string dada uma quantidade de horas', () => {
    const totalDeHoras = 20;
    const resultado = calcularPacote(totalDeHoras);
    expect(resultado).toEqual(expect.any(String));
  });
  
  
});