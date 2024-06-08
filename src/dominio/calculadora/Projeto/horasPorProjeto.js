const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

//itera a lista de funcionalidades e retorna um novo array,
//depois usa o reduce para percorrer esse array e soma seus valores
const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((sum, currentValue) => sum + currentValue, 0)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;