<script setup>
import { ref, computed } from 'vue'
const layout = "duo"
const route = useRoute()

const exerciseImg = ref(false);
function openExercise() {
  exerciseImg.value = !exerciseImg.value;
}

const nomeImg = ref(false);
function openMiniExercise() {
  nomeImg.value = !nomeImg.value;
}

const dataConf = await useFetch(`/api/${route.params.id}`)
const dataTreino = await useFetch(`/api/${route.params.id}/treino/atual/a`)

const treino = ref(0)
const currentExercise = computed(() => {
  return dataTreino.data.value[treino.value]
  
})

const itemExercise = () => {
  return dataTreino.data.value.length
}

const listExercise = () => {
  return dataTreino.data.value
}

console.log(listExercise());

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

const list = ref(false);
const buttonList = ref(false);
function alternate() {
  buttonList.value = !buttonList.value;
  list.value = !list.value;
}

//  return item.value
</script>

<template>
    <NuxtLayout :name="layout">
    
        <div class="alternate">
          <span v-if="buttonList" @click="alternate">
            <Icon name="solar:slider-minimalistic-horizontal-bold" />

          </span>
          <span v-else @click="alternate">
            <Icon name="mdi:format-list-text" />

          </span>
        </div>  
        
        <!-- Série em lista -->
        <div class="main-div-two" v-if="list">
          <h3>
            {{ itemExercise() }} Exercícios
          </h3>
          
          
          <ul>
              <li v-for="(nome) in listExercise()" >
                <span>
                  {{ nome.num }} - {{ nome.nome }}
                </span>
               <img :src="nome.img" class="miniSquare" @click="openMiniExercise"/>
                  
                <span>
                  {{ nome.sets }} - {{ nome.reps }} 
                </span>

             </li>
            </ul>
          
        

          </div>




          <!-- Série em Bloco -->
        <div class="main-div-tree" v-else >
         
          
          <ul>
            <li v-for="id in itemExercise()" @click='itemExercise((treino = id - 1))'>
              <span >
                {{ id }}
              </span>
            </li>
          </ul>
          <h3>
            {{ currentExercise.num }} - {{ itemExercise() }}
          </h3>
          <img :src="currentExercise.img" class="square" @click="openExercise"/>
          <h2>
            {{ currentExercise.nome }}
          </h2>

          <div v-if="exerciseImg" class="nav-bar-photo" @click="openExercise">
        <div class="nav-top">

          <!-- Início do Nav-flow -->
          <div class="nav-flow-photo">
            <div class="div-img-full">
              <img :src="currentExercise.img" />
            </div>
          </div>

        </div>
      </div>
          
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
  <NavBottomTwo/>
</template>

    



<style scoped>
body {
  background: #fff;
  color: #616161;
}


ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #05959c;
    padding: 0;
    margin-top: 10px;
    margin: 10px 0 ;
    font-weight: bold;
  }
  
  ul li {
    border: solid .1px #05959c80;
    padding: 0px 8px;
    border-radius: 6px;
  }

.main {
  display: flex;
  margin-top: 140px;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
}
.alternate {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 100px 15px 0 15px;
}

.alternate .icon {
  color: #05959c;
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
  margin-top: 0px;
}

.main-div-two ul{
    position: relative;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 0px;
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

.main-div-tree {
    position: relative;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 0px;
}
.main-div-tree .icon{
zoom: 2;
cursor: pointer;
}
 .main-div-tree h2{
margin-left: 10px;
text-transform: uppercase;
}
.main-div-tree h3{
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
  height: 140px;
  width: auto;
  max-width: 370px;
  color:#555;
  background-color: #fff;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  border: 2px solid #05959c10; 
  cursor: zoom-in;
}

.miniSquare {
  height: 80px;
  width: auto;
  max-width: 370px;
  color:#555;
  background-color: #fff;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  border: 2px solid #05959c10; 
  cursor: zoom-in;
}

.photo-detail {
  bottom: 0px;
  z-index: 1004;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
  background-color: #095D62;
}

.nav-top {
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    text-align: center;
}

.nav-bar-photo{
  z-index: 1004;
    transform: translateX(0%);
    position: fixed;
    height: calc(100% - 0px);
    bottom: 0px;
    width: 100%;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: #ffffff50;
}

.nav-flow-photo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    margin-top: 50%;
    color: var(--color-text);
    font-size: .8em;
    font-weight: bold;
}

.div-img-full img {
  border: solid 1px #090909;
  background-color: #fff;
    height: auto;
    bottom:40px;
    width: 100%;
    cursor: zoom-out;
}
</style>