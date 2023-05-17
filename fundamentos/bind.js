const pessoa = {
  nome: 'João',
  dizerOla: function() {
    console.log(`Olá, meu nome é ${this.nome}.`);
  }
};

const dizerOlaParaMaria = pessoa.dizerOla.bind({ nome: 'Maria' });
dizerOlaParaMaria(); // Olá, meu nome é Maria.
