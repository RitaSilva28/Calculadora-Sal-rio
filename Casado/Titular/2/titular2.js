const taxaDependentes_0 = [
    0.0,
    2.3,
    3.3,
    4.7,
    5.6,
    6.5,
    7.3,
    8.1,
    9.2,
    10.7,
    11.7,
    13.1,
    14.0,
    15.0,
    16.0,
    17.0,
    17.8,
    18.9,
    21.5,
    22.4,
    23.4,
    24.4,
    25.9,
    26.9,
    27.8,
    28.8,
    29.7,
    30.7,
    32.1,
    33.1,
    34.4,
    36.4,
    37.3,
    38.3,
    39.3,
    40.3
];


const taxaDependentes_1 = [
    0.0,
    0.0,
    0.0,
    0.9,
    1.8,
    3.7,
    4.6,
    5.5,
    6.9,
    8.9,
    10.0,
    11.4,
    12.4,
    13.3,
    14.3,
    16.3,
    17.2,
    18.2,
    21.4,
    22.3,
    23.3,
    24.3,
    25.3,
    26.3,
    27.2,
    28.2,
    29.6,
    30.6,
    32.0,
    33.0,
    34.3,
    36.3,
    37.2,
    38.2,
    39.2,
    40.2
];


const taxaDependentes_2 = [
    0.0,
    0.0,
    0.0,
    0.0,
    0.9,
    1.2,
    2.9,
    3.7,
    4.7,
    7.1,
    8.1,
    10.6,
    11.7,
    12.5,
    13.5,
    14.6,
    15.6,
    16.6,
    19.8,
    21.0,
    22.0,
    22.9,
    23.9,
    25.9,
    26.9,
    27.8,
    29.2,
    30.4,
    31.9,
    32.8,
    33.8,
    36.2,
    37.1,
    38.1,
    39.1,
    40.1

];


const taxaDependentes_3 = [
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    1.0,
    2.0,
    4.3,
    6.3,
    7.7,
    9.0,
    10.0,
    10.9,
    11.9,
    13.8,
    14.8,
    18.4,
    19.4,
    20.6,
    21.6,
    22.5,
    23.5,
    24.5,
    25.5,
    27.0,
    29.0,
    30.7,
    31.7,
    32.6,
    35.1,
    36.5,
    37.4,
    38.4,
    39.4

];



const taxaDependentes_4 = [
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    2.6,
    4.5,
    5.9,
    7.3,
    9.2,
    10.2,
    11.1,
    12.1,
    13.1,
    17.1,
    19.0,
    20.0,
    21.2,
    22.1,
    23.1,
    24.1,
    25.1,
    26.9,
    27.8,
    29.3,
    31.5,
    32.4,
    34.9,
    35.9,
    37.2,
    38.2,
    39.2

];


const taxaDependentes_5mais = [
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    1.7,
    2.7,
    5.1,
    6.5,
    7.4,
    8.5,
    9.5,
    11.4,
    12.3,
    16.7,
    17.6,
    18.6,
    20.6,
    21.8,
    22.7,
    23.7,
    24.7,
    26.7,
    27.6,
    29.1,
    30.0,
    31.3,
    33.7,
    34.7,
    35.7,
    37.0,
    38.0
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
        } else if (salario <= 708) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 754) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 794) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 836) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 886) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 974) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1081) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1404) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1629) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1733) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1849) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1998) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2157) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2347) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2566) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2934) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3611) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3882) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4210) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4604) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5076) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5654) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6381) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7323) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8441) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9336) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10448) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 14013) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20118) {
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
        } else if (salario <= 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
                ) / 100;
        } else if (salario > 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[35] * 0.01) * 100
                ) / 100;
        }

        // 2 Dependentes
    } else if (dependentes == 1) {
        taxa = taxaDependentes_1;
        console.log("1 dependente");
        if (salario <= 686) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 708) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 754) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 794) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 836) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 886) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 974) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1081) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1404) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1629) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1733) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1849) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1998) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2157) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2347) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2566) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2934) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3611) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3882) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4210) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4604) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5076) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5654) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6381) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7323) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8441) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9336) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10448) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 14013) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20118) {
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
        } else if (salario <= 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
                ) / 100;
        } else if (salario > 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[35] * 0.01) * 100
                ) / 100;
        }

        //2 Dependentes 

    } else if (dependentes == 2) {
        taxa = taxaDependentes_2;
        console.log("2 dependentes");
        if (salario <= 686) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 708) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 754) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 794) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 836) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 886) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 974) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1081) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1404) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1629) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1733) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1849) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1998) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2157) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2347) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2566) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2934) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3611) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3882) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4210) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4604) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5076) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5654) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6381) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7323) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8441) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9336) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10448) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 14013) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20118) {
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
        } else if (salario <= 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
                ) / 100;
        } else if (salario > 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[35] * 0.01) * 100
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
        } else if (salario <= 708) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 754) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 794) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 836) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 886) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 974) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1081) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1404) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1629) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1733) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1849) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1998) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2157) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2347) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2566) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2934) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3611) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3882) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4210) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4604) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5076) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5654) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6381) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7323) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8441) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9336) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10448) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 14013) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20118) {
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
        } else if (salario <= 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
                ) / 100;
        } else if (salario > 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[35] * 0.01) * 100
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
        } else if (salario <= 708) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 754) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 794) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 836) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 886) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 974) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1081) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1404) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1629) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1733) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1849) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1998) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2157) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2347) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2566) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2934) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3611) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3882) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4210) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4604) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5076) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5654) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6381) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7323) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8441) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9336) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10448) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 14013) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20118) {
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
        } else if (salario <= 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
                ) / 100;
        } else if (salario > 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[35] * 0.01) * 100
                ) / 100;
        }
        //5 Dependentes
    } else if (dependentes >= 5) {
        taxa = taxaDependentes_5mais;
        console.log("5+ dependentes");
        if (salario <= 686) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 708) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 754) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 794) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 836) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 886) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 974) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1081) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1225) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1404) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1629) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1733) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1849) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1998) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2157) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2347) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2566) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2934) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3356) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3611) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3882) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4210) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4604) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5076) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5654) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6381) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7323) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8441) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9336) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10448) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        } else if (salario <= 14013) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[30] * 0.01) * 100
                ) / 100;
        } else if (salario <= 20118) {
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
        } else if (salario <= 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[34] * 0.01) * 100
                ) / 100;
        } else if (salario > 28309) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[35] * 0.01) * 100
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