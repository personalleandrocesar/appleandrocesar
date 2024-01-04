export default defineEventHandler((event) => {
  return {
    "nome": "Luiz",
    "nomeCompleto": "Luiz Felipe Souza",
    "email": "",
    "senha": "mello@Lu",
    "foto": "https://m.leandrocesar.com/img/luizsouza.png",
    "servico": "Personal Trainer",
    "objetivo": "Perder %G.",
    "tempo": "60 min.",
    "dias": "5-6 dias",
    "treinoA": "Braço",
    "treinoB": "Perna + Abdominal",
    "treinoC": "",

    // Dados Menu Global
    "periodo": "09/10/23 - 09/11/23", // Dia do pagamento Mensal
    // 0 = bloqueado; 1 = pendente; 2 = Verificado
    "status": 2,
    // Treino atual
    "treinoActual": "26/10/23 - 26/11/23",
    // Próxima Treino 
    "treinoNext": "27/11/23",
    // Avaliação atual
    "valuationActual": "?",
    // Próxima avaliação 
    "valuationNext": "?"
  }
})
