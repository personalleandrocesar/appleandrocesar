export default defineEventHandler((event) => {
  return  [
    // Série Atual
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
    
    // Modelo:
    //  { num: 'Exercício', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'}
    
    // Série 1
    // { num: 'Exercício 7', nome: 'Leg press 45º', sets: 3, reps: '15 (2T)', rest: '50"', grupo: 'Gluteo', obs: '*Fazer com 2 tempos em baixo ("bombeada") a cada repetição.;' },
    // { num: 'Exercício 2', nome: 'Stiff', sets: 3, reps: '20', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer falhando;' },
    // { num: 'Exercício 4', nome: 'Cadeira flexora', sets: 3, reps: '20', rest: '40"', grupo: 'Quadriceps', obs: '*Falhando na última repetição;' },
    // { num: 'Exercício 10', nome: 'Agachamento Livre', sets: 3, reps: '12', rest: '40"', grupo: 'Quadriceps', obs: '*Descer até 80º' },
    // { num: 'Exercício 1', nome: 'Mesa flexora', sets: 4, reps: '10 +10"', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer +10" de isometria no final do movimento;' },
    // { num: 'Exercício 8', nome: 'Abdutora', sets: 3, reps: '8/15', rest: '40"', grupo: 'Quadriceps', obs: '*Drop-set: fazer 8 rep., -diminúi o peso: +15;' },
    // { num: 'Exercício 3', nome: 'Elevação de pelve', sets: 3, reps: '15', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer com HNL no banco reto;' },
    // { num: 'Exercício 5', nome: 'Extensão de gluteo', sets: 3, reps: '12', rest: '20"', grupo: 'Quadriceps', obs: '*Fazer na polia baixa' },
    // { num: 'Exercício 9', nome: 'Prancha lateral', sets: 3, reps: '15', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer dinâmicamente - encostando a parte lateral do gluteo no solo;' },
    // { num: 'Exercício 6', nome: 'Hiperextensão lombar', sets: 3, reps: '20', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer no aparelho;' },
  ]
})
