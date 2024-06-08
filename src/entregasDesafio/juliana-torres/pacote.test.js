const { calcularPacote } = require ('../../dominio/calculadora/Projeto/pacote')

describe('Calcular o pacote correto para cada projeto', ()=>{
     test('Retorne um pacote básico caso o número total de horas seja até 50h', ()=>{
        const totalDeHorasPorProjeto = 49
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        expect(resultado).toEqual('pacote_basico')
     })
    test('Retorna o pacote básico caso o número total de horas seja exatamente 50h', ()=>{
        const totalDeHorasPorProjeto = 50
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        expect(resultado).toEqual('pacote_basico')
    })
    test('Retorna o pacote intemediario caso o número total de horas seja exatamente 100h', ()=>{
        const totalDeHorasPorProjeto = 100
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        expect(resultado).toEqual('pacote_intermediario')
    })
})