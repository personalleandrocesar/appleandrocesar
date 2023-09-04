export default defineEventHandler((event) => {
  return {
      "nome": "Leandro",
      "nomeCompleto": "Leandro Cesar Ramos da Costa",
      "email": "leandrocesar.goo@gmail.com",
      "senha": "1234",
      "idade": 36,
      "avaliação": {
        "idade": 36,
        "altura": 1.8
      },
      "treino": {
        1: {
          "nome": "Cadeira Extensora",
          "sets": "3" ,
          "reps": "15",
          " rest": '40"'
        },
        2: {
          "nome": "Cadeira Flexora",
          "sets": "3",
          "reps": "15",
        }
      }
  }
})
