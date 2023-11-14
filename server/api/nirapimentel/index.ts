export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Nira",
    "nomeCompleto": "Alcenira Pimentel",
    "email": "alceniralucas@gmailcom",
    "senha": "1234",
    "foto": "https://m.leandrocesar.com/img/nirapimentel.png",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "3-4 dias",
    "treinoA": "Perna",
    "treinoB": "Braço/abdomen",
    "treinoC": "",
    
    // Dados Menu Global
    "periodo": "13/11/23 - 13/12/23",
    "status": 2,
    // Treino atual
    "treinoActual": "13/11/23 - 12/12/23",
    // Próxima Treino 
    "treinoNext": "13/12/23",
    // Avaliação atual
    "valuationActual": "10/11/23",
    // Próxima avaliação 
    "valuationNext": "10/02/24"
  }
})
