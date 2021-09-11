/**
 * Diese Funktion berechnet den GGT zweier ganzer Zahlen
 *
 * @param x {number}
 * @param y {number}
 * @returns {number}
 */
function ggt(x, y) {
    rest = x % y;
    while (rest > 0) {
        x = y;
        y = rest;
        rest = x % y;
    }
    return y;
}