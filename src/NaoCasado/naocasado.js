const radio1 = document.getElementById("inlineRadio1");
const radio2 = document.getElementById("inlineRadio2");



function checked() {
  console.log(radio1.checked);
  console.log(radio2.checked);
}

radio1.addEventListener("click", function () {
  checked();
  location.href = "./1/1.html";
});

radio2.addEventListener("click", function () {
  checked();
  location.href = "./2/2.html";
});