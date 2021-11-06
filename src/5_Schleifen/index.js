const moduloXInput = document.getElementById('moduloXInput');
const moduloYInput = document.getElementById('moduloYInput');
const moduloOutput = document.getElementById('moduloOutput');
const moduloButton = document.getElementById('moduloButton');

moduloButton.addEventListener('click', function () {
    moduloOutput.innerText = modulo(parseInt(moduloXInput.value), parseInt(moduloYInput.value)).toString();
});

const ggtXInput = document.getElementById('ggtXInput');
const ggtYInput = document.getElementById('ggtYInput');
const ggtOutput = document.getElementById('ggtOutput');
const ggtButton = document.getElementById('ggtButton');

ggtButton.addEventListener('click', function () {
    ggtOutput.innerText = ggt(parseInt(ggtXInput.value), parseInt(ggtYInput.value)).toString();
});

const siebInput = document.getElementById('siebInput');
const siebOutput = document.getElementById('siebOutput');
const siebButton = document.getElementById('siebButton');

siebButton.addEventListener('click', function () {
    siebOutput.innerText = siebDesEratosthenes(parseInt(siebInput.value)).toString();
});

const exponentBasisInput = document.getElementById('exponentXinput');
const exponentPotenzInput = document.getElementById('exponentNinput');
const exponentOutput = document.getElementById('exponentOutput');
const exponentButton = document.getElementById('exponentButton');

exponentButton.addEventListener('click', function () {
    exponentOutput.innerText = exponent(
        parseInt(exponentBasisInput.value),
        parseInt(exponentPotenzInput.value)
    ).toString();
});
