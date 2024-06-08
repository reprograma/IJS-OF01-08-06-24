const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular o pacote correto para cada projeto', ()=>{
    test('Retorne um pacote básico caso o número total de horas seja até 50 horas', ()=>{
        //setup
        const totalDeHorasPorProjeto = 49
        //acao
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(resultado).toEqual('pacote_basico')
    })

    test('Retorna pacote básico caso o número total de horas seja exatamente 50', ()=>{
        //setup
        const totalDeHorasPorProjeto = 50
        //acao
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(resultado).toEqual('pacote_basico')
    })

    test('Retorna pacote intermediario caso o número total de horas seja até 100', ()=>{
        //setup
        const totalDeHorasPorProjeto = 99
        //acao
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(resultado).toEqual('pacote_intermediario')
    })

    test('Retorna pacote intermediario caso o número total de horas seja exatamente 100', ()=>{
        //setup
        const totalDeHorasPorProjeto = 100
        //acao
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(resultado).toEqual('pacote_intermediario')
    })

    test('Retorna pacote premium caso o número total de horas seja exatamente 200', ()=>{
        //setup
        const totalDeHorasPorProjeto = 200
        //acao
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(resultado).toEqual('pacote_premium')
    })

    test('Retorna pacote premium caso o número total de horas seja até 200', ()=>{
        //setup
        const totalDeHorasPorProjeto = 199
        //acao
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(resultado).toEqual('pacote_premium')
    })

})