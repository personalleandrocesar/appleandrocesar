export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Rosa",
    "nomeCompleto": "Rosa Maria Gomes Rodrigues",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/rosarodrigues.png",
    "servico": "Personal Trainer",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "6 dias",
    "treinoA": "Peito/Tríceps",
    "treinoB": "Gluteo/Posterior",
    "treinoC": "Costa/Bíceps",
    "treinoD": "Quadriceps",
    
    // Dados Menu Global
    "periodo": "18/12/23 - 18/12/23",
    "status": 2,
    // Treino atual
    "treinoActual": "22/12/23 - 21/01/24",
    // Próxima Treino 
    "treinoNext": "22/01/2024",
    // Avaliação atual'T
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
