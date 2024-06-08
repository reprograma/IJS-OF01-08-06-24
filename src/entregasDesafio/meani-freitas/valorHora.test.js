const {
  calcularValorPorHora,
} = require('../../dominio/calculadora/Hora/valorHora');

describe('Valor por hora', () => {
  test('Retornar o valor arredondado correto dado um valor recebido no mês', () => {
    const valorPorMes = 5000;
    const resultado = calcularValorPorHora(valorPorMes);
    expect(resultado).toEqual(29);
  });

  test('Retornar valor arredondado para cima em uma renda mensal decimal', () => {
    const valorPorMes = 1450.80;
    const resultado = calcularValorPorHora(valorPorMes);
    expect(resultado).toEqual(9);
  });

  test('Retornar 0 para renda mensal de 0', () => {
    const valorPorMes = 0;
    const resultado = calcularValorPorHora(valorPorMes);
    expect(resultado).toEqual(0);
  });

  //Este é um teste que quebra visto que a lógica não foi implementada no código original
  test('Retornar valor correto para renda mensal negativa', () => {
    const valorPorMes = -5000;
    const resultado = calcularValorPorHora(valorPorMes);
    expect(resultado).toEqual(-29);
  });

  test('Retornar NaN para entrada não numérica', () => {
    const valorPorMes = 'não numérico';
    const resultado = calcularValorPorHora(valorPorMes);
    expect(resultado).toBeNaN();
  });

  test('Retornar valor correto para renda mensal decimal grande', () => {
    const valorPorMes = 12345.67;
    const resultado = calcularValorPorHora(valorPorMes);
    expect(resultado).toEqual(71);
  });

  test('Retornar valor arredondado corretamente para renda mensal mínima não zero', () => {
    const valorPorMes = 0.01;
    const resultado = calcularValorPorHora(valorPorMes);
    expect(resultado).toEqual(1);
  });
});
