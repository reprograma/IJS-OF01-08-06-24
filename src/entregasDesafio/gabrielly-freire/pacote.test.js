const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular o pacote correto para cada projeto', () => {
    test('deve retornar um pacote básico caso o número total de horas seja até 50', () => {
        //setup
        const totalDeHorasPorProjeto = 49;
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        //verificação
        expect(resultado).toEqual('pacote_basico');
    });

    test('deve retornar o pacote básico caso o número de horas seja exatamente 50', () => {
        //setup
        const totalDeHorasPorProjeto = 50;
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        //verificação
        expect(resultado).toEqual('pacote_basico');
    });

    //ponto de refatoração
    test('deve lançar uma exceção caso o número de horas seja negativo', () => {
        //setup
        const totalDeHorasPorProjeto = -1;
        //ação e verificação
        expect(() => calcularPacote(totalDeHorasPorProjeto)).toThrow('Número de horas inválido');
    });

    test('deve retornar o pacote intermediário caso o número total de horas seja exatamente 100', () => {
        //setup
        const totalDeHorasPorProjeto = 100;
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        //verificação
        expect(resultado).toEqual('pacote_intermediario');
    });

    test('deve retornar o pacote intermediário caso o número total de horas seja entre 51 e 100', () => {
        //setup
        const totalDeHorasPorProjeto = 75;
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        //verificação
        expect(resultado).toEqual('pacote_intermediario');
    });

    test('deve retornar o pacote premium caso o número total de horas seja exatamente 200', () => {
        //setup
        const totalDeHorasPorProjeto = 200;
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        //verificação
        expect(resultado).toEqual('pacote_premium');
    });

    test('deve retornar o pacote premium caso o número total de horas seja entre 101 e 200', () => {
        //setup
        const totalDeHorasPorProjeto = 150;
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        //verificação
        expect(resultado).toEqual('pacote_premium');
    });

    //ponto de refatoração
    test('deve lançar uma exceção caso o número total de horas exceda 200', () => {
        //setup
        const totalDeHorasPorProjeto = 250;
        //ação e verificação
        expect(() => calcularPacote(totalDeHorasPorProjeto)).toThrow('Número de horas excedeu as horas dos pacotes disponíveis');
    });
});
