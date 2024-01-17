export default defineEventHandler((event) => {
  return [
    // Série Atual
    { num: 'Exercício 1', nome: 'Extensora', sets: 3, reps: '7 c/3" + 7', rest: '40"', grupo: '', obs: 'Fazer 7 repetições segurando 3 segundos a cada repetição e + 7 direto no final.', img: 'https://m.leandrocesar.com/exe/extensora.gif'},
    { num: 'Exercício 2', nome: 'Agachamento Búlgaro', sets: 3, reps: '10', rest: '40"', grupo: '', obs: 'Fazer segurandos pesos nas mãos.', img: 'https://m.leandrocesar.com/exe/bulgaro.gif'},
    { num: 'Exercício 3', nome: 'Agachamento Sumô', sets: 3, reps: '15', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/sumo.gif'},
    { num: 'Exercício 4', nome: 'Mesa flexora', sets: 3, reps: '10 c/1" + 10"', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/mesaFlexora.gif'},
    { num: 'Exercício 5', nome: 'Stiff', sets: 3, reps: '10', rest: '40"', grupo: '', obs: 'Falhando.', img: 'https://m.leandrocesar.com/exe/stiffHBL.gif'},
    { num: 'Exercício 6', nome: 'Agachamento Smith', sets: 4, reps: '12', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/squatSmith.gif'},
    { num: 'Exercício 7', nome: 'Abdução de quadril na polia baixa', sets: 3, reps: '12', rest: '40"', grupo: '', obs: 'Segurar 2 segundos a cada repetição.', img: 'https://m.leandrocesar.com/exe/abducaoPolia.gif'},
    { num: 'Exercício 8', nome: 'Elevação Pélvica', sets: 3, reps: '12', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/elevacaoPelvica.gif'},
    { num: 'Exercício 9', nome: 'Flexão de quadril (caneleira)', sets: 3, reps: '10', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/flexaoQuadril.gif'},
    { num: 'Exercício 10', nome: 'Panturrilha aparelho em pé', sets: 2, reps: '20 (2t)', rest: '40"', grupo: '', obs: 'FAzer com 2 tempos a cada repetição.', img: 'https://m.leandrocesar.com/exe/panturrilhaAparelho.gif'},
    { num: 'Exercício 11', nome: 'Panturrilha sentada no aparelho', sets: 3, reps: '10 +10" +10', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/panturrilhaSentado.gif'},

    // { id: 1, num: 'Exercício 1', nome: 'Leg press horizontal', sets: 3, reps: '20', rest: '50"', grupo: '', obs: 'Fazer com os pés paralelos mais pra cima.', img: 'https://m.leandrocesar.com/exe/legpress.gif'},
    // { id: 2, num: 'Exercício 2', nome: 'Extensora', sets: 3, reps: '15', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/extensora.gif'},
    // { id: 3, num: 'Exercício 3', nome: 'Mesa flexora', sets: 3, reps: '8 +10"', rest: '50"', grupo: '', obs: 'Fazer 8 repetições e segurar 10 segundos no final.', img: 'https://m.leandrocesar.com/exe/mesaFlexora.gif'},
    // { id: 4, num: 'Exercício 4', nome: 'Agachamento Sumô', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/sumo.gif'},
    // { id: 5, num: 'Exercício 5', nome: 'Stiff', sets: 3, reps: '15', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/stiffHBL.gif'},
    // { id: 6, num: 'Exercício 6', nome: 'Abdutora', sets: 3, reps: '10 / 15 2t', rest: '50"', grupo: '', obs: 'Fazer 10 repetições, diminuir 1 placa: fazer 15 repetições com 2 tempos.', img: 'https://m.leandrocesar.com/exe/abdutora.gif'},
    // { id: 7, num: 'Exercício 7', nome: 'Leg press 45°', sets: 3, reps: '12', rest: '50"', grupo: '', obs: 'Colocar os bancos e pés bem mais alto; cuidado com a lombar.', img: 'https://m.leandrocesar.com/exe/leg45.gif'},
    // { id: 8, num: 'Exercício 8', nome: 'Agachamento aparelho', sets: 3, reps: '10', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/hacksquat.gif'},
    // { id: 9, num: 'Exercício 9', nome: 'Panturrilha aparelho em pé', sets: 3, reps: '20', rest: '50"', grupo: '', obs: 'Fazer 20 repetições + curtas até a falha.', img: 'https://m.leandrocesar.com/exe/panturrilhaAparelho.gif'},
    // { id: 10, num: 'Exercício 10', nome: 'Abdominal infra no solo', sets: 3, reps: '25', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/abdominalInfra.gif'},

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
