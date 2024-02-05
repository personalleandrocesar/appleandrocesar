export default defineEventHandler((event) => {
  return [
    // Série Atual
    { id: 1, num: 'Exercício 1', nome: 'Leg press horizontal', sets: 3, reps: '20', rest: '50"', grupo: '', obs: 'Pés abduzidos.', img: 'https://m.leandrocesar.com/exe/legpress.gif' },
    { id: 2, num: 'Exercício 2', nome: 'Extensora', sets: 3, reps: '15', rest: '50"', grupo: '', obs: 'Segurar c/3" a cada repetição.', img: 'https://m.leandrocesar.com/exe/extensora.gif' },
    { id: 3, num: 'Exercício 3', nome: 'Mesa flexora', sets: 3, reps: '8 +10"', rest: '50"', grupo: '', obs: 'Fazer 8 repetições e segurar 10 segundos no final.', img: 'https://m.leandrocesar.com/exe/mesaFlexora.gif' },
    { id: 4, num: 'Exercício 4', nome: 'Agachamento bulgaro', sets: 3, reps: '10', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/sumo.gif' },
    { id: 5, num: 'Exercício 5', nome: 'Stiff', sets: 3, reps: '15', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/stiffHBL.gif' },
    { id: 6, num: 'Exercício 6', nome: 'Abdutora', sets: 3, reps: '10 / 15 2t', rest: '50"', grupo: '', obs: 'Fazer 10 repetições, diminuir 1 placa: fazer 15 repetições com 2 tempos.', img: 'https://m.leandrocesar.com/exe/abdutora.gif' },
    { id: 7, num: 'Exercício 7', nome: 'Leg press 45°', sets: 3, reps: '12', rest: '50"', grupo: '', obs: 'Colocar os bancos e pés bem mais alto; cuidado com a lombar.', img: 'https://m.leandrocesar.com/exe/leg45.gif' },
    { id: 8, num: 'Exercício 8', nome: 'Agachamento Livre (HBL)', sets: 3, reps: '10', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/backSquat.gif' },
    { id: 9, num: 'Exercício 9', nome: 'Panturrilha aparelho em pé', sets: 3, reps: '20 + 20 curtas', rest: '50"', grupo: '', obs: 'Fazer 20 repetições + 20 curtas.', img: 'https://m.leandrocesar.com/exe/panturrilhaAparelho.gif' },


    // { num: 'Exercício 1', nome: 'Agachamento sumô', sets: 4, reps: '15', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    // { num: 'Exercício 2', nome: 'Extensora', sets: 4, reps: '10 c/ 2"', rest: '40"', grupo: '', obs: 'Segurar 2 segundos em cima a cada repetição.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    // { num: 'Exercício 3', nome: 'Leg press horizontal (unilateral)', sets: 3, reps: '10', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    // { num: 'Exercício 4', nome: 'Flexora vertical', sets: 3, reps: '8 c/2"', rest: '40"', grupo: '', obs: 'Segurar 2 segundos em cima a cada repetição.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    // { num: 'Exercício 5', nome: 'Stiff', sets: 3, reps: '10', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    // { num: 'Exercício 6', nome: 'Cadeira flexora', sets: 3, reps: '10', rest: '40"', grupo: '', obs: 'Falhando.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    // { num: 'Exercício 7', nome: 'Agachamento aparelho', sets: 3, reps: '12', rest: '40"', grupo: '', obs: 'Fazer de frente pro aparelho.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    // { num: 'Exercício 8', nome: 'Panturrilhas em pé no aparelho', sets: 3, reps: '20c +20 + isometria', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    // { num: 'Exercício 9', nome: 'Abdominal máquina', sets: 3, reps: '15', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    // { num: 'Exercício 10', nome: 'Abdominal supra solo', sets: 3, reps: '25', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    // { num: 'Exercício 11', nome: 'Extensão de tronco no aparelho', sets: 3, reps: 'falha', rest: '40"', grupo: '', obs: 'Segurando um peso de 5 kg.', img: 'https://m.leandrocesar.com/img/preImagem.png' },

    // Modelo
    // { num: 'Exercício 1', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
    // { num: 'Exercício 2', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
    // { num: 'Exercício 3', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
    // { num: 'Exercício 4', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
    // { num: 'Exercício 5', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
    // { num: 'Exercício 6', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
    // { num: 'Exercício 7', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
    // { num: 'Exercício 8', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
    // { num: 'Exercício 9', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
    // { num: 'Exercício 10', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
    // { num: 'Exercício 11', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},

  ]
})
