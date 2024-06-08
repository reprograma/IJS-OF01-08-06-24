const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular o pacote correto para cada projeto', () => {
    test('Retorne um pacote básico caso o número total de horas seja até 50h', ()=> {
        //setup
        const totalDeHorasPorProjeto = 49
        //ação 
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(resultado).toEqual('pacote_basico') 
    })

    test('retorna o pacote básico caso o número total seja exatamente 50h', () => {
        //setup
        const totalDeHorasPorProjeto = 50
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(resultado).toEqual('pacote_basico')
    })

    test('Retorna pacote intermediario caso o total de horas seja exatamente 100', ()=> {
        //setup
        const totalDeHorasPorProjeto = 100
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(resultado).toEqual('pacote_intermediario')
    })

    test('Retorna pacote premium caso o total de horas seja exatamente 200', ()=> {
        //setup
        const totalDeHorasPorProjeto = 200
        //ação
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(resultado).toEqual('pacote_premium')
    })

})