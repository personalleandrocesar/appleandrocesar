export default defineEventHandler((event) => {
  return [
    // Série Atual
     {id: 1, num: 'Exercício 1', nome: 'Hack Machine', sets: 3, reps: '', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/hacksquat.gif'},
     {id: 2, num: 'Exercício 2', nome: 'Tríceps Máquina', sets: 3, reps: '', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/tricepsMaquina.gif'},
     {id: 3, num: 'Exercício 3', nome: 'Extensora', sets: 3, reps: '', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/extensora.gif'},
     {id: 4, num: 'Exercício 4', nome: 'Adutora', sets: 3, reps: '', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/adutora.gif'},
     {id: 5, num: 'Exercício 5', nome: 'Supino Hammer', sets: 3, reps: '', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
     {id: 7, num: 'Exercício 7', nome: 'Desenvolvimento sentado (HBC)', sets: 3, reps: '', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
     {id: 8, num: 'Exercício 8', nome: 'Agachamento Sumô', sets: 3, reps: '', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
     {id: 9, num: 'Exercício 9', nome: 'Tríceps Corda polia alta', sets: 3, reps: '', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
     {id: 10, num: 'Exercício 10', nome: 'Flexão de quadril c/ caneleira', sets: 3, reps: '', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},
     {id: 11, num: 'Exercício 11', nome: 'Abdominal supra', sets: 3, reps: '', rest: '50"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/exe/preImagem.gif'},



    // A
   { id: 1, num: 'Exercício 1', nome: 'Agachamento no Smith', sets: 4, reps: '15', rest: '50"', grupo: 'Quadríceps', obs: 'Descer até 80°. Fazer falhando;', img: 'https://m.leandrocesar.com/img/preImagem.png'},
   { id: 2, num: 'Exercício 2', nome: 'Flexão de quadril', sets: 3, reps: '12', rest: '40"', grupo: 'Quadríceps', obs: 'Fazer com Caneleriras.', img: 'https://m.leandrocesar.com/img/preImagem.png'},
   { id: 3, num: 'Exercício 3', nome: 'Extensora', sets: 4, reps: '12 c/ 2"', rest: '60"', grupo: 'Quadríceps', obs: 'Segurar 2 segundos a cada repetição.', img: 'https://m.leandrocesar.com/img/preImagem.png'},
   { id: 4, num: 'Exercício 4', nome: 'Leg press Horizontal', sets: 3, reps: '8 + 8', rest: '40"', grupo: 'Quadríceps', obs: 'Fazer 8 com as pernas juntas + 8 com os pés mais afastados(paralelos); Fazer falhando;', img: 'https://m.leandrocesar.com/img/preImagem.png'},
   { id: 5, num: 'Exercício 5', nome: 'Afundo c/ halteres', sets: 3, reps: '10', rest: '50"', grupo: 'Quadríceps', obs: 'Fazer alternando p/ trás(manter os joelhos em 90°, quando for descer).', img: 'https://m.leandrocesar.com/img/preImagem.png'},
   { id: 6, num: 'Exercício 6', nome: 'Prancha frontal no solo', sets: 3, reps: 'falha', rest: '50"', grupo: 'Abdômen', obs: 'Fazer o máximo que puder.', img: 'https://m.leandrocesar.com/img/preImagem.png'},
   { id: 7, num: 'Exercício 7', nome: 'Cadeira adutora', sets: 3, reps: '20 c/ 1"', rest: '40"', grupo: 'Adutores', obs: 'Fazer façlhando.', img: 'https://m.leandrocesar.com/img/preImagem.png'},
   { id: 8, num: 'Exercício 8', nome: 'Agachamento Sumô', sets: 4, reps: '10 + 10', rest: '40"', grupo: 'Quadríceps', obs: 'Rest-pause: Fazer 12 repetições, descansa 10" + 12 repetições; Descer só até 80°', img: 'https://m.leandrocesar.com/img/preImagem.png'},
   { id: 9, num: 'Exercício 9', nome: 'Abdominal Remador c/ peso', sets: 3, reps: '25', rest: '40"', grupo: 'Abdômen', obs: 'Fazer sem encostar os pés no chão.', img: 'https://m.leandrocesar.com/img/preImagem.png'},
   { id: 10, num: 'Exercício 10', nome: 'Extensora unilateral', sets: 3, reps: '8', rest: '30"', grupo: 'Quadríceps', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
   { id: 11, num: 'Exercício 11', nome: 'Panturrilha em pé', sets: 3, reps: '8 / 20 + isometria', rest: '50"', grupo: 'Perna', obs: 'Drop-set: Fazer 8 pesado, -2 placas: 20 repetições + contração estática em cima até a falha; fazer no aparelho;', img: 'https://m.leandrocesar.com/img/preImagem.png'},

    // B
    { num: 'Exercício 1', nome: 'Flexora vertical', sets: 3, reps: '12', rest: '20"', grupo: 'Isquiotibiais', obs: 'Segurar em cima, 1 segundo a cada repetição.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 2', nome: 'Levantamento terra', sets: 3, reps: '12', rest: '50"', grupo: 'Gluteo', obs: 'Descer até 90º.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 3', nome: 'Stiff', sets: 3, reps: '12', rest: '50"', grupo: 'Isquiotibiais', obs: 'Fazer falhando.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 4', nome: 'Leg press 45º', sets: 4, reps: '15', rest: '60"', grupo: 'Isquiotibiais', obs: 'Descer até uns 85°; colocar os pés e o banco um poucop mais pro alto; cuidado com a lombar; ', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 5', nome: 'Mesa flexora', sets: 4, reps: '8 c/ 1"', rest: '40"', grupo: 'Isquiotibiais', obs: 'Segurar 1 segundo em cima a cada repetição.', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 6', nome: 'Extensão de quadril + abdução', sets: 3, reps: '10 / 8', rest: '30"', grupo: 'Gluteo', obs: 'Fazer na polia baixa, 10 repetições de extensão + 8 de abdução, depois troca a perna; fazer alternando; ', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 7', nome: 'Bom dia', sets: 3, reps: '12', rest: '40"', grupo: 'Lombar', obs: 'Fazer com o HBM (halter barra média).', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 8', nome: 'Agachamento Livre - HBL', sets: 3, reps: '12', rest: '50"', grupo: 'Isquiotibiais', obs: 'Descer até 90º', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 9', nome: 'Elevação de pelve unilateral', sets: 3, reps: '12', rest: '30"', grupo: 'Isquiotibiais', obs: 'Fazer no banco usando só uma perna;', img: 'https://m.leandrocesar.com/img/preImagem.png' },
    { num: 'Exercício 10', nome: 'Abdutora', sets: 3, reps: '12 + 12', rest: '40"', grupo: 'Abdutores', obs: 'Rest-pause: fazer 12 repetições, descansa 12", faz + 12 repetições', img: 'https://m.leandrocesar.com/img/preImagem.png' },
  ]
})
