const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular o pacote correto para cada projeto', () => {
   test('Retorne um pacote basico caso o numero total de horas seja ate 50h', () => {
      //setup

      const totalDeHorasPorProjeto = 49

      //acao 

      const resultado = calcularPacote(totalDeHorasPorProjeto)

      // verificacao

      expect(resultado).toEqual('pacote_basico')
   })
   test('Retorne o pacote basico caso o numero total de horas seja exatamente 50h', () => {

      //setup

      const totalDeHorasPorProjeto = 50

      //acao 

      const resultado = calcularPacote(totalDeHorasPorProjeto)

      // verificacao

      expect(resultado).toEqual('pacote_basico')
   })


   test('Retorna o pacote intermediario caso o numero total de horas seja exatamente 100h', () => {
      //setup

      const totalDeHorasPorProjeto = 100

      //acao 

      const resultado = calcularPacote(totalDeHorasPorProjeto)

      // verificacao

      expect(resultado).toEqual('pacote_intermediario')
   }
   )

   test('Retorna o pacote intermediario caso o numero total de horas seja ate 200h', () => {
      //setup

      const totalDeHorasPorProjeto = 199

      //acao 

      const resultado = calcularPacote(totalDeHorasPorProjeto)

      // verificacao

      expect(resultado).toEqual('pacote_premium')
   }
   )
})