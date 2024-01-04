export default defineEventHandler((event) => {
  // Send JSON response
  return {
    "nome": "Amanda",
    "nomeCompleto": "Amanda de Oliveira Gonçalves",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/amandagoncalves.jpeg",
    "servico": "Personal Trainer",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "6 dias",
    "treinoA": "Peito/Tríceps",
    "treinoB": "Gluteo/Posterior",
    "treinoC": "Costa/Bíceps",
    "treinoD": "Quadriceps",
    
    // Dados Menu Global
    "periodo": "11/12/23 - 11/01/24",
    "status": 2,
    // Treino atual
    "treinoActual": "13/12/23 - 12/01/24",
    // Próxima Treino 
    "treinoNext": "13/01/24",
    // Avaliação atual
    "valuationActual": "01/12/2023",
    // Próxima avaliação 
    "valuationNext": "01/02/2024"
  }
})
