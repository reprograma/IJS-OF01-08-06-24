const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe(' Calculo de horas totais de um projeto', ()=>{
	test('Dado uma array com funcionalidade desejadas do projeto, deve-se retornar a soma de horas necessarias totais', ()=>{
		//setup
		const funcionalidades = [
			'setup',
			'formulario',
			'responsividade',
			'ssr',
			'construcao_1_pagina'
		]
		//ação
		const resultado = calcularHorasDeProjeto(funcionalidades)
		//vericação
		expect(resultado).toBe(56)
	});

	test('Deve somar corretamente funcionalidades repetidas', ()=>{
		//setup
		const funcionalidades = ['setup', 'setup', 'setup']
		const   resultadoEsperado = 24;
		//ação
		const resultado = calcularHorasDeProjeto(funcionalidades)
		//vericação
		expect(resultado).toBe(resultadoEsperado)
	});

	test('Deve retornar 0 caso uma variavel não exista', ()=>{
		//setup
		const funcionalidades = ['invalido', 'setup', 'setup']
		const   resultadoEsperado = 0;
		//ação
		const resultado = calcularHorasDeProjeto(funcionalidades)
		//vericação
		expect(resultado).toBe(resultadoEsperado)
	});

	test('Deve retornar 0 caso a array eseja vazia', ()=>{
		//setup
		const funcionalidades = []
		const   resultadoEsperado = 0;
		//ação
		const resultado = calcularHorasDeProjeto(funcionalidades)
		//vericação
		expect(resultado).toBe(resultadoEsperado)
	});

	test('Deve retornar 0 caso todas as variaveis não existam', ()=>{
		//setup
		const funcionalidades = ['hello', 'reprograma']
		const   resultadoEsperado = 0;
		//ação
		const resultado = calcularHorasDeProjeto(funcionalidades)
		//vericação
		expect(resultado).toBe(resultadoEsperado)
	});

	test('Deve retornar 0 caso a variavel seja nulla', ()=>{
		//setup
		const funcionalidades = [null]
		const   resultadoEsperado = 0;
		//ação
		const resultado = calcularHorasDeProjeto(funcionalidades)
		//vericação
		expect(resultado).toBe(resultadoEsperado)
	});
})
