//Taxas Não casado 0 Dependentes
const taxaNaoDeficienteDependentes_0 = [
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

//Taxas Não casado Deficiente 1 Dependente

const taxaNaoDeficienteDependentes_1 = [
  0.0,
  0.7,
  2.7,
  4.5,
  6.8,
  8.0,
  8.9,
  10.8,
  11.9,
  12.9,
  13.9,
  14.9,
  16.4,
  18.3,
  19.5,
  20.4,
  21.5,
  22.4,
  24.4,
  25.3,
  26.6,
  28.5,
  29.7,
  31.2,
  32.1,
  33.1,
  35.2,
  36.2,
  38.1,
  39.1,
  40.1,
  41.1,
  42.0,
  43.0,
  44.0,
];

//Taxas Não casado 2 Dependentes

const taxaNaoDeficienteDependentes_2 = [
  0.0,
  0.0,
  0.0,
  1.0,
  3.5,
  5.7,
  6.6,
  8.4,
  9.4,
  10.6,
  11.5,
  12.4,
  14.9,
  17.4,
  18.3,
  19.4,
  20.5,
  21.5,
  22.4,
  23.5,
  24.7,
  27.0,
  27.9,
  29.6,
  31.6,
  32.5,
  34.4,
  35.8,
  37.7,
  38.7,
  39.7,
  40.7,
  41.7,
  42.6,
  43.6,
];

//Taxas Não casado Deficiente 3 Dependentes

const taxaNaoDeficienteDependentes_3 = [
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  1.4,
  3.3,
  5.1,
  6.1,
  7.1,
  8.1,
  10.1,
  11.5,
  14.6,
  15.6,
  16.5,
  17.6,
  18.6,
  20.6,
  21.6,
  22.7,
  25.4,
  26.4,
  27.8,
  29.1,
  30.0,
  32.5,
  34.5,
  36.5,
  37.8,
  38.8,
  39.8,
  40.8,
  41.7,
  42.7,
];

//Taxas Não casado Deficiente 4 Dependentes

const taxaNaoDeficienteDependentes_4 = [
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  2.7,
  3.6,
  4.6,
  6.6,
  7.6,
  9.0,
  12.6,
  14.6,
  15.6,
  16.6,
  17.7,
  18.6,
  19.6,
  20.8,
  24.8,
  25.8,
  27.2,
  28.2,
  29.4,
  32.1,
  33.1,
  36.1,
  37.0,
  38.4,
  39.4,
  40.4,
  41.4,
  42.3,
];

//Taxas Não casado Deficiente 5 Dependentes ou Mais

const taxaNaoDeficienteDependentes_5mais = [
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.2,
  1.2,
  2.2,
  4.0,
  5.0,
  6.6,
  11.8,
  12.6,
  13.6,
  14.6,
  15.6,
  17.7,
  18.6,
  19.8,
  23.2,
  25.2,
  26.7,
  27.6,
  28.6,
  31.8,
  32.7,
  34.7,
  35.7,
  36.7,
  37.6,
  38.8,
  40.0,
  41.0,
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

  // Deficiente Não Casado 0 Dependentes

  if (dependentes == 0) {
    taxa = taxaNaoDeficienteDependentes_0;
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
  } else if (dependentes == 1) {
    taxa = taxaNaoDeficienteDependentes_1;
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
  } else if (dependentes == 2) {
    taxa = taxaNaoDeficienteDependentes_2;
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
  } else if (dependentes == 3) {
    taxa = taxaNaoDeficienteDependentes_3;
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
  } else if (dependentes == 4) {
    taxa = taxaNaoDeficienteDependentes_4;
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
  } else if (dependentes >= 5) {
    taxa = taxaNaoDeficienteDependentes_5mais;
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
  salarioContainer.innerHTML = `<h3 style='margin:0px' > O seu salário corresponde a ${salario} € </h3>`;

  container.append(salarioContainer);
}
