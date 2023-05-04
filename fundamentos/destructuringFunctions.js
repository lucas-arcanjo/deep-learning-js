function rand({ min = 0, max = 10}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

obj = ({ max: 10, min: 1})

console.log(rand(obj))
//output number aleatorio