const { calcularImpostoRenda } = require("./calculo_imposto_renda");
const { calcularINSS } = require("./calculo_inss");

function calcularSalarioLiquido(salarioBruto, imposto, valorINSS, outrosDescontos) {
    imposto = calcularImpostoRenda(salarioBruto);
    valorINSS = calcularINSS(salarioBruto);
    if (outrosDescontos === undefined) {
        outrosDescontos = 0;
    }

    return salarioLiquido = (salarioBruto - imposto) - valorINSS - outrosDescontos;
}

module.exports = { calcularSalarioLiquido };