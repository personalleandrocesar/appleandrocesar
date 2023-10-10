<script setup>
import { ref, computed } from 'vue'
const layout = "duo"
const route = useRoute()

const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}

// var a = "Meu nome é ";
// var b = "Tiago!";
// var c = a.concat(b);

const dataConf = await useFetch(`/api/${route.params.id}`)
const dataTreino = await useFetch(`/api/${route.params.id}/treino/atual/a`)

const treino = ref(0)

const currentExercise = computed(() => {
  return dataTreino.data.value[treino.value]
})

const pending = ref(false)

const previousExercise = () => {
  if (treino.value > 0) {
    treino.value--
  }
}

const nextExercise = () => {
  if (treino.value < dataTreino.data.value.length - 1) {
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
            {{ dataConf.data.value.objetivo }}
          </h3>

        </div>
        <!-- <div class="conf">
          <Icon name='solar:body-shape-bold' />
          <h3>
            {{ currentExercise.grupo }}
          </h3>

        </div> -->
        <div class="conf">
          <Icon name="material-symbols:timer-rounded" />
          <h3>
          {{ dataConf.data.value.tempo }}
          </h3>

        </div>


      </div>
        <div class="main-div-two">
          
          <h3>
            {{ currentExercise.id }}
          </h3>
          <img :src="currentExercise.img" class="square"/>
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
  margin-top: 140px;
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
    position: relative;
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
  color:#555;
  background-color: #095D6220;
  opacity: .9;
  backdrop-filter: blur(5px);

  border: 1px solid #05959c10; 
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

.icon {
  zoom: 1.4;
  color: #fadb41;
  margin-top: -2.5px;
}

.main-div-one {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 90px;
  width: 100%;
}
.main-div-one .icon{
   zoom: 1.4;
  color: #095D62;
  margin-top: -2.5px;
}

.conf {  
  color:#555;
  height: 80px;
    backdrop-filter: blur(15px);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.5%;
  margin: 10px auto;
  border-radius: 20px;  


      background-color: #095D6210;
    border: 2px solid #05959c20;
    border-top: 3px solid #05959c40;
    border-bottom: 3px solid #05959c40;
}



.square {  
  height: 144px;
  color:#555;
  background-color: #fff;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 340px ;
  margin: 20px auto;
  border: 2px solid #05959c10; 
}

</style>