const radio1 = document.getElementById('inlineRadio1');

function checked() {
    console.log(radio1.checked);
}


radio1.addEventListener('click', function () {
    checked();
})