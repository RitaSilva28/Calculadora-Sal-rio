//Taxas Não casado Deficiente 0 Dependentes
const taxaDeficienteDependentes_0 = [
  0.0,
  1.2,
  4.1,
  5.1,
  6.6,
  8.8,
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
  23.4,
  24.4,
  25.4,
  26.4,
  27.3,
  28.8,
  29.7,
  30.7,
  31.7,
  32.6,
  33.6,
  35.1,
  36.1,
  37.0,
];

//Taxas Não casado Deficiente 1 Dependente

const taxaDeficienteDependentes_1 = [
  0.0,
  0.0,
  0.6,
  2.6,
  4.7,
  6.2,
  7.2,
  9.5,
  11.5,
  13.4,
  14.4,
  15.4,
  16.9,
  18.0,
  19.2,
  20.2,
  22.1,
  23.1,
  24.1,
  25.1,
  26.1,
  27.5,
  28.7,
  29.8,
  30.8,
  31.8,
  32.7,
  34.2,
  35.2,
  36.2,
];

//Taxas Não casado Deficiente 2 Dependente

const taxaDeficienteDependentes_2 = [
  0.0,
  0.0,
  0.0,
  0.0,
  3.7,
  5.2,
  6.2,
  7.6,
  9.6,
  11.5,
  12.4,
  13.4,
  15.3,
  16.5,
  18.4,
  19.6,
  21.6,
  22.5,
  23.5,
  24.5,
  25.5,
  27.0,
  28.3,
  29.3,
  30.4,
  31.4,
  32.3,
  33.8,
  34.8,
  35.8,
];

//Taxas Não casado Deficiente 3 Dependentes

const taxaDeficienteDependentes_3 = [
  0.0,
  0.0,
  0.0,
  0.0,
  0.2,
  2.2,
  4.2,
  5.7,
  7.6,
  9.6,
  10.6,
  11.6,
  13.8,
  14.9,
  15.9,
  16.9,
  19.0,
  20.0,
  21.0,
  22.0,
  23.9,
  25.4,
  27.0,
  27.9,
  28.9,
  30.0,
  31.0,
  32.4,
  33.4,
  34.4,
];

//Taxas Não casado Deficiente 4 Dependentes

const taxaDeficienteDependentes_4 = [
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  1.2,
  2.2,
  3.7,
  5.8,
  6.7,
  8.6,
  10.6,
  13.2,
  14.3,
  15.3,
  16.3,
  18.2,
  19.4,
  20.4,
  21.4,
  22.3,
  23.8,
  25.6,
  26.6,
  28.5,
  29.0,
  29.6,
  32.0,
  33.0,
  34.0,
];

//Taxas Não casado Deficiente 5 Dependentes ou Mais

const taxaDeficienteDependentes_5mais = [
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  0.0,
  1.2,
  2.7,
  3.7,
  5.8,
  7.6,
  9.6,
  12.6,
  13.7,
  14.7,
  15.7,
  17.6,
  18.6,
  19.8,
  20.8,
  21.8,
  23.2,
  25.2,
  26.2,
  27.1,
  28.1,
  29.1,
  30.7,
  31.7,
  32.6,
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
  } else if (dependentes == 1) {
    taxa = taxaDeficienteDependentes_1;
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
  } else if (dependentes == 2) {
    taxa = taxaDeficienteDependentes_2;
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
  } else if (dependentes == 3) {
    taxa = taxaDeficienteDependentes_3;
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
  } else if (dependentes == 4) {
    taxa = taxaDeficienteDependentes_4;
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
  } else if (dependentes >= 5) {
    taxa = taxaDeficienteDependentes_5mais;
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