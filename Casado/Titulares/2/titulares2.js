const taxaDependentes_0 = [
    0.0,
    4.0,
    7.2,
    8.0,
    10.2,
    11.4,
    12.2,
    13.2,
    14.2,
    15.3,
    16.3,
    17.3,
    18.7,
    20.1,
    21.1,
    22.1,
    23.0,
    24.0,
    25.0,
    26.0,
    27.2,
    28.8,
    29.9,
    31.7,
    32.6,
    33.6,
    35.6,
    36.6,
    38.5,
    39.5,
    40.5,
    41.5,
    42.2,
    43.2,
    44.2,
];


const taxaDependentes_1 = [
    0.0,
    1.2,
    4.3,
    5.2,
    7.4,
    8.7,
    9.6,
    11.5,
    12.5,
    14.5,
    15.5,
    16.6,
    17.9,
    19.5,
    20.6,
    21.6,
    22.5,
    23.6,
    24.6,
    25.5,
    26.8,
    28.7,
    29.8,
    31.4,
    32.3,
    33.3,
    35.4,
    36.4,
    38.3,
    39.3,
    40.3,
    41.3,
    42.1,
    43.1,
    44.1

];


const taxaDependentes_2 = [
    0.0,
    0.8,
    2.5,
    3.4,
    6.6,
    7.9,
    8.7,
    10.7,
    11.6,
    12.7,
    13.7,
    14.7,
    16.3,
    17.8,
    18.7,
    19.8,
    20.9,
    22.8,
    23.8,
    24.8,
    26.0,
    28.3,
    29.3,
    31.0,
    31.9,
    32.9,
    34.8,
    36.2,
    38.1,
    39.1,
    40.1,
    41.1,
    42.0,
    43.0,
    44.0
];


const taxaDependentes_3 = [
    0.0,
    0.3,
    0.6,
    2.5,
    3.8,
    5.2,
    6.1,
    8.0,
    9.0,
    10.8,
    12.0,
    12.9,
    14.4,
    16.2,
    17.1,
    17.9,
    19.1,
    20.1,
    21.2,
    22.1,
    23.3,
    26.0,
    27.9,
    29.3,
    30.6,
    31.6,
    34.1,
    35.1,
    37.0,
    38.4,
    39.4,
    40.4,
    41.4,
    42.3,
    43.3

];


const taxaDependentes_4 = [
    0.0,
    0.0,
    0.0,
    0.6,
    3.1,
    4.4,
    4.8,
    7.2,
    8.1,
    9.1,
    10.1,
    11.2,
    13.5,
    15.4,
    16.3,
    17.2,
    18.1,
    19.3,
    20.4,
    21.4,
    22.5,
    25.6,
    26.6,
    28.0,
    29.9,
    31.2,
    33.9,
    34.9,
    36.8,
    37.8,
    39.2,
    40.2,
    41.2,
    42.1,
    43.1

];


const taxaDependentes_5mais = [
    0.0,
    0.0,
    0.0,
    0.0,
    1.2,
    3.1,
    3.9,
    5.4,
    6.4,
    8.2,
    9.3,
    10.3,
    11.8,
    13.6,
    14.6,
    16.5,
    17.5,
    18.4,
    19.6,
    20.6,
    21.8,
    25.2,
    26.2,
    27.6,
    28.6,
    29.5,
    33.7,
    34.7,
    36.7,
    37.6,
    38.6,
    39.6,
    40.8,
    41.9,
    42.9
];

const submitBtn2 = document.getElementById("submit-button-2");
const clearBtn2 = document.getElementById("clear-button-2");

submitBtn2.addEventListener("click", function () {
    calcularSalario();
    let resultado = calcularSalario();
    appendResultado(resultado);
    submitBtn2.disabled = true;
});

