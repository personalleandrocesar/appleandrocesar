export default defineEventHandler((event) => {
  return {
    "nome": "Cristiano",
    "nomeCompleto": "Cristiano Pereira de Souza",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/cristianosouza.png",
    "servico": "Consultoria on-line",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Peito/Ombro/Quadríceps",
    "treinoB": "Costa/Bíceps/Posterior",
    "treinoC": "",

    // Dados Menu Global
    "periodo": "30/01/24 - 30/02/24", // Dia do pagamento Mensal
    // 0 = bloqueado; 1 = pendente; 2 = Verificado
    "status": 2,
    // Treino atual
    "treinoActual": "30/01/24 - 01/03/24",
    // Próxima Treino 
    "treinoNext": "02/03/24",
    // Avaliação atual
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
