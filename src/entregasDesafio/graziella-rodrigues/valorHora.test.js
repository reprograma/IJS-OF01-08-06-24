const { calcularValorPorHora } = require( '../../dominio/calculadora/Hora/valorHora' ) 

describe ('Valor por hora', ()=> {
    test('retornar o valor arredondado correto dado um valor recebido no mês', ()=>{
        // setup
        const valorPorMes = 5000;
        // ação - o que a gente quer que aconteça?
        const resultado = calcularValorPorHora(valorPorMes)
        // verificação 
        expect(resultado).toEqual(29)
    });

test ('retornar valor arredondado para cima em uma renda mensal decimal', ()=>{
    // setup
    const valorPorMes = 1450.80
    // ação
    const resultado = calcularValorPorHora(valorPorMes)
    // verificação
    expect(resultado).toEqual(9)
})
} 
)