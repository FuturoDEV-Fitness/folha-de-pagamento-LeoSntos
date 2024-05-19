const { calcularSalarioLiquido } = require("./calculo_salario_liquido");
const { calcularINSS } = require("./calculo_inss");
const { calcularImpostoRenda } = require("./calculo_imposto_renda");
const readline = require('readline');


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

                    console.log("--- folha de pagamento ---");
                    console.log(`Nome: ${nome}`);
                    console.log(`Cpf: ${cpf}`);
                    console.log(`Salário bruto: ${salarioBruto}`);
                    console.log(`INSS: ${valorINSS.toFixed(2)}`);
                    console.log(`Imposto de renda: ${imposto.toFixed(2)}`);
                    console.log(`Salario líquido: ${salarioLiquido.toFixed(2)}`);

                    input.close();
                })
            })
        })
    })
}

programaPrincipal()