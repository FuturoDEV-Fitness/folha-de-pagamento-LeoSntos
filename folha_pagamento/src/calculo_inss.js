function calcularINSS(salarioBruto) {
    const tetoINSS = 908.85;
    let valorINSS = 0;

    if (salarioBruto <= 1412.00) {
        valorINSS = salarioBruto * 0.075;
    } else if (salarioBruto <= 2666.68) {
        valorINSS = (1412.00 * 0.075) + ((salarioBruto - 1412.00) * 0.09);
    } else if (salarioBruto <= 4000.03) {
        valorINSS = (1412.00 * 0.075) + ((2666.68 - 1412.00) * 0.09) + ((salarioBruto - 2666.68) * 0.12);
    } else if (salarioBruto <= 7786.02) {
        valorINSS = (1412.00 * 0.075) + ((2666.68 - 1412.00) * 0.09) + ((4000.03 - 2666.68) * 0.12) + ((salarioBruto - 4000.03) * 0.14);
    } else {
        valorINSS = tetoINSS;
    }

    return valorINSS;
}

module.exports = { calcularINSS };