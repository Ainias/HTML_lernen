/**
 * Diese Funktion berechnet den Exponenten aus einer Basis mit einer Potenz.
 *
 * @param basis {number}
 * @param potenz {number}
 * @returns {number}
 */

function exponent(basis, potenz) {
    let y = basis;
    for (let i = 1; i <= potenz - 1; i++) {
        y = y * basis;
    }
    return y;
}
