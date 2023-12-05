export default defineEventHandler((event) => {
  return [
    // Série Atual
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
   
   // Modelo:
   //  { num: 'Exercício', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'}
   
   // Série 1
   // { num: 'Exercício 1', nome: 'Extensora', sets: 4, reps: '8 +10" +4', rest: '40"', grupo: 'Quadriceps', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'},
   // { num: 'Exercício 2', nome: 'Agachamento Búlgaro', sets: 3, reps: '10', rest: '40"', grupo: 'Quadriceps', obs: '*Segurar halteres de 7 kg;', img: 'https://m.leandrocesar.com/img/preImagem.png' },
   // { num: 'Exercício 3', nome: 'Agachamento Sumô', sets: 3, reps: '20 (2T)', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer sobre os steps, falhando;', img: 'https://m.leandrocesar.com/img/preImagem.png' },
   // { num: 'Exercício 4', nome: 'Abdominal infra', sets: 3, reps: '20', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer na paralela;', img: 'https://m.leandrocesar.com/img/preImagem.png' },
   // { num: 'Exercício 5', nome: 'Adução de quadril', sets: 3, reps: '12', rest: '20"', grupo: 'Quadriceps', obs: '*Fazer na polia Baixa;', img: 'https://m.leandrocesar.com/img/preImagem.png' },
   // { num: 'Exercício 6', nome: 'Agachamento no smith', sets: 4, reps: '10', rest: '40"', grupo: 'Quadriceps', obs: '*Falhando, fazer até 80º de amplitude;', img: 'https://m.leandrocesar.com/img/preImagem.png' },
   // { num: 'Exercício 7', nome: 'Cadeira adutora', sets: 3, reps: '15 +15c +iso', rest: '40"', grupo: 'Quadriceps', obs: '*c =curtas; iso= isometria= segurar até não aguentar mais;', img: 'https://m.leandrocesar.com/img/preImagem.png' },
   // { num: 'Exercício 8', nome: 'Abs. Remador Completo', sets: 3, reps: 'Falha', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer até não aguentar mais;', img: 'https://m.leandrocesar.com/img/preImagem.png' },
   // { num: 'Exercício 9', nome: 'Jump Squat', sets: 3, reps: '20"', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer com os pés abduznumos; executar os saltos em 20 segundos;', img: 'https://m.leandrocesar.com/img/preImagem.png' },
   // { num: 'Exercício 10', nome: 'Panturrilhas em pé', sets: 3, reps: '20(2T)', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer no aparelho;', img: 'https://m.leandrocesar.com/img/preImagem.png'},
  ]
})
