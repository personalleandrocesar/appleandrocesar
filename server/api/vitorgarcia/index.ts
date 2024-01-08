export default defineEventHandler((event) => {
  return {
    "nome": "Vitor",
    "nomeCompleto": "Vitor Garcia",
    "email": "",
    "senha": "",
    "foto": "https://m.leandrocesar.com/img/vitorgarcia.jpeg",
    "servico": "Consultoria",
    "objetivo": "Hipertrofia",
    "tempo": "60 min.",
    "dias": "5 dias",
    "treinoA": "Peito/Ombro/Quadríceps",
    "treinoB": "Costa/Bíceps/Abdominal",
    "treinoC": "",

    // Dados Menu Global
    "periodo": "04/01/24 - 04/02/24", // Dia do pagamento Mensal
    // 0 = bloqueado; 1 = pendente; 2 = Verificado
    "status": 2,
    // Treino atual
    "treinoActual": "08/01/24 - 07/02/24",
    // Próxima Treino 
    "treinoNext": "08/02/24",
    // Avaliação atual
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
