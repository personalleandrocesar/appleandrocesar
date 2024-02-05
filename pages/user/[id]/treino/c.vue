<script setup>
import { ref, computed } from 'vue'
const layout = "duo"
const route = useRoute()

const exerciseImg = ref(false);
function openExercise() {
  exerciseImg.value = !exerciseImg.value;
}

const dataTreino = await useFetch(`/api/${route.params.id}/treino/atual/c`)

const treino = ref(0)
const currentExercise = computed(() => {
  return dataTreino.data?.value[treino.value]

})

const itemExercise = () => {
  return dataTreino.data?.value?.length
}

const listExercise = () => {
  return dataTreino.data?.value
}
const i = treino.value
const listExercisee = () => {
  return dataTreino?.data?.value[i]?.img
}

const pending = ref(false)

const previousExercise = () => {
  if (treino.value > 0) {
    treino.value--
  }
}

const nextExercise = () => {
  if (treino.value < dataTreino.data?.value.length - 1) {
    treino.value++
  }
}

const view = useCookie('view')
view.value = view.value
const alternateGrid = ref(true)
const alternateList = ref(false)

const buttonList = ref(false);
const buttonGrid = ref(false);
function chooseList() {
  buttonList.value = true,
    buttonGrid.value = false,
    view.value = 'listView',
    alternateGrid.value = false,
    alternateList.value = true
}
function chooseGrid() {
  buttonList.value = false,
    buttonGrid.value = true,
    view.value = 'gridView',
    alternateGrid.value = true,
    alternateList.value = false
}

const selectL = () => {
  if (view.value === 'listView') {
    return true,
      selectG.value = false,
      buttonList.value = true,
      buttonGrid.value = false,
      alternateGrid.value = false,
      alternateList.value = true
  }
}
const selectG = () => {
  if (view.value === 'gridView') {
    return true,
      selectL.value = false,
      buttonList.value = false,
      buttonGrid.value = true,
      alternateGrid.value = true,
      alternateList.value = false
  }
}


</script>

<template>
  <NuxtLayout :name="layout">

    <div class="alternate">
      <span @click="chooseGrid" :class="{ alternateGrid: alternateGrid }">
        <Icon name="solar:slider-minimalistic-horizontal-bold" /> Treino em Bloco
      </span>
      <span @click="chooseList" :class="{ alternateList: alternateList }">
        <Icon name="mdi:format-list-text" /> Treino em Lista
      </span>
    </div>

    <!-- Série em lista -->
    <div class="main-div-two" v-if="buttonList || selectL()">
      <h3 class="title">
        {{ itemExercise() }} Exercícios
      </h3>


      <ul>
        <li v-for="(nome, index) in listExercise()">
          <h3>
            {{ index + 1 }} - {{ nome.nome }}
          </h3>
          <div class="roww">
            <div>

              <img :src="nome.img" class="miniSquare" @click="openExercise" />
            </div>
            <div class="square-list">
              <span>
                <b> Séries:</b> {{ nome.sets }} <b>
                  <br>
                  Repetições:</b> {{ nome.reps }}
                <br>
              </span>
              <span v-if="nome.obs">
                {{ nome.obs }}
              </span>
              <span>
                <b>Intervalo:</b> {{ nome.rest }}
              </span>
            </div>
          </div>

        </li>
      </ul>



    </div>




    <!-- Série em Bloco -->
    <div class="main-div-tree" v-else="buttonGrid || selectG()">


      <ul>
        <li v-for="id in itemExercise()" @click='itemExercise((treino = id - 1))'>
          <span>
            {{ id }}
          </span>
        </li>
      </ul>
      <h3>
        {{ currentExercise.num }} - {{ itemExercise() }}
      </h3>
      <img :src="currentExercise.img" class="square" @click="openExercise" />
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


ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #05959c;
  padding: 0;
  margin: 10px 0;
  font-weight: bold;
}

.main-div-two ul li {
  border: solid .1px #05959c80;
  padding: 0px 8px;
  border-radius: 6px;
  color: var(--color-text);
  margin: 3px 0;
  margin: 5px 0rem;
  color: var(--color-text);
  background-color: #095D6210;
  border: solid .2px #095D6210;
}

