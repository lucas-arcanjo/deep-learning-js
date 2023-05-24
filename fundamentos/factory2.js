// factory com parâmetros
function criarProdutos(nome, preco) {
	return {
		nome, // é o mesmo que usar `produto: produto`
		preco // é o mesmo que usar `preco: preco`
	}
}

console.log(criarProdutos('teclado', 200.0))
console.log(criarProdutos('mouse', 130.0))