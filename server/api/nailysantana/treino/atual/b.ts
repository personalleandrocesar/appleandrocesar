export default defineEventHandler((event) => {
  return [
    // Série Atual
    // Modelo:
    { num: 'Exercício 1', nome: 'Puxada neutra fechada', sets: 3, reps: '10', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/puxadaNeutraFechada.jpg'},
    { num: 'Exercício 2', nome: 'Remada na polia baixa', sets: 3, reps: '15', rest: '50"', grupo: '', obs: 'Pegada neutra', img: 'https://m.leandrocesar.com/exe/remadaPoliaBaixa.gif'},
    { num: 'Exercício 3', nome: 'Remada máquina (peg. pronada)', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/remadaMaquina.png'},
    { num: 'Exercício 4', nome: 'Bíceps barra na polia baixa', sets: 3, reps: '10', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/bicepsPolia.gif'},
    { num: 'Exercício 5', nome: 'Panturrilha em pé no aparelho', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/panturrilhaAparelho.gif'},
    { num: 'Exercício 6', nome: 'Abdutora', sets: 3, reps: '', rest: '50"', grupo: '15', obs: '', img: 'https://m.leandrocesar.com/exe/abdutora.gif'},
    { num: 'Exercício 7', nome: 'Cadeira flexora', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/flexora.gif'},
    { num: 'Exercício 8', nome: 'Stiff', sets: 3, reps: '', rest: '50"', grupo: '12', obs: '', img: 'https://m.leandrocesar.com/exe/stiffHBL.gif'},
    { num: 'Exercício 9', nome: 'Bíceps martelo', sets: 3, reps: '15', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/bicepsMartelo.gif'},

    // { num: 'Exercício 1', nome: 'Puxada Supinada + pronada', sets: 3, reps: '8 + 10', rest: '40"', grupo: '', obs: 'Fazer 8 pergada supinada + 10 pegada pronada', img: 'https://m.leandrocesar.com/exe/puxadaFechadaPronada.gif'},
    // { num: 'Exercício 2', nome: 'Remada máquina (peg. pronada)', sets: 3, reps: '15 (2t)', rest: '40"', grupo: 'Fazer com 2 tempos.', obs: '', img: 'https://m.leandrocesar.com/exe/remadaMaquina.png'},
    // { num: 'Exercício 3', nome: 'Remada na polia baixa', sets: 3, reps: '20 (2t)', rest: '40"', grupo: '', obs: 'Fazer com 2 tempos.', img: 'https://m.leandrocesar.com/exe/remadaPoliaBaixa.gif'},
    // { num: 'Exercício 4', nome: 'Remada alta na polia baixa', sets: 3, reps: '12', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/remadaAlta.gif'},
    // { num: 'Exercício 5', nome: 'Bíceps em pé Barra Reta (HBM)', sets: 3, reps: '10', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/bicepsBarra.gif'},
    // { num: 'Exercício 6', nome: 'Supino hammer (reto)', sets: 3, reps: '15', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/supinoRetoHammer.png'},
    // { num: 'Exercício 7', nome: 'Supino Inclinado com halteres', sets: 3, reps: '8', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/supinoInclinado.gif'},
    // { num: 'Exercício 8', nome: 'Supino inclinado barra (HBL)', sets: 3, reps: '10', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/supino45HBL.gif'},
    // { num: 'Exercício 9', nome: 'Tríceps testa com halteres', sets: 3, reps: '12', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/tricepsTestaHBC.gif'},
    // { num: 'Exercício 10', nome: 'Tríceps corda na polia alta', sets: 3, reps: '12 + 12', rest: '40"', grupo: '', obs: 'Fazer rest-pause: Fazer 12 repetições, descansa 10": + 12 repetições.', img: 'https://m.leandrocesar.com/exe/tricepsCorda.gif'},
    // { num: 'Exercício 11', nome: 'Tríceps invertido na polia alta', sets: 3, reps: '15', rest: '40"', grupo: '', obs: 'Fazer com a pegada supinada.', img: 'https://m.leandrocesar.com/exe/tricepsBarra.gif'},


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
