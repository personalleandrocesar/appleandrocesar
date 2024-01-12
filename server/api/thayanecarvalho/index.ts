export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Thayane",
    "nomeCompleto": "Thayane Carvalho",
    "email": "thayane.carvalhoo@gmailcom",
    "senha": "1234",
    "foto": "https://m.leandrocesar.com/img/thayanecarvalho.jpeg",
    "servico": "Consultoria on-line",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Perna",
    "treinoB": "Braço/abdomen",
    "treinoC": "",
  
    // Dados Menu Global
    "periodo": "08/01/24 - 08/02/24",
    "status": 2,
    // Treino atual
    "treinoActual": "11/01/24 - 10/02/24",
    // Próxima Treino 
    "treinoNext": "11/02/24",
    // Avaliação atual
    "valuationActual": "13/11/23",
    // Próxima avaliação 
    "valuationNext": "13/02/24"
  }
})
