<script setup>
import { ref } from 'vue'
const layout = "duo"
const route = useRoute()

const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}

const dataConf = await useFetch(`/api/${route.params.id}`)

const state = useCookie('state')

const useA = () => {
  return state.value = 1
}
const useB = () => {
  return state.value = 2
}
const useC = () => {
  return state.value = 3
}
const useD = () => {
  return state.value = 4
}

const navA = ref(state.value == 1)
const navB = ref(state.value == 2)
const navC = ref(state.value == 3)
const navD = ref(state.value == 4)


</script>

<template>
      <NuxtLayout :name="layout">
    <div class="main-div-one">


            <div class="conf">
              <Icon name="fluent:target-arrow-16-filled" />
              <h3>
                {{ dataConf.data.value?.objetivo }}
              </h3>

            </div>
            <div class="conf">
              <Icon name='mdi:calendar-weekend' />
              <h3>
                {{ dataConf.data.value?.dias }}
              </h3>

            </div>
            <div class="conf">
              <Icon name="material-symbols:timer-rounded" />
              <h3>
                {{ dataConf.data.value?.tempo }}
              </h3>

            </div>
          </div>
            <div class="story" v-if="navA">Último treino: <b>TREINO</b><Icon name='mdi:alpha-a' /></div>
            <div class="story" v-else-if="navB">Último treino: <b>TREINO</b><Icon name='mdi:alpha-b' /></div>
            <div class="story" v-else-if="navC">Último treino: <b>TREINO</b><Icon name='mdi:alpha-c' /></div>
            <div class="story" v-else-if="navD">Último treino: <b>TREINO</b><Icon name='mdi:alpha-d' /></div>
            <div v-else></div>
        


      <div class="main-div-two">
        <h3>
              <Icon name='material-symbols:exercise' /> TREINOS 
            </h3>
        <nuxt-link v-if="dataConf.data.value?.treinoA" @click="useA()" class="square" :to="`/user/${route.params.id}/treino/a`">
            <div>
              <h4>
                TREINO
                <Icon name='mdi:alpha-a' />
              </h4>
            </div>
            
            <div>
              <h3>
              </h3>
              
              <!-- <h4>
                <Icon name="game-icons:leg"/> 
              </h4> -->
              <h5>
                {{ dataConf.data.value?.treinoA }}
              </h5>

            </div>
          </nuxt-link>

          
        <nuxt-link v-if="dataConf.data.value?.treinoB" @click="useB()" class="square" :to="`/user/${route.params.id}/treino/b`">
        <div>
                <h4>
                  TREINO
                  <Icon name='mdi:alpha-b' />
                </h4>
              </div>
            
              <div>
                <h3>
                </h3>
              
                <!-- <h4>
                  <Icon name="solar:body-shape-bold"/> 
                </h4> -->
                <h5>
                  {{ dataConf.data.value?.treinoB }}
                </h5>

              </div>
        </nuxt-link>
            
        <nuxt-link v-if="dataConf.data.value?.treinoC" @click="useC()" class="square" :to="`/user/${route.params.id}/treino/c`">
          <div>
                
                <h4>
                  TREINO
                  <Icon name='mdi:alpha-c' />
                </h4>
              </div>
            
              <div>
                <h3>
                </h3>
              
                <!-- <h4>
                  <Icon name="mingcute:fitness-fill"/> 
                </h4> -->
                <h5>
                  {{ dataConf.data.value?.treinoC }}
                </h5>

              </div>
        </nuxt-link>
        <nuxt-link v-if="dataConf.data.value?.treinoD" @click="useD()" class="square" :to="`/user/${route.params.id}/treino/d`">
          <div>
                
                <h4>
                  TREINO
                  <Icon name='mdi:alpha-d' />
                </h4>
              </div>
            
              <div>
                <h3>
                </h3>
              
                <!-- <h4>
                  <Icon name="mingcute:fitness-fill"/> 
                </h4> -->
                <h5>
                  {{ dataConf.data.value?.treinoD }}
                </h5>

              </div>
        </nuxt-link>
            
      </div>
<br>
<br>
<br>
<br>

</NuxtLayout>
</template>

    



<style scoped>
body {
  background: #fff;
  color: #616161;

}
b {
  margin-left: 7px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
}

.conf {  
  height: 80px;
  width: 32.5%;
  margin: 25px 2px 10px 2px;
  color:#555;
  height: 80px;
  backdrop-filter: blur(15px);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;  
  background-color: #095D6210;
  border: .1px solid #095D6210; 
  margin-top: 1rem;
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
  margin: 0px 0 0 0;
  align-items: left;
}
.main-div-two .icon {
  color: #05959c;
}

.square {  
  color:var(--color-text);
  background-color: #095D6210;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 3px 1.5rem;
    border-radius: 8px;
    border: .1px solid #05959c20;
    line-height: 1.4;
    transition: all .4s;
    border: 2px solid #05959c10;
}

.square div h4 .icon {
  margin-top: -1px;
}

.square:nth-child(2) {
  margin-top: 10px;
}

.square:hover {
    background-color: #095D6230;

    border-top: 2px solid #05959c40;
    border-bottom: 2px solid #05959c40;
    
}
.square div:nth-child(1) {
  padding-right: 12px;
  
}

.square div:nth-child(2), .square div:nth-child(3){
  margin: auto;
  border: none;
}
.story {  
  color:var(--color-text);
  background-color: #095D6210;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  width: 65%;
  margin: 8px auto;
  padding-top: 3px;
    border-radius: 8px;
    border: .1px solid #095D6210;
    line-height: 1.4;
    transition: all .4s;
    font-weight: 700;
}

.story .icon {
  color: #05959c;
  margin-top: -2px;
}
.main-div-one {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
.main-div-one h3 {
  color: var(--color-text);
}
.main-div-one .icon{
  zoom: 1.4;
  color: #05959c;
  margin-top: -2.5px;
}
.main-div-two H3 {
  margin-left: 20px;
  color: var(--color-text);
  
}
.main-div-two h4 {
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #05959c;
}
.main-div-two h5 {
  font-size: .9rem;
  color: var(--color-text);
}
.main-div-two a div {
  border-right: 2px solid #05959c20;
  margin-left: 15px;
  height: 100px;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main-div-two h4 .icon{
margin-left: -3px;
}
.main-div-two div .icon{
margin-top: -1px;
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.icon {
  zoom: 1.4;
  color: #fadb41;
  margin-top: -2.5px;
}





</style>