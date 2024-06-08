const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calculo do pacote por total de horas do projeto', ()=> {
    test('Retorne um pacote basico caso o numero total seja até 50', ()=>{
        // setup
        const totalDeHorasProjeto = 49
        // ação
        const resultado = calcularPacote(totalDeHorasProjeto)
        // verifição
        expect(resultado).toEqual('pacote_basico')
    });
    
    test('Retorna o pacote basico caso o numero total de horas seja exatamete 50', () =>{
        const horas = 50
        const resultadoEsperado = 'pacote_basico'
        expect(calcularPacote(horas)).toBe(resultadoEsperado)
    });

    test('Retorna pacote intermediario caso o número total de horas seja exatamente 100', () =>{
        const horas = 100
        const resultadoEsperado = 'pacote_intermediario'
        expect(calcularPacote(horas)).toBe(resultadoEsperado)
    });

    test('Retorne pacote_invalido quando o total de horas for null', () =>{
        const horas = null
        const resultadoEsperado = 'pacote_invalido'
        expect(calcularPacote(horas)).toEqual(resultadoEsperado)
    });

    test('Retorne pacote_invalido quando o total de horas for string', () =>{
        const horas = 'Hello'
        const resultadoEsperado = 'pacote_invalido'
        expect(calcularPacote(horas)).toEqual(resultadoEsperado)
    });
})
