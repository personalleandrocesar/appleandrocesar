export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Amanda",
    "nomeCompleto": "Amanda de Oliveira Gonçalves",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/amandagoncalves.jpeg",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "6 dias",
    "treinoA": "Perna/costa/bíceps/abdômen",
    "treinoB": "Gluteo/peito/ombro/tríceps",
    "treinoC": "",
    
    // Dados Menu Global
    "periodo": "01/11/23 - 01/12/23",
    "status": 2,
    // Treino atual
    "treinoActual": "23/11/23 - 23/12/23",
    // Próxima Treino 
    "treinoNext": "24/12/23",
    // Avaliação atual
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
