export default defineEventHandler((event) => {
  return [
    // Série Atual - Braço (peito/ombro/tríceps)
    { id: 1, num: 'Exercício 1', nome: 'Supino reto hammer', sets: 3, reps: '8 c/2"', rest: '50"', grupo: '', obs: 'Segurar 2 segundos embaixo a cada repetição.', img: 'https://m.leandrocesar.com/exe/supinoHammer.gif' },
    { id: 2, num: 'Exercício 2', nome: 'Supino 45º (HBL)', sets: 3, reps: '10', rest: '50"', grupo: '', obs: 'Fazer com a barra longa.', img: 'https://m.leandrocesar.com/exe/supino45HBL.gif' },
    { id: 3, num: 'Exercício 3', nome: 'Supino 45º (HBC)', sets: 3, reps: '10', rest: '50"', grupo: '', obs: 'Fazer com halteres; pegada neutra.', img: 'https://m.leandrocesar.com/exe/supinoInclinado.gif' },
    { id: 4, num: 'Exercício 4', nome: 'Desenvolvimento hammer', sets: 3, reps: '10', rest: '50"', grupo: '', obs: 'Fazer isometria embaixo e alternar.', img: 'https://m.leandrocesar.com/exe/desenvolvimentoMaquina.gif' },
    { id: 5, num: 'Exercício 5', nome: 'Elevação lateral', sets: 3, reps: '12 | 12', rest: '50"', grupo: '', obs: 'Rest-pause: fazer 12 repetições, descansa 10" + 12 repetições.', img: 'https://m.leandrocesar.com/exe/elevacaoLateralHBC.gif' },
    { id: 6, num: 'Exercício 6', nome: 'Desenvolvimento (HBM)', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/desenvolvimentoHBM.gif' },
    { id: 7, num: 'Exercício 7', nome: 'Tríceps Testa', sets: 3, reps: '12', rest: '50"', grupo: '', obs: 'Pegada neutra.', img: 'https://m.leandrocesar.com/exe/tricepsTestaHBC.gif' },
    { id: 8, num: 'Exercício 8', nome: 'Tríceps corda na polia alta', sets: 3, reps: '12 | 12', rest: '50"', grupo: '', obs: 'Rest-pause: fazer 12 repetições, descansa 10" + 12 repetições.', img: 'https://m.leandrocesar.com/exe/tricepsCorda.gif' },
    { id: 9, num: 'Exercício 9', nome: 'Puxada pronada aberta', sets: 3, reps: '10 c/2"', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/puxadaFrente.gif' },
    { id: 10, num: 'Exercício 10', nome: 'Remada máquina', sets: 3, reps: '12 | 12', rest: '50"', grupo: '', obs: 'Pegada pronada | Pegada neutra.', img: 'https://m.leandrocesar.com/exe/remadaMaquina.png' },
    { id: 11, num: 'Exercício 11', nome: 'Abdominal infra no solo', sets: 3, reps: 'Falha', rest: '50"', grupo: '', obs: 'Segurar a mão no espaldar e descer primeiro o quadril, depois a perna.', img: 'https://m.leandrocesar.com/exe/abdominalInfra.gif' },
   
  // Modelo:
  //  { id: 1, num: 'Exercício 1', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
  //  { id: 2, num: 'Exercício 2', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
  //  { id: 3, num: 'Exercício 3', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
  //  { id: 4, num: 'Exercício 4', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
  //  { id: 5, num: 'Exercício 5', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
  //  { id: 6, num: 'Exercício 6', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
  //  { id: 7, num: 'Exercício 7', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
  //  { id: 8, num: 'Exercício 8', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
  //  { id: 9, num: 'Exercício 9', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
  //  { id: 10, num: 'Exercício 10', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
  //  { id: 11, num: 'Exercício 11', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png' },
   
  ]
})