.main-div-two ul li {
  border-radius: 8px;
  padding: 0px;

}

.main-div-two {
  margin: 0 1rem;
}

.title {
  margin-top: 1.5rem;
}

.main-div-two h3 {
  font-size: 1.2rem;
}


.main-div-two ul li:nth-child(2n -1) {
  background-color: #05959c20;
  color: var(--color-text);
}

.alternate {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1rem 15px 0 15px;
  border: solid .1px #05959c80;
  border-radius: 8px;
  color: var(--color-text);
}

.alternate span {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: .2rem 3px;
  padding: .5rem 0 .3rem 0;
  width: 100%;
  font-size: .8rem;
  border-radius: 8px;
  /* border: solid .2px #095D6230; */

  color: #05959c;
}

.alternate span:hover {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: .2rem 3px;
  padding: .5rem 0 .3rem 0;
  width: 100%;
  font-size: .8rem;
  border-radius: 8px;
  background-color: #05959c50;
}

.alternate span .icon {
  color: #05959c;
  zoom: 1.1;
  margin: 0rem 3px;
}

.alternate span:hover .icon {
  color: #05959c;
  zoom: 1.1;
}

.alternateGrid {
  background-color: #05959c30;
  font-weight: bold;
  border: solid .1px #05959c80;
  color: #05959c;
}

.alternateList {
  background-color: #05959c30;
  font-weight: bold;
  border: solid .1px #05959c80;
  color: #05959c;
}

.roww {
  display: flex;
  flex-direction: row;
  align-content: normal;
  justify-content: flex-start;
  align-items: center;
}

.roww span:nth-child(1) {
  font-size: 1.1rem;
}

b {
  color: #05959c;
  font-weight: 900;
}

h2 {
  color: #05959c;
  font-weight: 900;
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

.main-div-two ul {
  position: relative;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 0px;
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
  color: #05959c;
}

.main-div-tree {
  position: relative;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: .3rem;
}
.main-div-tree ul{
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.main-div-tree ul li {
  border: solid .1px #05959c80;
  padding: 0px 8px;
  border-radius: 6px;
  color: var(--color-text);
  margin: 3px 0;
  margin: 5px 0rem;
  color: var(--color-text);
  background-color: #095D6210;
  border: solid .2px #095D6210;
}

.main-div-tree ul li:nth-child(2n -1) {
  background-color: #05959c20;
  color: var(--color-text);
}

.main-div-tree .icon {
  zoom: 2;
  cursor: pointer;
}

.main-div-tree h2 {
  margin-left: 1.5rem;
  text-transform: uppercase;
}

.main-div-tree h3 {
  margin-left: 1.5rem;
  color: #05959c;
  font-size: 1.2rem;
}

.square-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
  text-transform: uppercase;
  padding: 5px 10px;
  height: 80px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 2px 0 2px;
  border-radius: 8px;
  color: #555;
  background-color: #095D6210;
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
  z-index: 120;
}

.button .icon {
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.button span:nth-child(1) {
  background-color: #05959c;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding-right: 25px;
  border: .5px solid #095D6280;
}

.button span:nth-child(2) {
  background-color: #05959c;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding-left: 28px;
  border: .5px solid #095D6280;
}

/* 
border: 2px solid #2cd3db;
*/
.obs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 0 25px 10px 25px;
  color: var(--color-text);

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

.main-div-one .icon {
  zoom: 1.4;
  color: #095D62;
  margin-top: -2.5px;
}

.conf {
  color: #555;
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
  color: #555;
  background-color: #fff;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  border: 2px solid #05959c90;
  cursor: zoom-in;
}

.miniSquare {
  height: 80px;
  width: auto;
  max-width: 80px;
  color: #555;
  background-color: #fff;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 8px;
  align-items: center;
  margin: 5px;
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

.nav-bar-photo {
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
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  z-index: 100;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
  backdrop-filter: blur(5px);
  background-color: #ffffff50;
}

.div-img-full img {
  box-shadow: 0px 7px 20px #095D62;
  height: auto;
  width: 300px;
  border-radius: 7px;
  border: #05959c 2px solid;
  z-index: 100;
  opacity: 1;
}</style>