export default defineEventHandler((event) => {
  // Send JSON response
  return {
    "nome": "Naily",
    "nomeCompleto": "Naily Lorena Lessa Santana",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/nailysantana.jpeg",
    "servico": "Personal Trainer",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "4-5 dias",
    "treinoA": "Quadríceps/Peito/Tríceps",
    "treinoB": "Gluteo/Posterior/Costas",
    "treinoC": "",
    
    // Dados Menu Global
    "periodo": "03/01/24 - 03/02/24",
    "status": 2,
    // Treino atual
    "treinoActual": "13/01/24 - 13/02/24",
    // Próxima Treino 
    "treinoNext": "14/02/24",
    // Avaliação atual
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
