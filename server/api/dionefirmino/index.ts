export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Dione",
    "nomeCompleto": "Dione Firmino da Silva",
    "email": "",
    "senha": "1234",
    "foto": "https://m.leandrocesar.com/img/dionefirmino.jpeg",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Perna",
    "treinoB": "Braço/abdomen",
    "treinoC": "",
    
    // Dados Menu Global
    "periodo": "11/12/23 - 11/01/24",
    "status": 2,
    // Treino atual
    "treinoActual": "03/01/24 - 02/02/24",
    // Próxima Treino 
    "treinoNext": "03/02/24",
    // Avaliação atual
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
