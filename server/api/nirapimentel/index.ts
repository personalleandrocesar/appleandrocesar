export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Nira",
    "nomeCompleto": "Alcenira Pimentel",
    "email": "alceniralucas@gmailcom",
    "senha": "1234",
    "foto": "https://m.leandrocesar.com/img/nirapimentel.png",
    "servico": "Consultoria on-line",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "3-4 dias",
    "treinoA": "Quadríceps/Peito/Tríceps",
    "treinoB": "Posterior/Gluteo/Costas",
    "treinoC": "",
    
    // Dados Menu Global
    "periodo": "16/01/24 - 16/02/24",
    "status": 2,
    // Treino atual
    "treinoActual": "16/01/24 - 15/02/24",
    // Próxima Treino 
    "treinoNext": "16/02/24",
    // Avaliação atual
    "valuationActual": "10/11/23",
    // Próxima avaliação 
    "valuationNext": "15/02/24"
  }
})
