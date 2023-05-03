// formas de deixar um parametro padrao

function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c;
}

console.log(soma(2), soma(0, 0, 0))
// output 4 3

// limitacao caso utilize como parametro 0, ja que 0 é considerado false

function soma1(a, b, c) {
    a = a != undefined ? a : 1 // 2 forma
    b = 1 in arguments ? b : 1 // 3 forma
    c = isNaN(c) ? 1 : c // 4 forma
    return a + b + c;
}

console.log(soma1(9, 3))
// output 13

// 5 forma, padrao do EC2015

function soma2(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma2(2, 9))
//output 12