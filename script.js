function valueButton(e) {
    document.querySelector('.calculatorForm').screen.value += e.value;
}

function clearData() {
    document.querySelector('.calculatorForm').screen.value = null;
}

function equalTo() {
    document.querySelector('.calculatorForm').screen.value = eval(calculatorForm.screen.value);
}