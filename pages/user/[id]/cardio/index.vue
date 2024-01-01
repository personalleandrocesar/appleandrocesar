<script setup>
import { computed, ref } from 'vue'
const layout = "duo"
const route = useRoute()

const dataConf = await useFetch(`/api/${route.params.id}`)
const dataTreino = await useFetch(`/api/${route.params.id}/cardio/atual`)
const state = useCookie('state')

const divOne = state.value == 1 || ref(false);
const divTwo = state.value == 2 || ref(false);
const divTree = state.value == 3 || ref(false);
const divFour = state.value == 4 || ref(false);
const divAplicar = state.value == 1 || ref(false);
const divAplicarTwo = state.value == 2 || ref(false);
const divAplicarTree = state.value == 3 || ref(false);
const divAplicarFour = state.value == 4 || ref(false);

function openDivOne() {
    divOne.value = !divOne.value;
    divTwo.value = false
    divTree.value = false
    divFour.value = false
    divAplicar.value = !divAplicar.value
    divAplicarTwo.value = false
    divAplicarTree.value = false
    divAplicarFour.value = false
}
function openDivTwo() {
    divTwo.value = !divTwo.value;
    divOne.value = false;
    divTree.value = false;
    divFour.value = false
    divAplicarTwo.value = !divAplicarTwo.value
    divAplicar.value = false
    divAplicarTree.value = false
    divAplicarFour.value = false
}
function openDivTree() {
    divTree.value = !divTree.value;
    divOne.value = false;
    divTwo.value = false;
    divFour.value = false
    divAplicarTree.value = !divAplicarTree.value
    divAplicarTwo.value = false
    divAplicar.value = false
    divAplicarFour.value = false
}
function openDivFour() {
    divFour.value = !divFour.value;
    divOne.value = false;
    divTwo.value = false;
    divTree.value = false
    divAplicarFour.value = !divAplicarFour.value
    divAplicarTwo.value = false
    divAplicar.value = false
    divAplicarTree.value = false
}

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
            <div>
                
                <div class="main-div-two" >
                    
                    <h3>
                        <Icon name='material-symbols:cardiology' /> CARDIO
                    </h3>
            </div>
            <div class="main-div-two"  >
                <nuxt-link v-if="dataTreino.data.value?.cardioA" @click="openDivOne" class="square" :class="{ squared: divAplicar }" >
                    <div>
                        <h4>
                            TREINO
                            <Icon name='mdi:alpha-a' />
                        </h4>
                    </div>

                    <div>

                        <!-- <h4>
                            <Icon name="healthicons:exercise-running" />
                        </h4> -->
                        <h4>
                            {{ dataTreino.data.value?.cardioA }}
                        </h4>

                    </div>
                </nuxt-link>
                <nuxt-link v-if="dataTreino.data.value?.cardioB" @click="openDivTwo" class="square" :class="{ squared: divAplicarTwo }">
                    <div>
                        <h4>
                            TREINO
                            <Icon name='mdi:alpha-b' />
                        </h4>
                    </div>

                    <div>

                        <!-- <h4>
                            <Icon name="mdi:escalator" />
                        </h4> -->
                        <h4>
                            {{ dataTreino.data.value?.cardioB }}
                        </h4>

                    </div>
                </nuxt-link>

                <nuxt-link v-if="dataTreino.data.value?.cardioC" @click="openDivTree" class="square" :class="{ squared: divAplicarTree }">
                    <div>
                        <h4>
                            TREINO
                            <Icon name='mdi:alpha-c' />
                        </h4>
                    </div>

                    <div>
                        <!-- <h4>
                            <Icon name="healthicons:exercise-bicycle" />
                        </h4> -->
                        <h4>
                            {{ dataTreino.data.value?.cardioC }}
                        </h4>

                    </div>
                </nuxt-link>
                <nuxt-link v-if="dataTreino.data.value?.cardioD" @click="openDivFour" class="square" :class="{ squared: divAplicarFour }">
                    <div>
                        <h4>
                            TREINO
                            <Icon name='mdi:alpha-d' />
                        </h4>
                    </div>

                    <div>
                        <!-- <h4>
                            <Icon name="healthicons:exercise-bicycle" />
                        </h4> -->
                        <h4>
                            {{ dataTreino.data.value?.cardioD }}
                        </h4>

                    </div>
                </nuxt-link>
            </div>
            <div v-if="divOne" class="squareRes" >
                    <div class="main-div-tree">
                        
                        <div>
                            <Icon name="ph:clock-countdown-fill" />
                            <h4>
                                {{ dataTreino.data.value?.cardioATime }}
                            </h4>
                        </div>

                        <div>
                            <h4>{{ dataTreino.data.value?.cardioADescription }}</h4>

                        </div>
                        
                    </div>
            </div>
              <div v-else-if="divTwo" class="squareRes">
                      <div class="main-div-tree">
                        
                            <div>
                                <Icon name="ph:clock-countdown-fill" />
                                <h4>
                                    {{ dataTreino.data.value?.cardioBTime }}
                                </h4>
                            </div>

                            <div>
                                <h4>
                                    {{ dataTreino.data.value?.cardioBDescription }}
                                </h4>

                            </div>
                        
                        </div>
                  </div>
              <div v-else-if="divTree" class="squareRes">
                 <div class="main-div-tree">
                        
                            <div>
                                <Icon name="ph:clock-countdown-fill" />
                                <h4>
                                    {{ dataTreino.data.value?.cardioCTime }}
                                </h4>
                            </div>

                            <div>
                                <h4>
                                    {{ dataTreino.data.value?.cardioCDescription }}
                                </h4>

                            </div>
                        
                        </div>
                </div>
              <div v-else-if="divFour" class="squareRes">
                 <div class="main-div-tree">
                        
                            <div>
                                <Icon name="ph:clock-countdown-fill" />
                                <h4>
                                    {{ dataTreino.data.value?.cardioDTime }}
                                </h4>
                            </div>

                            <div>
                                <h4>
                                    {{ dataTreino.data.value?.cardioDDescription }}
                                </h4>

                            </div>
                        
                        </div>
                </div>
                <div v-else class="info" >
                    <div class="arrowUp">
                        <Icon v-if="dataTreino.data.value?.cardioA" name="ic:round-arrow-drop-up" />
                        <Icon v-if="dataTreino.data.value?.cardioB" name="ic:round-arrow-drop-up" />
                        <Icon v-if="dataTreino.data.value?.cardioC" name="ic:round-arrow-drop-up" />
                        <Icon v-if="dataTreino.data.value?.cardioD" name="ic:round-arrow-drop-up" />
                    </div>
                        <h5>Clique acima e veja detalhes!</h5>
                </div>
              <br>
              <br>
              <br>
             </div>




    </NuxtLayout>
    
