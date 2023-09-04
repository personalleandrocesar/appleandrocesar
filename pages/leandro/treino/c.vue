<script setup>
const layout = "duo"

import { ref, computed } from 'vue'

const dataTreino = ref({
  treino: [
    { nome: 'Exercício 1', sets: 3, reps: 12, rest: '40"' },
    { nome: 'Exercício 2', sets: 4, reps: 10 },
    { nome: 'Exercício 3', sets: 3, reps: 15 },
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
    <div class="main">
          
      <div class="main-div-one">
            
          <div class="square">
              
          </div>  
            
        <div class="square">
              
              
              
        </div>  
            
        <div class="square">
              
              
              
        </div>  
            
      </div>

    </div>


    <h1>Avaliação</h1>
    <div>
      <p v-if="pending">Carregando...</p>
      <div v-else>

          <div>
            <pre>
              {{ currentExercise.nome }}
              {{ currentExercise.sets }}
              {{ currentExercise.reps }}
              {{ currentExercise.rest }}
            </pre>

            <p>
              <button @click="previousExercise">Anterior</button>
              -
              <button @click="nextExercise">Próximo</button>
            </p>
          </div>
      </div>
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

.square {  
  color:#e1a918;
  background-color: #095D6270;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 1;
  backdrop-filter: blur(25px);
  height: 15px;
  width: 100%;
  margin: 20px 10px;
  border-radius: 20px;
}

</style>