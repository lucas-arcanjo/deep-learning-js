function dividir(a, b) {
    try {
      return a / b;
    } catch (error) {
      return "Erro: " + error.message;
    }
  }
  
  console.log(dividir(10, 0)); // retorna "Erro: Division by zero"
  console.log(dividir(10, "a")); // retorna "Erro: Cannot convert string to number"
  console.log(dividir(10, 5)); // retorna 2
  