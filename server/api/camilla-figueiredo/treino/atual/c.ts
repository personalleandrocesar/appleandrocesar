export default defineEventHandler((event) => {
  return  [
    // Série Atual
    { num: 'Exercício 1', nome: 'Puxada p/ frente', sets: 3, reps: '6 / 10', rest: '50"', grupo: 'Dorsal', obs: 'Drop-set: faz 6 rep. pesado, + 10 repetições(um pouco mais leve).', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 2', nome: 'Remada na polia baixa', sets: 4, reps: '20', rest: '40"', grupo: 'Dorsal', obs: 'Fazer com a pegada neutra;', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 3', nome: 'Crucifixo inverso', sets: 3, reps: '20', rest: '50"', grupo: 'Dorsal', obs: 'Fazer pegada neutra', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 4', nome: 'Supino inclinado (HBC)', sets: 3, reps: '10', rest: '40"', grupo: 'Peito', obs: 'Fazer com halteres; pegada pronada; falhando.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 5', nome: 'Supino reto (HBL)', sets: 3, reps: '10', rest: '50"', grupo: 'Peito', obs: 'Mãos na direção do cotovelo.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 6', nome: 'Desenvolvimento de ombro (HBM)', sets: 3, reps: '10', rest: '40"', grupo: 'Ombro', obs: 'Fazer sentada ou em pé; pegada pronada.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 7', nome: 'Tríceps na polia alta (Barra V)', sets: 3, reps: '10 / falha', rest: '50"', grupo: 'Tríceps', obs: 'Drop-set: fazer 10 repetições pesado, diminui 2 placas: fazer até a falha', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 8', nome: 'Tríceps mergulho no banco', sets: 3, reps: 'falha', rest: '50"', grupo: 'Tríceps', obs: 'Fazer até a falha.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 9', nome: 'Biceps barra reta (HBM)', sets: 3, reps: '10', rest: '50"', grupo: 'Bíceps', obs: 'Pegada supinada na direção do ombro.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 10', nome: 'Remada alta (HBM)', sets: 3, reps: '15', rest: '40"', grupo: 'Ombro', obs: 'Fazer na barra livre, pegada mais fechada que a largura dos ombros.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 11', nome: 'Elevação lateral de ombros', sets: 3, reps: '20', rest: '40"', grupo: 'Ombro', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 12', nome: 'Bíceps corda na polia baixa', sets: 3, reps: '8 + 8" +8', rest: '50"', grupo: 'Bíceps', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
 
    // Modelo:
    //  { num: 'Exercício', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'}
    
    // Série 1
    // { num: 'Exercício 1', nome: 'Remada no aparelho', sets: 3, reps: '8/ 12', rest: '40"', grupo: 'Quadriceps', obs: 'Fazer com a pegada neutra;' },
    // { num: 'Exercício 2', nome: 'Puxada neutra', sets: 3, reps: '12', rest: '40"', grupo: 'Quadriceps', obs: '' },
    // { num: 'Exercício 3', nome: 'Remada Curvada', sets: 3, reps: '15', rest: '40"', grupo: 'Quadriceps', obs: 'Fazer pegada pronada;' },
    // { num: 'Exercício 4', nome: 'Supino reto', sets: 3, reps: '12', rest: '40"', grupo: 'Quadriceps', obs: '' },
    // { num: 'Exercício 5', nome: 'Desenvolvimento c/ halteres', sets: 3, reps: '12', rest: '40"', grupo: 'Quadriceps', obs: '' },
    // { num: 'Exercício 6', nome: 'Tríceps Máquina', sets: 3, reps: '15', rest: '40"', grupo: 'Quadriceps', obs: '' },
    // { num: 'Exercício 7', nome: 'Remada alta', sets: 3, reps: '15', rest: '40"', grupo: 'Quadriceps', obs: 'Fazer na polia baixa;' },
    // { num: 'Exercício 8', nome: 'Tríceps corda', sets: 3, reps: '15 (c/ 1")', rest: '40"', grupo: 'Quadriceps', obs: 'Segurar 1 segundo a cada repetição' },
    // { num: 'Exercício 9', nome: 'Biceps martelo', sets: 3, reps: '12', rest: '40"', grupo: 'Quadriceps', obs: '' },

  ]
})
