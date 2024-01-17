export default defineEventHandler((event) => {
  return [
    // Série Atual
    { num: 'Exercício 1', nome: 'Mesa flexora', sets: 3, reps: '10 c/1" + 4', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/mesaFlexora.gif' },
    { num: 'Exercício 2', nome: 'Leg press 45º', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/leg45.gif' },
    { num: 'Exercício 3', nome: 'Elevação Pélvica', sets: 3, reps: '15', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/elevacaoPelvicaHBM.gif' },
    { num: 'Exercício 4', nome: 'Stiff', sets: 3, reps: '15', rest: '50"', grupo: '', obs: 'Falhando.', img: 'https://m.leandrocesar.com/exe/stiffHBL.gif' },
    { num: 'Exercício 5', nome: 'Abdução de quadril na polia baixa', sets: 3, reps: '12', rest: '50"', grupo: '', obs: 'Segurar 2 segundos a cada repetição.', img: 'https://m.leandrocesar.com/exe/abducaoPolia.gif' },
    { num: 'Exercício 6', nome: 'Panturrilha aparelho em pé', sets: 2, reps: '20 (2t)', rest: '50"', grupo: '', obs: 'FAzer com 2 tempos a cada repetição.', img: 'https://m.leandrocesar.com/exe/panturrilhaAparelho.gif' },
    { num: 'Exercício 7', nome: 'Puxada Supinada + pronada', sets: 3, reps: '8 + 10', rest: '50"', grupo: '', obs: 'Fazer 8 pergada supinada + 10 pegada pronada', img: 'https://m.leandrocesar.com/exe/puxadaFechadaPronada.gif'},
    { num: 'Exercício 8', nome: 'Remada máquina (peg. pronada)', sets: 3, reps: '15 (2t)', rest: '50"', grupo: 'Fazer com 2 tempos.', obs: '', img: 'https://m.leandrocesar.com/exe/remadaMaquina.png'},
    { num: 'Exercício 9', nome: 'Remada na polia baixa', sets: 3, reps: '20', rest: '50"', grupo: '', obs: 'Fazer com 2 tempos.', img: 'https://m.leandrocesar.com/exe/remadaPoliaBaixa.gif'},
    { num: 'Exercício 10', nome: 'Remada alta na polia baixa', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/remadaAlta.gif'},
    { num: 'Exercício 11', nome: 'Bíceps em pé Barra Reta (HBM)', sets: 3, reps: '10', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/bicepsBarra.gif'},


    // { id: 1, num: 'Exercício 1', nome: 'Puxada aberta pronada', sets: 3, reps: '12 c/1"', rest: '50"', grupo: '', obs: 'Segurar 1 segundo embaixo a cada repetição.', img: 'https://m.leandrocesar.com/exe/puxadaFrente.gif' },
    // { id: 2, num: 'Exercício 2', nome: 'Remada sentada na polia baixa', sets: 3, reps: '20', rest: '50"', grupo: '', obs: 'Pegada neutra.', img: 'https://m.leandrocesar.com/exe/remadaPoliaBaixa.gif' },
    // { id: 3, num: 'Exercício 3', nome: 'Crucifixo dorsal aparelho', sets: 3, reps: '12', rest: '50"', grupo: '', obs: 'Pegada pronada.', img: 'https://m.leandrocesar.com/exe/crucifixoDorsal.gif' },
    // { id: 4, num: 'Exercício 4', nome: 'Supino inclinado com halteres', sets: 3, reps: '12', rest: '50"', grupo: '', obs: 'Pegada pronada.', img: 'https://m.leandrocesar.com/exe/supinoInclinado.gif' },
    // { id: 5, num: 'Exercício 5', nome: 'Desenvolvimento de ombros (HBC)', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/desenvolvimentoHalteres.gif' },
    // { id: 6, num: 'Exercício 6', nome: 'Remada alta na polia baixa', sets: 3, reps: '12', rest: '50"', grupo: '', obs: 'Pegada fechada.', img: 'https://m.leandrocesar.com/exe/remadaAlta.gif' },
    // { id: 7, num: 'Exercício 7', nome: 'Bíceps em pé na polia baixa', sets: 3, reps: '10', rest: '50"', grupo: '', obs: 'Pegada supinada.', img: 'https://m.leandrocesar.com/exe/bicepsPolia.gif' },
    // { id: 8, num: 'Exercício 8', nome: 'Tríceps corda na polia alta', sets: 3, reps: '20', rest: '50"', grupo: '', obs: 'Fazer 12 repetições, segurar 10 segundos embaixo e fazer + 6 repetiçẽos.', img: 'https://m.leandrocesar.com/exe/tricepsCorda.gif' },
    // { id: 9, num: 'Exercício 9', nome: 'Tríceps barra reta na polia alta', sets: 3, reps: '15', rest: '50"', grupo: '', obs: 'Fazer na polia alta com a ', img: 'https://m.leandrocesar.com/exe/tricepsBarra.gif' },
    // { id: 10, num: 'Exercício 10', nome: 'Tríceps máquina', sets: 3, reps: '20', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/tricepsMaquina.gif' },
    // { id: 11, num: 'Exercício 11', nome: 'Abdominal supra no solo', sets: 3, reps: '25', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/abdominalSupra.gif' },

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
