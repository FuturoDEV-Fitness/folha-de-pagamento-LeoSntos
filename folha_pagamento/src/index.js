const { calcularSalarioLiquido } = require("./calculo_salario_liquido");
const { calcularINSS } = require("./calculo_inss");
const { calcularImpostoRenda } = require("./calculo_imposto_renda");
const readline = require('readline');
const fs = require('fs');


function programaPrincipal() {
    const input = readline.createInterface(
        process.stdin,
        process.stdout
    );

    input.question("Qual é seu nome? ", (nome) => {
        input.question("Qual é seu CPF? ", (cpf) => {
            input.question("Qual é o mes de pagamento? (Numerico) ", (mes) => {
                input.question("Qual é o seu salário bruto? ", (salarioBrutoDigitado) => {
                    const salarioBruto = salarioBrutoDigitado

                    const imposto = calcularImpostoRenda(salarioBruto);
                    const valorINSS = calcularINSS(salarioBruto);
                    const salarioLiquido = calcularSalarioLiquido(salarioBruto, imposto, valorINSS);

                    const folhaPagamento = `--- Folha de Pagamento ---\nNome: ${nome}\nCPF: ${cpf}\nMês: ${mes}\nSalário bruto: ${salarioBruto}\nINSS: ${valorINSS.toFixed(2)}\nImposto de renda: ${imposto.toFixed(2)}\nSalário líquido: ${salarioLiquido.toFixed(2)}`;

                    console.log(folhaPagamento)

                    input.question("Deseja emitir um pdf? (s/n) ", (resposta) => {
                        if (resposta === 's') {
                            fs.writeFile('folha_pagamento.pdf', folhaPagamento, (err) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    console.log('PDF criado com sucesso!')
                                    input.close()
                                }
                            })
                        }
                    })
                })
            })
        })
    })
}

programaPrincipal()