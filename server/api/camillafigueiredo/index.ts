export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Camilla",
    "nomeCompleto": "Camilla Figueiredo",
    "email": "",
    "senha": "1234",
    "foto": "https://m.leandrocesar.com/img/camillafigueiredo.jpeg",
    "servico": "Consultoria on-line",
    "objetivo": "Definição",
    "tempo": "60 min.",
    "dias": "6 dias",
    "treinoA": "Peito/Tríceps",
    "treinoB": "Gluteo/Posterior",
    "treinoC": "Costa/Bíceps",
    "treinoD": "Quadriceps",
    
    // Dados Menu Global
    "periodo": "22/01/24 - 22/02/24",
    "status": 2,
    // Treino atual
    "treinoActual": "23/01/24 - 22/02/24",
    // Próxima Treino 
    "treinoNext": "23/02/24",
    // Avaliação atual
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
