const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE) //retorna um array de arrays com estrutura chave - valor
  .find(([key, value]) => value >= totalDeHorasPorProjeto
)[0];

exports.calcularPacote = calcularPacote;