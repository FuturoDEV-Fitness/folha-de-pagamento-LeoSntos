function calcularImpostoRenda(salarioBruto) {
    let imposto = 0;

    if (salarioBruto <= 2112.00) {
        imposto = 0;
    } else if (salarioBruto >= 2112.01 && salarioBruto <= 2826.65) {
        imposto = (salarioBruto * 0.075) - 158.40;
    } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        imposto = (salarioBruto * 0.15) - 354.80;
    } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        imposto = (salarioBruto * 0.225) - 636.13;
    } else if (salarioBruto > 4664.68) {
        imposto = (salarioBruto * 0.275) - 869.36;
    }

    return imposto > 0 ? imposto : 0;
}

// Exemplo de uso:
let salarioBruto = 2113; // Insira aqui o salário bruto
const impostoAPagar = calcularImpostoRenda(salarioBruto);
console.log("Imposto a pagar:", impostoAPagar.toFixed(2));