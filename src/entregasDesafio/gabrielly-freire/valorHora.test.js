const { calcularValorPorHora } = require( '../../dominio/calculadora/Hora/valorHora' )

describe('Valor por hora', () => {
    test('deve retornar o valor arredondado correto dado um valor recebido no mês', () => {
        // setup
        const valorPorMes = 5000;
        // ação
        const resultado = calcularValorPorHora(valorPorMes);
        //verificação
        expect(resultado).toEqual(29);
    });

    test('deve retornar o valor arredondado para cima de uma renda mensal decimal', () => {
        // setup
        const valorPorMes = 1450.80;
        // ação
        const resultado = calcularValorPorHora(valorPorMes);
        // verificação
        expect(resultado).toEqual(9)
    });

    test('deve retornar 0 quando a renda mensal é 0', () => {
        //setup
        const valorPorMes = 0;
        //ação
        const resultado = calcularValorPorHora(valorPorMes);
        //verificação
        expect(resultado).toBe(0);
    });

    // ponto de refatoração
    test('deve lançar uma exceção quando a renda mensal é negativa', () => {
        //setup
        const valorPorMes = -500;
        //ação e verificação
        expect(() => calcularValorPorHora(valorPorMes)).toThrow('Renda mensal não pode ser negativa');
    });

    test('deve retornar valor por hora correto para uma renda mensal muito alta', () => {
        //setup
        const valorPorMes = 1000000;
        //ação
        const resultado = calcularValorPorHora(valorPorMes);
        //verificação
        expect(resultado).toBe(5682); 
    });

    test('deve retornar valor por hora correto para uma renda mensal muito baixa', () => {
        //setup
        const valorPorMes = 1;
        //ação
        const resultado = calcularValorPorHora(valorPorMes);
        //verificação
        expect(resultado).toBe(1); 
    });
    
});