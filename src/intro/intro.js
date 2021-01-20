const casadoBtn = document.getElementById("CasadoBtn");
const solteiroBtn = document.getElementById("SolteiroBtn");

casadoBtn.addEventListener("click", function () {
  location.href = "./src/Casado/casado.html";
});

solteiroBtn.addEventListener("click", function () {
  location.href = "./src/Solteiro/solteiro.html";
});
