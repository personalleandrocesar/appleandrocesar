<script setup>
const layout = "duo"

import { ref, computed } from 'vue'

const dataTreino = ref({
  treino: [
    // serie A
    { id: 'Exercício 1', nome: 'Extensora', sets: 4, reps: '8 +10" +4', rest: '40"', obs: '', img: 'https://webapp.leandrocesar.com/assets/preImagem.a7bdea72.jpg' },
    { id: 'Exercício 2', nome: 'Agachamento Búlgaro', sets: 3, reps: '10', rest: '40"', obs: '*Segurar halteres de 7 kg;' },
    { id: 'Exercício 3', nome: 'Agachamento Sumô', sets: 3, reps: '20 (2T)', rest: '40"', obs: '*Fazer sobre os steps, falhando;' },
    { id: 'Exercício 4', nome: 'Abdominal infra', sets: 3, reps: '20', rest: '40"', obs: '*Fazer na paralela;' },
    { id: 'Exercício 5', nome: 'Adução de quadril', sets: 3, reps: '12', rest: '20"', obs: '*Fazer na polia Baixa;' },
    { id: 'Exercício 6', nome: 'Agachamento no smith', sets: 4, reps: '10', rest: '40"', obs: '*Falhando, fazer até 80º de amplitude;' },
    { id: 'Exercício 7', nome: 'Cadeira adutora', sets: 3, reps: '15 +15c +iso', rest: '40"', obs: '*c =curtas; iso= isometria= segurar até não aguentar mais;' },
    { id: 'Exercício 8', nome: 'Abs. Remador Completo', sets: 3, reps: 'Falha', rest: '40"', obs: '*Fazer até não aguentar mais;' },
    { id: 'Exercício 9', nome: 'Jump Squat', sets: 3, reps: '20"', rest: '40"', obs: '*Fazer com os pés abduzidos; executar os saltos em 20 segundos;' },
    { id: 'Exercício 10', nome: 'Panturrilhas em pé', sets: 3, reps: '20(2T)', rest: '40"', obs: '*Fazer no aparelho;' },
   
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
             <Icon name="fluent:target-arrow-16-filled"/> 
             <h3>
               Definição 
             </h3>
             
           </div>  
           <div class="conf">
             <Icon name='game-icons:leg' />
             <h3>
               Quadríceps
              </h3>           
              
            </div>  
            <div class="conf">
              <Icon name="material-symbols:timer-rounded"/> 
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

            <div class="button" >
              <span @click="previousExercise">
                <Icon  name="mdi:chevron-left"/> ANTERIOR
              </span>
              <span @click="nextExercise">
                PRÓXIMO <Icon  name="mdi:chevron-right"/>
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
.main-div-two .icon{
zoom: 2;
cursor: pointer;
}
 .main-div-two h2{
margin-left: 10px;
text-transform: uppercase;
}
.main-div-two h3{
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
  width: max-content;
  text-transform:uppercase;
  padding: 5px 10px;
  height: 80px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 5px 0 5px;
  border-radius: 12px;
  color:#000;
  background-color: #095D6220;
  opacity: .9;
  backdrop-filter: blur(5px);

  border: 2px solid #05959c30; 
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

.button .icon{
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.button span:nth-child(1){
  background-color: #095D62;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding-right: 25px;
  border: 2px solid #05959c; 
}
.button span:nth-child(2){
  background-color: #095D62;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding-left: 28px;
  border: 2px solid #05959c; 
}
/* 
border: 2px solid #2cd3db;
*/ 
.obs{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 0 25px 10px 25px;

}

.icon{
  zoom: 1.4;
  color: #fadb41;
}

.conf {  
  color:#fff;
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
  border: 2px solid #44acb1; 

}


.square {  
  height: 150px;
  color:#000;
  background-color: #095D6220;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px auto;
  border-top: 2px solid #05959c40; 
  border-bottom: 2px solid #05959c40; 
}

</style>