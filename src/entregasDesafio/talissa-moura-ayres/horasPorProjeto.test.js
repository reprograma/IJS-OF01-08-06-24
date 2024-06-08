const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto.js")

describe("Calculo das horas de um projeto", () => {
    test("Deve somar corretamente horas repetidas",
    () => {
    // setup 
    const funcionalidades = [
        "formulario",
        "formulario"
    ]
    // ação
    const resultado = calcularHorasDeProjeto(funcionalidades)
    // verificação
    expect(resultado).toEqual(32)
    })

    test("Deve somar corretamente horas do projeto",
    () => {
    // setup 
    const funcionalidades = [
        "setup",
        "formulario",
        "responsividade"
    ]
    // ação
    const resultado = calcularHorasDeProjeto(funcionalidades)
    // verificação
    expect(resultado).toEqual(40)
    })

    test("Deve retornar zero se as lista de funcionalidades for vazia", () => {
        // setup
        const funcionalidades = []
        // ação 
        const resultado = calcularHorasDeProjeto(funcionalidades)
        // verificação
        expect(resultado).toEqual(0)

    })
});