</template>

    



<style scoped>
body {
    background: #fff;
    color: #616161;

}

.black {
    border: 1px solid #fadb41;
    text-transform: lowercase;
}


.arrowUp {
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.arrowUp .icon {
    color: #05959c80;
}

.info h5{
    text-align: center;
    margin-top: -5px;
    color: var(--color-text);
    font-weight: 700;
}

.main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-items: center;
}

.conf {
    color: #fff;
    height: 80px;
    background-color: #05959c;
    backdrop-filter: blur(15px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    backdrop-filter: blur(5px);
    width: 100%;
    margin: 0px 10px;
    border-radius: 8px;
    border: 2px solid #44acb1;
}


.main-div-one {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
.main-div-one .icon{
   zoom: 1.4;
  color: #05959c;
}

.main-div-two {
overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: left;
}

.main-div-two:nth-child(1) {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: left;
    margin: 10px 0 5px 0;




justify-content: flex-start
}

.main-div-tree div {
    height: max-content;
}

.main-div-two .icon {
    color: #05959c;
}


.squareRes {
  
    color: var(--color-text);
    backdrop-filter: blur(5px);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 140px;
    margin: 1.5rem;
    border-radius: 8px;
    overflow-x: hidden;
    background-color: #05959c30;
    line-height: 1.2;
}
.main-div-tree {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #05959c;
    margin: 0 3px 0 1px;
    align-items: center;
}
.main-div-tree div {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #05959c;
    margin: 0 3px 0 1px;
    width: 30%;
}
.main-div-tree div:nth-child(2) {
    overflow-x: hidden;
    margin: 0 3px 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #05959c;
    width: 60%;
}

.main-div-tree .icon {
color: #05959c;
}

.main-div-two div {
    text-align: center;
}


.square {
    color: var(--color-text);
    background-color: #05959c10;
    backdrop-filter: blur(5px);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 32.5%;
    height: 180px;
    margin: 5px auto;
    border-radius: 8px;
    border: 2px solid #05959c10;
    overflow-x: hidden;
}
.squared {
    background-color: #05959c30;
    border: 2px solid #05959c20;
    border-top: 2px solid #05959c40;
    border-bottom: 2px solid #05959c40;
}


.square div:nth-child(2),
.square div:nth-child(3) {
    margin: auto;
    border: none;
}

.main-div-two H3 {
    margin-left: 20px;
    color: var(--color-text);
}

.main-div-two h4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
}

.main-div-two a div {
    border-bottom: 2px solid #05959c20;
    width: 90%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-div-two h4 .icon {
    margin-left: -3px;
}

.main-div-two div .icon {
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

.main-div-one {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

.main-div-one h3{
    color: var(--color-text);
}
.main-div-one .icon{
   zoom: 1.4;
  color: #05959c;
  margin-top: -2.5px;
}

.conf {  
  color:var(--color-text);
  height: 80px;
    backdrop-filter: blur(15px);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.5%;
  margin: 1rem auto 0 auto;
  border-radius: 8px;  
      background-color: #05959c10;
    border: .1px solid #05959c10;
}



</style>