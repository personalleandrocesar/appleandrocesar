export default defineEventHandler((event) => {
  return [
    // Série Atual
    { num: 'Exercício 1', nome: 'Leg press horizontal', sets: 3, reps: '20', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/legpress.gif'},
    { num: 'Exercício 2', nome: 'Extensora', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/extensora.gif'},
    { num: 'Exercício 3', nome: 'Adutora', sets: 3, reps: '15', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/adutora.gif'},
    { num: 'Exercício 4', nome: 'Agachamento sumô', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/sumo.gif'},
    { num: 'Exercício 5', nome: 'Supino inclinado com halteres', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/supinoInclinado.gif'},
    { num: 'Exercício 6', nome: 'Elevação frontal', sets: 3, reps: '10', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/elevacaoFrontalHBC.gif'},
    { num: 'Exercício 7', nome: 'Tríceps corda na polia alta', sets: 3, reps: '20', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/tricepsCorda.gif'},
    { num: 'Exercício 8', nome: 'Tríceps máquina', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/tricepsMaquina.gif'},
    { num: 'Exercício 9', nome: 'Abdominal máquina', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/abdominalMaquina.gif'},

    
    // { num: 'Exercício 1', nome: 'Extensora', sets: 3, reps: '7 c/3" + 7', rest: '50"', grupo: '', obs: 'Fazer 7 repetições segurando 3 segundos a cada repetição e + 7 direto no final.', img: 'https://m.leandrocesar.com/exe/extensora.gif'},
    // { num: 'Exercício 2', nome: 'Agachamento Búlgaro', sets: 3, reps: '10', rest: '40"', grupo: '', obs: 'Fazer segurandos pesos nas mãos.', img: 'https://m.leandrocesar.com/exe/bulgaro.gif'},
    // { num: 'Exercício 3', nome: 'Agachamento Sumô', sets: 3, reps: '15', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/sumo.gif'},
    // { num: 'Exercício 4', nome: 'Mesa flexora', sets: 3, reps: '10 c/1" + 10"', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/mesaFlexora.gif'},
    // { num: 'Exercício 5', nome: 'Stiff', sets: 3, reps: '10', rest: '40"', grupo: '', obs: 'Falhando.', img: 'https://m.leandrocesar.com/exe/stiffHBL.gif'},
    // { num: 'Exercício 6', nome: 'Agachamento Smith', sets: 4, reps: '12', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/squatSmith.gif'},
    // { num: 'Exercício 7', nome: 'Abdução de quadril na polia baixa', sets: 3, reps: '12', rest: '40"', grupo: '', obs: 'Segurar 2 segundos a cada repetição.', img: 'https://m.leandrocesar.com/exe/abducaoPolia.gif'},
    // { num: 'Exercício 8', nome: 'Elevação Pélvica', sets: 3, reps: '12', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/elevacaoPelvica.gif'},
    // { num: 'Exercício 9', nome: 'Flexão de quadril (caneleira)', sets: 3, reps: '10', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/flexaoQuadril.gif'},
    // { num: 'Exercício 10', nome: 'Panturrilha aparelho em pé', sets: 2, reps: '20 (2t)', rest: '40"', grupo: '', obs: 'FAzer com 2 tempos a cada repetição.', img: 'https://m.leandrocesar.com/exe/panturrilhaAparelho.gif'},
    // { num: 'Exercício 10', nome: 'Panturrilha sentada no aparelho', sets: 3, reps: '10 +10" +10', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/panturrilhaSentado.gif'},


    // Modelo:
    // { num: 'Exercício 1', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
    // { num: 'Exercício 2', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
    // { num: 'Exercício 3', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
    // { num: 'Exercício 4', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
    // { num: 'Exercício 5', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
    // { num: 'Exercício 6', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
    // { num: 'Exercício 7', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
    // { num: 'Exercício 8', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
    // { num: 'Exercício 9', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
    // { num: 'Exercício 10', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
    // { num: 'Exercício 11', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
   
  ]
})
