function usandoArguments(i0, i1, i2, i3, i4) {
	for (let i in arguments) {
		console.log(`${i}° arguments = ${arguments[i]}`)
	}
}

usandoArguments(6, 5, 3, 7, 9)

//output 
//output 0° arguments = 6
//output 1° arguments = 5
//output 2° arguments = 3
//output 3° arguments = 7
//output 4° arguments = 9