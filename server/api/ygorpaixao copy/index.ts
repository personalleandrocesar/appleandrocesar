export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Rosa",
    "nomeCompleto": "Rosa Maria Gomes Rodrigues",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/rosarodrigues.png",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Peito/ombro/tríceps/quadríceps",
    "treinoB": "Costa//bíceps/posterior/abdômen",
    "treinoC": "",
    
    // Dados Menu Global
    "periodo": "17/11/23 - 17/12/23",
    "status": 2,
    // Treino atual
    "treinoActual": "13/12/23 - 12/01/24",
    // Próxima Treino 
    "treinoNext": "13/01/2024",
    // Avaliação atual'T
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
