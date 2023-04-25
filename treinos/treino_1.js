// function somar(n1) {
//     return function (n2) {
//         return function (n3) {
//             return n1 + n2 + n3
//         }
//     }
// }

// function subtrair(n1) {
//     return function (n2) {
//         return function (n3) {
//             return n1 - n2 - n3
//         }
//     }
// }

// function multiplicar(n1) {
//     return function (n2) {
//         return function (n3) {
//             return n1 * n2 * n3
//         }
//     }
// }

// // console.log(multiplicar(10)(11)(2))

// function calcular(n1, n2, fn) {
//     if (typeof fn === 'function') {
//         return fn(n1)(n2)
//     }
// }

// console.log(calcular(5, 2, somar(10)))
// console.log(calcular(5, 2, subtrair(10)))
// console.log(calcular(5, 2, multiplicar(10)))

function calcular2(a) {
    return function(b) {
        return function(fn) {
            return fn(a)(b)
        }
    }
}

function somar2(a) {
    return function (b) {
        return a + b
    }
}

console.log(calcular2(2)(12)(somar2))