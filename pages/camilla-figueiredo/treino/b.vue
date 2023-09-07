<script setup>
const layout = "duo"

import { ref, computed } from 'vue'

const dataTreino = ref({
  treino: [
    // serie B
    { id: 'Exercício 1', nome: 'Mesa flexora', sets: 4, reps: '10 +10"', rest: '40"', obs: '*Fazer +10" de isometria no final do movimento;' },
    { id: 'Exercício 2', nome: 'Stiff', sets: 3, reps: '20', rest: '40"', obs: '*Fazer falhando;' },
    { id: 'Exercício 3', nome: 'Elevação de pelve', sets: 3, reps: '15', rest: '40"', obs: '*Fazer com HNL no banco reto;' },
    { id: 'Exercício 4', nome: 'Cadeira flexora', sets: 3, reps: '20', rest: '40"', obs: '*Falhando na última repetição;' },
    { id: 'Exercício 5', nome: 'Extensão de gluteo', sets: 3, reps: '12', rest: '20"', obs: '*Fazer na polia baixa' },
    { id: 'Exercício 6', nome: 'Hiperextensão lombar', sets: 3, reps: '20', rest: '40"', obs: '*Fazer no aparelho;' },
    { id: 'Exercício 7', nome: 'Leg press 45º', sets: 3, reps: '10 (c/ 1")', rest: '40"', obs: '*Segurar 1 segundo em baixo a cada repetição;' },
    { id: 'Exercício 8', nome: 'Abdutora', sets: 3, reps: '8/15', rest: '40"', obs: '*Drop-set: fazer 8 rep., -diminúi o peso: +15;' },
    { id: 'Exercício 9', nome: 'Prancha lateral', sets: 3, reps: '15', rest: '40"', obs: '*Fazer dinâmicamente - encostando a parte lateral do gluteo no solo;' },
    { id: 'Exercício 10', nome: 'Agachamento Livre', sets: 3, reps: '12', rest: '40"', obs: '*Descer até 80º' },
    // Adicione mais exercícios conforme necessário
  ]
})

const treino = ref(0)

const currentExercise = computed(() => {
  return dataTreino.value.treino[treino.value]
})

const pending = ref(false)

const previousExercise = () => {
  if (treino.value > 0) {
    treino.value--
  }
}

const nextExercise = () => {
  if (treino.value < dataTreino.value.treino.length - 1) {
    treino.value++
  }
}
</script>

<template>
  <NuxtLayout :name="layout">
    <div class="main-div-one">

      <div class="conf">
        <Icon name="fluent:target-arrow-16-filled" />
        <h3>
          Definição
        </h3>

      </div>
      <div class="conf">
        <Icon name='mdi:alpha-b-box' />
        <h3>
          Glúteo
        </h3>

      </div>
      <div class="conf">
        <Icon name="material-symbols:timer-rounded" />
        <h3>
          60 minutos
        </h3>

      </div>


    </div>

    <div class="main-div-two">

      <h3>
        {{ currentExercise.id }}
      </h3>
      <div class="square">
        <b>
          Futura imagem(.gif) ou vídeo!
        </b>
      </div>
      <h2>
        {{ currentExercise.nome }}
      </h2>

      <p v-if="pending">Carregando...</p>
      <div v-else>

        <div class="exercise">
          <div class="exercise-square">
            <h4>
              Séries
            </h4>
            <h4>
              {{ currentExercise.sets }}
            </h4>
          </div>
          <div class="exercise-square">
            <h4>
              Repetições
            </h4>
            <h4>
              {{ currentExercise.reps }}
            </h4>

          </div>
          <div class="exercise-square">
            <h4>
              Intervalo
            </h4>
            <h4>
              {{ currentExercise.rest }}
            </h4>

          </div>

        </div>
        <div class="obs">
          {{ currentExercise.obs }}
          <br>
        </div>
      </div>

      <div class="button">
        <span @click="previousExercise">
          <Icon name="mdi:chevron-left" /> ANTERIOR
        </span>
        <span @click="nextExercise">
          PRÓXIMO
          <Icon name="mdi:chevron-right" />
        </span>
      </div>
    </div>
    <br>
    <br>
    <br>




    <div>
    </div>

  </NuxtLayout>
</template>

    



<style scoped>
body {
  background: #fff;
  color: #616161;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
}

.main-div-one {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.main-div-two {
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.main-div-two .icon {
  zoom: 2;
  cursor: pointer;
}

.main-div-two h2 {
  margin-left: 10px;
  text-transform: uppercase;
}

.main-div-two h3 {
  margin-left: 10px;
}

.exercise {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
  justify-content: center;
}

.exercise-square {
  background-color: #095D62;
  color: #fff;
  width: max-content;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 5px 10px;
  height: 80px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  margin: 20px 5px 0 5px;
  border-radius: 20px;
  color: #000;
  background-color: #095D6220;
  opacity: .8;
  backdrop-filter: blur(5px);
}

.exercise-square h4:nth-child(1) {
  color: #095D62;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.button .icon {
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.button span:nth-child(1) {
  background-color: #095D62;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding-right: 25px;
}

.button span:nth-child(2) {
  background-color: #095D62;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding-left: 28px;
}

.obs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 0 25px 10px 25px;

}

.icon {
  zoom: 1.4;
  color: #fadb41;
}

.conf {
  color: #fff;
  height: 80px;
  background-color: #095D62;
  backdrop-filter: blur(15px);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  width: 100%;
  margin: 20px 10px;
  border-radius: 20px;
}

.square {
  height: 150px;
  color: #000;
  background-color: #095D6220;
  backdrop-filter: blur(15px);
  opacity: .5;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 20px auto;
  border-radius: 20px;
}

</style>