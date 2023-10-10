export default defineEventHandler((event) => {
  return  [

    
    // Modelo:
    //  { num: 'Exercício', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://m.leandrocesar.com/img/preImagem.png'}
    
    // Série 1
    { num: 'Exercício 1', nome: 'Mesa flexora', sets: 4, reps: '10 +10"', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer +10" de isometria no final do movimento;' },
    { num: 'Exercício 2', nome: 'Stiff', sets: 3, reps: '20', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer falhando;' },
    { num: 'Exercício 3', nome: 'Elevação de pelve', sets: 3, reps: '15', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer com HNL no banco reto;' },
    { num: 'Exercício 4', nome: 'Cadeira flexora', sets: 3, reps: '20', rest: '40"', grupo: 'Quadriceps', obs: '*Falhando na última repetição;' },
    { num: 'Exercício 5', nome: 'Extensão de gluteo', sets: 3, reps: '12', rest: '20"', grupo: 'Quadriceps', obs: '*Fazer na polia baixa' },
    { num: 'Exercício 6', nome: 'Hiperextensão lombar', sets: 3, reps: '20', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer no aparelho;' },
    { num: 'Exercício 7', nome: 'Leg press 45º', sets: 3, reps: '10 (c/ 1")', rest: '40"', grupo: 'Quadriceps', obs: '*Segurar 1 segundo em baixo a cada repetição;' },
    { num: 'Exercício 8', nome: 'Abdutora', sets: 3, reps: '8/15', rest: '40"', grupo: 'Quadriceps', obs: '*Drop-set: fazer 8 rep., -diminúi o peso: +15;' },
    { num: 'Exercício 9', nome: 'Prancha lateral', sets: 3, reps: '15', rest: '40"', grupo: 'Quadriceps', obs: '*Fazer dinâmicamente - encostando a parte lateral do gluteo no solo;' },
    { num: 'Exercício 10', nome: 'Agachamento Livre', sets: 3, reps: '12', rest: '40"', grupo: 'Quadriceps', obs: '*Descer até 80º' },
    
    // Série Atual
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
