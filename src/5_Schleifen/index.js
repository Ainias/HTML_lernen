const moduloXInput = document.getElementById("moduloXInput");
const moduloYInput = document.getElementById("moduloYInput");
const moduloOutput = document.getElementById("moduloOutput");
const moduloButton = document.getElementById("moduloButton");

moduloButton.addEventListener("click", function(){
    moduloOutput.innerText = modulo(parseInt(moduloXInput.value), parseInt(moduloYInput.value)).toString();
});

const fibonacciInput = document.getElementById("fibonacciInput");
const fibonacciOutput = document.getElementById("fibonacciOutput");
const fibonacciButton = document.getElementById("fibonacciButton");

fibonacciButton.addEventListener("click", function(){
    fibonacciOutput.innerText = fibonacci(parseInt(fibonacciInput.value)).toString();
})

const siebInput = document.getElementById("siebInput");
const siebOutput = document.getElementById("siebOutput");
const siebButton = document.getElementById("siebButton");

siebButton.addEventListener("click", function(){
    siebOutput.innerText = siebDesEratosthenes(parseInt(siebInput.value)).toString();
})
