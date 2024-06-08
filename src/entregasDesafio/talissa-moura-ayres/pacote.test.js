const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")


describe("Calcular o pacote correto para cada projeto",() => {
    test("Retorne um pacote básico caso o numero total de horas seja ate 50 horas", () => {
        // setup 
        const totalDeHorasPorProjeto = 49
        // ação
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        // verificação 
        expect(resultado).toEqual("pacote_basico")
    })
    test("Retorne um pacote básico caso o numero total de horas seja igual a 50 horas", () => {
        // setup 
        const totalDeHorasPorProjeto = 50
        // ação
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        // verificação 
        expect(resultado).toEqual("pacote_basico")
    })
    test("Retorne um pacote intermediario caso o numero total de horas seja ate 100 horas", () => {
        // setup 
        const totalDeHorasPorProjeto = 80
        // ação
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        // verificação 
        expect(resultado).toEqual("pacote_intermediario")
    })
    test("Retorne um pacote premium caso o numero total de horas seja de até 200 horas", () => {
        // setup 
        const totalDeHorasPorProjeto = 180
        // ação 
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        // verificação 
        expect(resultado).toEqual("pacote_premium")
    })
    test("Retorne null se a quantidade de horas do projeto for maior que a máxima permitida", () => {
        // setup 
        const totalDeHorasPorProjeto = 240 
        // ação 
        const resultado = calcularPacote(totalDeHorasPorProjeto)
        // verificação 
        expect(resultado).toEqual(null)
    })
});