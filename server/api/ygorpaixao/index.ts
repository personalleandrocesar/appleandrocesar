export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Ygor",
    "nomeCompleto": "Ygor Dias da Paixao",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/ygorpaixao.png",
    "servico": "Personal Trainer",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Peito/ombro/tríceps/quadríceps",
    "treinoB": "Costa/bíceps/posterior/abdômen",
    "treinoC": "",
    
    // Dados Menu Global
    "periodo": "30/11/23 - 30/12/23",
    "status": 2,
    // Treino atual
    "treinoActual": "12/12/23 - 11/01/24",
    // Próxima Treino 
    "treinoNext": "13/01/2024",
    // Avaliação atual
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