clearBtn2.addEventListener("click", function () {
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

    //  0 Dependentes

    if (dependentes == 0) {
        taxa = taxaDependentes_0;
        console.log("0 dependentes");

        if (salario <= 686) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 739) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 814) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 922) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1005) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1065) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1143) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1321) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1424) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1562) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1711) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1870) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1977) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2090) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2218) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2367) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3104) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3534) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4118) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5194) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5880) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6727) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7939) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9560) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11282) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 18854) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20221) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[31] * 0.01) * 100
                ) / 100;
        } else if (salario <= 22749) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[32] * 0.01) * 100
                ) / 100;
        } else if (salario <= 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[33] * 0.01) * 100
                ) / 100;
        } else if (salario > 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
                ) / 100;
        }

        //1 Dependente

    } else if (dependentes == 1) {
        taxa = taxaDependentes_1;
        console.log("1 dependente");

        if (salario <= 686) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 739) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 814) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 922) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1005) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1065) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1143) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1321) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1424) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1562) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1711) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1870) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1977) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2090) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2218) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2367) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3104) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3534) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4118) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5194) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5880) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6727) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7939) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9560) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11282) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 18854) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20221) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[31] * 0.01) * 100
                ) / 100;
        } else if (salario <= 22749) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[32] * 0.01) * 100
                ) / 100;
        } else if (salario <= 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[33] * 0.01) * 100
                ) / 100;
        } else if (salario > 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
                ) / 100;
        }

        // 2 Dependentes

    } else if (dependentes == 2) {
        taxa = taxaDependentes_2;
        console.log("2 dependentes");
        if (salario <= 686) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 739) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 814) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 922) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1005) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1065) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1143) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1321) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1424) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1562) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1711) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1870) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1977) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2090) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2218) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2367) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3104) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3534) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4118) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5194) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5880) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6727) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7939) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9560) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11282) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 18854) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20221) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[31] * 0.01) * 100
                ) / 100;
        } else if (salario <= 22749) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[32] * 0.01) * 100
                ) / 100;
        } else if (salario <= 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[33] * 0.01) * 100
                ) / 100;
        } else if (salario > 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
                ) / 100;
        }
        //3 Dependentes

    } else if (dependentes == 3) {
        taxa = taxaDependentes_3;
        console.log("3 dependentes");
        if (salario <= 686) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 739) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 814) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 922) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1005) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1065) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1143) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1321) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1424) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1562) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1711) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1870) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1977) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2090) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2218) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2367) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3104) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3534) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4118) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5194) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5880) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6727) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7939) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9560) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11282) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 18854) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20221) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[31] * 0.01) * 100
                ) / 100;
        } else if (salario <= 22749) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[32] * 0.01) * 100
                ) / 100;
        } else if (salario <= 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[33] * 0.01) * 100
                ) / 100;
        } else if (salario > 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
                ) / 100;
        }
        //4 Dependentes

    } else if (dependentes == 4) {
        taxa = taxaDependentes_4;
        console.log("4 dependente");

        if (salario <= 686) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 739) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 814) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 922) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1005) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1065) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1143) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1321) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1424) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1562) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1711) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1870) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1977) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2090) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2218) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2367) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3104) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3534) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4118) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5194) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5880) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6727) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7939) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9560) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11282) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 18854) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20221) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[31] * 0.01) * 100
                ) / 100;
        } else if (salario <= 22749) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[32] * 0.01) * 100
                ) / 100;
        } else if (salario <= 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[33] * 0.01) * 100
                ) / 100;
        } else if (salario > 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
                ) / 100;
        }

        // 5 Dependentes

    } else if (dependentes >= 5) {
        taxa = taxaDependentes_5mais;
        console.log("5+ dependentes");
        if (salario <= 686) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 739) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 814) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 922) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1005) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1065) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1143) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1321) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1424) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1562) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1711) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1870) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1977) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2090) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2218) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2367) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2767) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3104) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3534) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4118) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4650) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5194) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5880) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6727) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7939) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9560) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 11282) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 18854) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20221) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[31] * 0.01) * 100
                ) / 100;
        } else if (salario <= 22749) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[32] * 0.01) * 100
                ) / 100;
        } else if (salario <= 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[33] * 0.01) * 100
                ) / 100;
        } else if (salario > 25276) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
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