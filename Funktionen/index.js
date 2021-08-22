function fibonacci(n) {
    if (n <= 1) {
        return n
    } else {
        let result = fibonacci(n - 1) + fibonacci(n - 2)
        console.log("f_" + n + ": " + result)
        return result
    }
}

function ggt(a, b) {
    let rest = a % b
    if (rest === 0) {
        return b
    } else {
        return ggt(b, rest)
    }
}

function modulo(a, b) {
    if (a < b) {
        return a
    }
    else if (a === b) {
        return 0
    }
    else if (a > b) {
        let rest = a - b
        return modulo(rest, b)
    }
}
