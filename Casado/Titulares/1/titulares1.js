const taxaDependentes_0 = [
    0.0,
    1.2,
    3.6,
    4.6,
    6.6,
    8.0,
    9.9,
    12.3,
    14.3,
    15.2,
    16.3,
    17.2,
    18.3,
    19.5,
    20.5,
    21.5,
    22.9,
    23.9,
    24.9,
    25.9,
    26.9,
    28.3,
    29.7,
    30.7,
    31.7,
    32.6,
    33.6,
    35.1,
    36.1,
    37.0

];



const taxaDependentes_1 = [
    0.0,
    0.0,
    2.8,
    3.8,
    5.8,
    7.4,
    8.3,
    10.7,
    12.6,
    13.6,
    14.6,
    15.6,
    17.1,
    18.2,
    19.4,
    20.4,
    21.9,
    22.8,
    23.8,
    24.8,
    25.8,
    27.2,
    28.9,
    30.0,
    31.0,
    31.9,
    32.9,
    34.4,
    35.4,
    36.4

];


const taxaDependentes_2 = [
    0.0,
    0.0,
    0.0,
    1.9,
    4.1,
    5.5,
    7.5,
    9.0,
    10.9,
    12.8,
    13.8,
    14.8,
    16.7,
    17.8,
    18.8,
    20.0,
    21.5,
    22.4,
    23.4,
    24.4,
    25.4,
    26.9,
    28.7,
    29.6,
    30.8,
    31.8,
    32.7,
    34.2,
    35.2,
    36.2
];


const taxaDependentes_3 = [
    0.0,
    0.0,
    0.0,
    0.0,
    2.3,
    3.8,
    5.7,
    7.3,
    9.2,
    11.1,
    12.1,
    13.1,
    15.3,
    16.5,
    17.4,
    18.4,
    20.1,
    21.1,
    22.1,
    23.0,
    24.0,
    25.5,
    27.5,
    28.5,
    29.4,
    30.6,
    31.6,
    33.0,
    34.0,
    35.0

];


const taxaDependentes_4 = [
    0.0,
    0.0,
    0.0,
    0.0,
    1.5,
    3.0,
    4.0,
    6.4,
    7.4,
    9.4,
    10.4,
    11.4,
    14.0,
    15.1,
    17.1,
    18.0,
    19.5,
    20.7,
    21.7,
    22.6,
    23.6,
    25.1,
    27.3,
    28.3,
    29.3,
    30.2,
    31.4,
    32.8,
    33.8,
    34.8

];


const taxaDependentes_5mais = [
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    2.2,
    3.2,
    5.6,
    6.6,
    8.6,
    9.6,
    10.6,
    13.6,
    14.7,
    15.7,
    16.7,
    18.1,
    20.1,
    21.3,
    22.2,
    23.2,
    24.7,
    27.1,
    28.1,
    29.1,
    30.0,
    31.0,
    32.6,
    33.6,
    34.6

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

    //  0 Dependentes

    if (dependentes == 0) {
        taxa = taxaDependentes_0;
        console.log("0 dependentes");

        if (salario <= 1310) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1414) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1455) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1639) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1956) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2079) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2213) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2314) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2479) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2561) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2663) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2929) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3247) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3585) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4353) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4620) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4916) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5204) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5634) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6064) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6768) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7236) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7817) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8500) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9284) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10018) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 12535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario > 12535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        }

        // 1 Dependente 

    } else if (dependentes == 1) {
        taxa = taxaDependentes_1;
        console.log("1 dependente");
        if (salario <= 1310) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1414) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1455) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1639) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1956) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2079) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2213) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2314) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2479) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2561) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2663) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2929) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3247) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3585) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4353) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4620) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4916) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5204) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5634) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6064) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6768) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7236) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7817) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8500) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9284) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10018) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 12535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario > 12535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        }

        // 2 Dependentes 

    } else if (dependentes == 2) {
        taxa = taxaDependentes_2;
        console.log("2 dependentes");
        if (salario <= 1310) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1414) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1455) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1639) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1956) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2079) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2213) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2314) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2479) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2561) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2663) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2929) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3247) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3585) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4353) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4620) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4916) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5204) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5634) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6064) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6768) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7236) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7817) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8500) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9284) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10018) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 12535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario > 12535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        }

        // 3 Dependentes 

    } else if (dependentes == 3) {
        taxa = taxaDependentes_3;
        console.log("3 dependentes");
        if (salario <= 1310) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1414) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1455) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1639) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1956) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2079) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2213) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2314) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2479) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2561) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2663) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2929) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3247) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3585) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4353) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4620) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4916) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5204) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5634) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6064) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6768) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7236) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7817) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8500) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9284) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10018) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 12535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario > 12535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        }

        //4 Dependentes 

    } else if (dependentes == 4) {
        taxa = taxaDependentes_4;
        console.log("4 dependente");
        if (salario <= 1310) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1414) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1455) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1639) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1956) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2079) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2213) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2314) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2479) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2561) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2663) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2929) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3247) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3585) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4353) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4620) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4916) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5204) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5634) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6064) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6768) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7236) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7817) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8500) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9284) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10018) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 12535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario > 12535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[29] * 0.01) * 100
                ) / 100;
        }

        // 5 Dependentes

    } else if (dependentes >= 5) {
        taxa = taxaDependentes_5mais;
        console.log("5+ dependentes");
        if (salario <= 1310) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[0] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1414) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[1] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1455) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[2] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1639) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[3] * 0.01) * 100
                ) / 100;
        } else if (salario <= 1956) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[4] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2079) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[5] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2213) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[6] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2314) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[7] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2479) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[8] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2561) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[9] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2663) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[10] * 0.01) * 100
                ) / 100;
        } else if (salario <= 2929) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[11] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3247) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[12] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3585) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[13] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3718) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[14] * 0.01) * 100
                ) / 100;
        } else if (salario <= 3933) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[15] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4353) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[16] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4620) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[17] * 0.01) * 100
                ) / 100;
        } else if (salario <= 4916) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[18] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5204) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[19] * 0.01) * 100
                ) / 100;
        } else if (salario <= 5634) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[20] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6064) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[21] * 0.01) * 100
                ) / 100;
        } else if (salario <= 6768) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[22] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7236) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[23] * 0.01) * 100
                ) / 100;
        } else if (salario <= 7817) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[24] * 0.01) * 100
                ) / 100;
        } else if (salario <= 8500) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[25] * 0.01) * 100
                ) / 100;
        } else if (salario <= 9284) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[26] * 0.01) * 100
                ) / 100;
        } else if (salario <= 10018) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[27] * 0.01) * 100
                ) / 100;
        } else if (salario <= 12535) {
            totalSalario =
                Math.round(
                    (salario - salario * 0.11 - salario * taxa[28] * 0.01) * 100
                ) / 100;
        } else if (salario > 12535) {
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