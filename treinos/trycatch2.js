function obterPropriedade(obj, propriedade) {
    try {
      return obj[propriedade];
    } catch (error) {
      return "Erro: " + error.message;
    }
  }
  
  const pessoa = { nome: "João", idade: 30 };
  
  console.log(obterPropriedade(pessoa, "nome")); // retorna "João"
  console.log(obterPropriedade(pessoa, "sobrenome")); // retorna "Erro: Cannot read property 'sobrenome' of undefined"
  