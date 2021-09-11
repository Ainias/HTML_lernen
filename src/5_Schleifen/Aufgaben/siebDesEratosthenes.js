'use strict';

/**
 * Diese Funktion bekommt eine ganze Zahl > 0 herein und gibt alle Primzahlen bis (einschließlich) dieser Zahl zurück
 *
 *
 * @param n {number}
 * @return {string[]}
 */
function siebDesEratosthenes(n) {
    let primtable = Array(n - 1);
    primtable.fill(true, 0, n - 1);
    for (let i = 2; i <= n; i++) {
        console.log(i, primtable[i - 2]);
        let x = i * 2;
        while (x <= n) {
            primtable[x - 2] = false;
            x = x + i;
        }
    }
    let primnumbers = Array(0);
    for (let i = 2; i <= n; i++) {
        if (primtable[i - 2] === true) {
            primnumbers.push(i);
        }
    }
    return primnumbers;
}
