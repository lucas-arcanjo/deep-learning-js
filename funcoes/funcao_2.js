
// 1 - Passar uma função como param para outra função

function executaQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

function bomDia() {
    console.log('bom dia')
}

executaQualquerCoisa(3)
executaQualquerCoisa(bomDia())

// 2 - Retorna uma função a partir de outra função

function subtrair(x) {
    return function(y) {
        return x - y;
    }
}

console.log("========================")
console.log("atribuindo em uma const")
const valorDeY = subtrair(10);
console.log(valorDeY(5))
console.log("========================")

// ou sem atribuir a uma const
console.log("========================")
console.log("sem atribuir a uma const")
console.log(subtrair(5)(10))
console.log("========================")