const Pessoa = {
	nome: "Fulano",
	idade: 25,
	endereco: {
		logradouro: "Rua do Limão",
		numero: 123
	}
}

const { nome, endereco: { logradouro, numero } } = Pessoa

console.log(nome, logradouro, numero)
//output Fulano Rua do Limão 123

// is equivalent to:
// const nome = Pessoa.nome
// const logradouro = Pessoa.endereco.logradouro
// const numero = Pessoa.endereco.numero