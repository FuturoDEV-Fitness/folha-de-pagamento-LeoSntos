const { calcularImpostoRenda } = require("./calculo_imposto_renda");
const { calcularINSS } = require("./calculo_inss");

function calcularSalarioLiquido(salarioBruto, imposto, valorINSS, outrosDescontos) {
    imposto = calcularImpostoRenda(salarioBruto);
    valorINSS = calcularINSS(salarioBruto);
    if (outrosDescontos === undefined) {
        outrosDescontos = 0;
    }

    const salarioLiquido = (salarioBruto - imposto) - valorINSS - outrosDescontos;

    console.log(`seu salario bruto é de: ${salarioBruto.toFixed(2)}`);
    console.log(`seu valor do INSS é de: ${valorINSS.toFixed(2)}`);
    console.log(`seu imposto de renda é de: ${imposto.toFixed(2)}`);
    console.log(`seus outros descontos é de: ${outrosDescontos.toFixed(2)}`);
    console.log(`seu salario liquido é de: ${salarioLiquido.toFixed(2)}`);
}

const salarioBruto = 5000;
calcularSalarioLiquido(salarioBruto);