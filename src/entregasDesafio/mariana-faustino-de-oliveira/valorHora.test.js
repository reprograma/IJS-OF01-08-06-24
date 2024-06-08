const {calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora')

describe('Valor por hora', ()=>{
    test('retornar o valor arredondado correto dado um valor recebido no mês',()=>{
        //setup
        const valorPorMes = 5000
        //acao
        const resultado = calcularValorPorHora(valorPorMes)
        //verificacao
        expect(resultado).toEqual(29)
    })

    test('retornar valor arredondado para cima em uma renda mensal decimal', ()=>{
        //setup
        const valorPorMes = 1450.80
        //acao
        const resultado = calcularValorPorHora(valorPorMes)
        //verificacao
        expect(resultado).toEqual(9)
    })

    test('retornar valor arredondado para cima em uma renda mensal com valor do tipo string', ()=>{
        //setup
        const valorPorMes = '5000'
        //acao
        const resultado = calcularValorPorHora(valorPorMes)
        //verificacao
        expect(resultado).toEqual(29)
    })

    test('retornar valor arredondado para cima em uma renda mensal com valor textual', ()=>{
        //setup
        const valorPorMes = 'cinco mil reais'
        //verificacao
        expect(() => {
            //ação
            calcularValorPorHora(valorPorMes);
          }).toThrow()
    })

    test('retornar valor arredondado para cima em uma renda mensal negativa', ()=>{
        //setup
        const valorPorMes = -5000
         //verificacao
         expect(() => {
             //ação
             calcularValorPorHora(valorPorMes);
           }).toThrow()
    })
    test('retornar valor arredondado para cima em uma renda mensal zerada', ()=>{
        //setup
        const valorPorMes = 0
         //verificacao
         expect(() => {
             //ação
             calcularValorPorHora(valorPorMes);
           }).toThrow()
    })
    
})