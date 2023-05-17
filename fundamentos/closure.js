function somar(n1) {
    return function (soma = '+') {
        return function (n2) {
            if (soma === '+')
                return n1 + n2;
        }
    }
}

const guardaN1 = somar(1)
const guardaN1eN2 = guardaN1(5)

console.log(somar(2)("+")(3))