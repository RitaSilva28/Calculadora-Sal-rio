//Taxas Não casado Deficiente 0 Dependentes
const taxaDeficienteDependentes_0 = [

    0.0,
    0.8,
    3.7,
    4.7,
    5.7,
    6.6,
    8.5,
    9.5,
    11.0,
    12.2,
    13.6,
    14.6,
    15.6,
    16.6,
    17.5,
    18.5,
    19.5,
    20.5,
    21.5,
    22.4,
    23.4,
    24.7,
    25.7,
    26.7,
    27.6,
    29.1,
    30.0,
    31.5,
    32.4


];

//Taxas Não casado Deficiente 1 Dependente

const taxaDeficienteDependentes_1 = [
    0.0,
    0.0,
    1.0,
    3.0,
    5.0,
    6.0,
    7.8,
    8.8,
    10.3,
    11.9,
    13.5,
    14.5,
    15.5,
    16.5,
    17.4,
    18.4,
    19.4,
    20.4,
    21.4,
    22.3,
    23.3,
    24.6,
    25.6,
    26.6,
    27.5,
    29.0,
    29.9,
    31.4,
    32.3,

];

const taxaDeficienteDependentes_2 = [
    0.0,
    0.0,
    0.2,
    2.2,
    3.2,
    4.2,
    6.2,
    7.2,
    8.6,
    10.5,
    12.0,
    14.1,
    15.1,
    16.1,
    17.1,
    18.0,
    19.0,
    20.0,
    21.0,
    22.0,
    22.9,
    24.5,
    25.5,
    26.5,
    27.4,
    28.9,
    29.8,
    31.3,
    32.2

];

//Taxas Não casado Deficiente 3 Dependentes

const taxaDeficienteDependentes_3 = [
    0.0,
    0.0,
    0.0,
    0.4,
    1.4,
    2.4,
    4.4,
    5.4,
    6.9,
    9.1,
    10.6,
    11.6,
    12.7,
    13.7,
    14.7,
    15.7,
    16.7,
    17.6,
    19.6,
    20.6,
    21.6,
    23.1,
    24.3,
    25.3,
    26.3,
    27.7,
    28.7,
    30.1,
    31.1

];



//Taxas Não casado Deficiente 4 Dependentes

const taxaDeficienteDependentes_4 = [
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.6,
    3.6,
    4.6,
    6.1,
    8.7,
    10.2,
    11.2,
    12.2,
    13.3,
    14.3,
    15.3,
    16.3,
    17.2,
    18.2,
    19.2,
    20.2,
    22.0,
    23.9,
    25.1,
    26.1,
    27.5,
    28.5,
    29.9,
    30.9

];

//Taxas Não casado Deficiente 5 Dependentes ou Mais

const taxaDeficienteDependentes_5mais = [
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    1.8,
    2.8,
    4.3,
    8.3,
    9.8,
    10.8,
    11.8,
    12.7,
    13.9,
    14.9,
    15.9,
    16.9,
    17.8,
    18.8,
    19.8,
    21.8,
    22.7,
    23.7,
    24.9,
    26.4,
    27.3,
    28.8,
    29.7

];

const submitBtn1 = document.getElementById("submit-button-1");
const clearBtn1 = document.getElementById("clear-button-1");

submitBtn1.addEventListener("click", function () {
    calcularSalario();
    let resultado = calcularSalario();
    appendResultado(resultado);
    submitBtn1.disabled = true;
});

clearBtn1.addEventListener("click", function () {
    const dependentes = document.getElementById("input-number");

    const salario = document.getElementById("input-number-salary");

    dependentes.value = 0;
    salario.value = 0;

    location.reload();
});

function calcularSalario() {
    const dependentes = document.getElementById("input-number").value;

    const salario = document.getElementById("input-number-salary").value;

    let taxa;
    let totalSalario;

    // Deficiente Não Casado 0 Dependentes

    if (dependentes == 0) {
        taxa = taxaDeficienteDependentes_0;
        console.log("0 dependentes");

        if (salario <= 1650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1753) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1905) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1972) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2342) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2520) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2971) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3186) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3513) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3616) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3826) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4251) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4456) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4891) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5316) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5526) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5961) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6274) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6858) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7385) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8224) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9178) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10232) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11287) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario > 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        }
    } else if (dependentes == 1) {
        taxa = taxaDeficienteDependentes_1;
        console.log("1 dependente");
        if (salario <= 1650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1753) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1905) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1972) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2342) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2520) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2971) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3186) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3513) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3616) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3826) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4251) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4456) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4891) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5316) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5526) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5961) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6274) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6858) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7385) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8224) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9178) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10232) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11287) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario > 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        }
    } else if (dependentes == 2) {
        taxa = taxaDeficienteDependentes_2;
        console.log("2 dependentes");
        if (salario <= 1650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1753) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1905) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1972) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2342) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2520) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2971) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3186) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3513) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3616) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3826) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4251) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4456) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4891) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5316) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5526) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5961) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6274) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6858) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7385) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8224) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9178) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10232) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11287) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario > 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        }
    } else if (dependentes == 3) {
        taxa = taxaDeficienteDependentes_3;
        console.log("3 dependentes");
        if (salario <= 1650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1753) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1905) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1972) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2342) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2520) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2971) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3186) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3513) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3616) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3826) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4251) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4456) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4891) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5316) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5526) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5961) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6274) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6858) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7385) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8224) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9178) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10232) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11287) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario > 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        }
    } else if (dependentes == 4) {
        taxa = taxaDeficienteDependentes_4;
        console.log("4 dependente");
        if (salario <= 1650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1753) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1905) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1972) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2342) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2520) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2971) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3186) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3513) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3616) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3826) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4251) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4456) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4891) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5316) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5526) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5961) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6274) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6858) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7385) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8224) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9178) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10232) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11287) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario > 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        }
    } else if (dependentes >= 5) {
        taxa = taxaDeficienteDependentes_5mais;
        console.log("5+ dependentes");
        if (salario <= 1650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1753) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1905) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1972) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2342) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2520) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2971) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3186) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3513) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3616) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3826) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4251) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4456) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4891) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5316) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5526) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5961) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6274) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6858) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7385) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8224) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9178) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10232) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11287) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario > 13008) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        }
    }
    return totalSalario;
}

function appendResultado(salario) {
    console.log(salario);

    const container = document.getElementById("container-page-1");
    const salarioContainer = document.createElement("div");
    salarioContainer.innerHTML = `<h3 style='margin:0px;color:#001c44 ' > O seu salário corresponde a <span style='color:#22BC00 '> ${salario} </span> € </h3>`;

    container.append(salarioContainer);
}