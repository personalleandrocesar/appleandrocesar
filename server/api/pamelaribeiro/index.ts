export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Pâmela",
    "nomeCompleto": "Pâmela Ribeiro",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/pamelaribeiro.jpeg",
    "servico": "Personal Trainer",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Perna",
    "treinoB": "Braço/abdomen",
    "treinoC": "",
    
    // Dados Menu Global
    "periodo": "06/12/23 - 06/01/24",
    "status": 2,
    // Treino atual
    "treinoActual": "07/12/23 - 06/01/24",
    // Próxima Treino 
    "treinoNext": "07/01/2024",
    // Avaliação atual
    "valuationActual": "07/12/2023",
    // Próxima avaliação 
    "valuationNext": "07/02/2024"
  }
})
