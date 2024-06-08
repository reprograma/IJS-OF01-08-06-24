const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote")


jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe(
    "Valor total do projeto", () => {
        beforeEach(
            () => {pacote.calcularPacote.mockReturnValue("pacote_basico")}
        )
        test("Retornar valor total de um projeto dado as funcionalidades e horas trabalhadas da pessoa desenvolvedora",()=>{

            // setup
            const funcionalidades = [
                "setup",
                "formulario",
                "responsividade",
                "construcao_1_pagina",
                "ssr"
            ]
            const valorHora = 70

            // ação
            const resultado = calcularValorTotalProjeto(funcionalidades,valorHora)

            // resultado
            expect(resultado).toEqual(4312)

        })

        test("Retornar 0 caso o valorHora seja 0", () => {
            // setup
            const funcionalidades = [
                "setup",
                "formulario",
                "responsividade",
                "construcao_1_pagina",
                "ssr"
            ]
            const valorHora = 0

            // ação
            const resultado = calcularValorTotalProjeto(funcionalidades,valorHora)

            // verificação
            expect(resultado).toEqual(0)
        })
    } 
)