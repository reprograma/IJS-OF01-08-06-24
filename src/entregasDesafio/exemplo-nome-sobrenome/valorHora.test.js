const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe('Valor por hora', ()=>{
    test('restornar o valor arredondado correto dado um valor recibido no mês', ()=>{
        //setup
        const valorPorMes= 5000;
        //ação
        const resultado = calcularValorPorHora(valorPorMes)
        //verifição
        expect(resultado).toEqual(29)
    });
