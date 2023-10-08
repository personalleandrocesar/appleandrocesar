<script setup>
import { ref, computed } from 'vue'
const layout = "hello"
const route = useRoute()

const photoOpen = ref(false);
function openPhoto() {
    photoOpen.value = !photoOpen.value;
}


const dataConf = await useFetch(`/api/${route.params.id}`)
const dataTreino = await useFetch(`/api/${route.params.id}/treino/atual/a`)


const divOne = ref(false);
const divTwo = ref(false);
const divTree = ref(false);
const divAplicar = ref(false);
const divAplicarTwo = ref(false);
const divAplicarTree = ref(false);

function openDivOne() {
    divOne.value = !divOne.value;
    divTwo.value = false
    divTree.value = false
    divAplicar.value = !divAplicar.value
    divAplicarTwo.value = false
    divAplicarTree.value = false
}
function openDivTwo() {
    divTwo.value = !divTwo.value;
    divOne.value = false;
    divTree.value = false;
    divAplicarTwo.value = !divAplicarTwo.value
    divAplicar.value = false
    divAplicarTree.value = false
}
function openDivTree() {
    divTree.value = !divTree.value;
    divOne.value = false;
    divTwo.value = false;
    divAplicarTree.value = !divAplicarTree.value
    divAplicarTwo.value = false
    divAplicar.value = false
}
</script>

<template>
    <NuxtLayout :name="layout">
        <div>

            <div class="main-div-one">

                <div class="conf">
                    <Icon name="fluent:target-arrow-16-filled" />
                    <h3>
                        Definição
                    </h3>

                </div>
                <div class="conf">
                    <Icon name="mdi:calendar-weekend" />
                    <h3>
                        6 dias
                    </h3>

                </div>
                <div class="conf">
                    <Icon name="material-symbols:timer-rounded" />
                    <h3>
                        60 minutos
                    </h3>

                </div>


            </div>
            
            <div class="main-div-two" >

                <h3>
                    <Icon name='material-symbols:cardiology' /> Cardio
                </h3>
            </div>
            <div class="main-div-two"  >
                <nuxt-link @click="openDivOne" class="square" :class="{ squared: divAplicar }" >



                    <div>
                        <h4>
                            TREINO
                            <Icon name='mdi:alpha-a' />
                        </h4>
                    </div>

                    <div>

                        <h4>
                            <Icon name="healthicons:exercise-running" />
                        </h4>
                        <h4>
                            Esteira
                        </h4>

                    </div>
                </nuxt-link>
                <nuxt-link @click="openDivTwo" class="square" :class="{ squared: divAplicarTwo }">
                    <div>
                        <h4>
                            TREINO
                            <Icon name='mdi:alpha-b' />
                        </h4>
                    </div>

                    <div>

                        <h4>
                            <Icon name="mdi:escalator" />
                        </h4>
                        <h4>
                            Escada
                        </h4>

                    </div>
                </nuxt-link>

                <nuxt-link @click="openDivTree" class="square" :class="{ squared: divAplicarTree }">
                    <div>
                        <h4>
                            TREINO
                            <Icon name='mdi:alpha-c' />
                        </h4>
                    </div>

                    <div>
                        <h4>
                            <Icon name="healthicons:exercise-bicycle" />
                        </h4>
                        <h4>
                            Bicicleta
                        </h4>

                    </div>
                </nuxt-link>
            </div>
            <div v-if="divOne" class="squareRes" >
                    <div class="main-div-tree">
                        
                        <div>
                            <Icon name="ph:clock-countdown-fill" />
                            <h4>
                                20 minutos
                            </h4>
                        </div>

                        <div>
                            <h4>Correr direto entre velocidade de 7.0 km/h a 8.5 km/h.</h4>

                        </div>
                        
                    </div>
            </div>
              <div v-else-if="divTwo" class="squareRes">
                      <div class="main-div-tree">
                        
                            <div>
                                <Icon name="ph:clock-countdown-fill" />
                                <h4>
                                    15 minutos
                                </h4>
                            </div>

                            <div>
                                <h4>
                                    Fazer intervalado: <br> 1' minuto subindo o mais 
                                    rápido possível, 3' com descanso ativo em velocidade 
                                    menor.
                                </h4>

                            </div>
                        
                        </div>
                  </div>
              <div v-else-if="divTree" class="squareRes">
                 <div class="main-div-tree">
                        
                            <div>
                                <Icon name="ph:clock-countdown-fill" />
                                <h4>
                                    20 minutos
                                </h4>
                            </div>

                            <div>
                                <h4>
                                    Fazer pesado, direto o máximo que puder, mantendo o ritmo.
                                </h4>

                            </div>
                        
                        </div>
                </div>
                <div v-else class="info" >
                    <div class="arrowUp">
                        <Icon name="ic:round-arrow-drop-up" />
                        <Icon name="ic:round-arrow-drop-up" />
                        <Icon name="ic:round-arrow-drop-up" />
                    </div>
                        <h5>Clique acima e veja detalhes do Cardio do dia!</h5>
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
    color: #095D6280;
}

.info h5{
    text-align: center;
    margin-top: -5px;
    color: #555;
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
    background-color: #095D62;
    backdrop-filter: blur(15px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    backdrop-filter: blur(5px);
    width: 100%;
    margin: 20px 10px;
    border-radius: 20px;
    border: 2px solid #44acb1;
    margin-top: 110px;
}

.main-div-one {
overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

.main-div-two:nth-child(2) {
overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: left;
}

.main-div-two {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: left;
}

.main-div-tree div {
    height: max-content;
}

.main-div-two .icon {
    color: #095D62;
}


.squareRes {
  
    color: #555;
    backdrop-filter: blur(5px);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 99.5%;
    height: 140px;
    margin: 5px auto;
    border-radius: 10px;
    overflow-x: hidden;
    background-color: #095D6230;
    line-height: 1.2;
}
.main-div-tree {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #095D62;
    margin: 0 3px 0 1px;
    align-items: center;
}
.main-div-tree div {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #095D62;
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
    color: #095D62;
    width: 60%;
}

.main-div-tree .icon {
color: #095D62;
}


.square {
    color: #555;
    background-color: #095D6210;
    backdrop-filter: blur(5px);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 32.5%;
    height: 180px;
    margin: 5px auto;
    border-radius: 20px;
    border: 2px solid #05959c20;
    overflow-x: hidden;
}
.squared {
    background-color: #095D6230;
    border: 2px solid #05959c20;
    border-top: 3px solid #05959c40;
    border-bottom: 3px solid #05959c40;
}

.square div:nth-child(1) {
    height: 70px;
}

.square div:nth-child(2),
.square div:nth-child(3) {
    margin: auto;
    border: none;
}

.main-div-two H3 {
    margin-left: 20px;

}

.main-div-two h4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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



</style>