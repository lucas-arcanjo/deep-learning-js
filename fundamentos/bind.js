const pessoa = {
    message: "Hello",
    falar() {
        console.log(this.message, "fulano")
    }
}

pessoa.falar() 
const falando = pessoa.falar.bind(pessoa)
falando()
