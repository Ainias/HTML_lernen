/**
 * Diese Funktion bekommt zwei zahlen rein und gibt den Rest von x/y zurück.
 * Hierbei wird keine Punktrechnung verwendet!
 *
 * @param x {number}
 * @param y {number}
 * @returns {number}
 */
function modulo(x, y) {
    while (x >= y) {
        console.log(x);
        x = x - y;
    }
    return x;
}
