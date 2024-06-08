const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular o pacote correto para cada projeto', () => {
    test('Retorne um pacote básico com o número total de horas sejam até 50h', () => {
    const totalDeHorasPorProjeto = 49

    const resultado = calcularPacote(totalDeHorasPorProjeto)

    expect(resultado).toEqual('pacote_basico')
    })

    test('Retorna o pacote básico caso o número total de horas seja exatamente 58h', () => {
    const totalDeHorasPorProjeto = 100

    const resultado = calcularPacote(totalDeHorasPorProjeto)

    expect(resultado).toEqual('pacote_intermediario')
    })
}
)