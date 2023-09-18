<script setup>
import { ref } from 'vue';
const { data } = await useFetch('/api/camillaFigueiredo')
const layout = "hello"


const divOne = ref(true);
const divTwo = ref(false);
const divTree = ref(false);
const divAplicar = ref(true);
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
        <div class="conf">

            <div class="main-div-one">

                <h3>
                    <Icon name='jam:medical' /> AVALIAÇÕES
                </h3>
            </div>
            <div class="main-div-one">
                <nuxt-link @click="openDivOne" class="square" :class="{ squared: divAplicar }">



                    <div>
                        <h4>
                            <Icon name='material-symbols:measuring-tape-outline-rounded' />
                            MEDIDAS
                        </h4>
                    </div>

                </nuxt-link>
                <nuxt-link @click="openDivTwo" class="square" :class="{ squared: divAplicarTwo }">
                    
                        <div>
                            <h4>
                                <Icon name='material-symbols:body-fat' />
                                DOBRAS
                            </h4>
                        </div>
                </nuxt-link>

                <nuxt-link @click="openDivTree" class="square" :class="{ squared: divAplicarTree }">
                   
                        <div>
                            <h4>
                                <Icon name='codicon:graph-line' />
                                TESTES
                            </h4>
                        </div>
                </nuxt-link>
            </div>
            <div v-if="divOne" class="squareRes">
                <div class="main-div-tree">

                    
                    <div>
                        <h2>IMC</h2>
                        <h3>
                            {{ imc }}
                        </h3>
                        <h3>
                            Peso normal
                        </h3>
                    </div>


                </div>
                <div class="main-div-tree">

                    <div>
                        <h4>MASSA</h4>
                        <Icon name="fa6-solid:weight-scale" />
                        <h4>
                           {{ data.avaliacao.massa }} kg
                        </h4>
                    </div>
                    <div>
                        <h4>ALTURA</h4>
                        <Icon name="pixelarticons:human-height" />
                        <h4>
                             {{ data.avaliacao.altura }} m
                        </h4>
                    </div>


                </div>
                <div class="main-div-four ">

                    <div class="left">
                        <h4>
                            <Icon name='material-symbols:measuring-tape-outline-rounded' />
                            CIRCUNFERÊNCIA
                        </h4>
                    </div>
                </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Ombro:</h3>
                            <h4>
                                20,5 cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Pescoço:</h3>
                            <h4>
                                20,5 cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        <div>
                            <h3>Tórax:</h3>
                            <h4>
                                20,5 cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Tórax inspirado:</h3>
                            <h4>
                                20,5 cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Tórax expirado:</h3>
                            <h4>
                                20,5 cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Cintura:</h3>
                            <h4>
                                20,5 cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                    <div>
                            <h3>Quadril:</h3>
                            <h4>
                                20,5 cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                    <div>
                            <h3>Quadril:</h3>
                            <h4>
                                20,5 cm
                            </h4>
                        </div>
                    <div>
                            <h3>Quadril:</h3>
                            <h4>
                                20,5 cm
                            </h4>
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
                            Fazer intervalado: 1' minuto subindo o mais
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
            <div v-else class="info">
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

.left {
    text-align: left;
    color: #095D62;
    margin-left: 10px;
    margin-top: 20px;
}

.left .icon {
    color: #095D62;
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

.info h5 {
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
    text-align: left;
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

.main-div-one:nth-child(1) {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: left;
    margin: 0 0 10px 0;
}
.main-div-one:nth-child(2) {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: left;
}

.main-div-one {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: left;
}

.main-div-tree div {
    height: max-content;
}

.main-div-one .icon {
    color: #095D62;
}


.squareRes {

    color: #555;
    backdrop-filter: blur(5px);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 99.5%;
    margin: 5px auto;
    border-radius: 20px;
    border: 2px solid #05959c20;
    overflow-x: hidden;
    background-color: #095D6220;
    border-top: 3px solid #05959c40;
    border-bottom: 3px solid #05959c40;
}

.main-div-tree {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #095D62;
    margin: 20px 3px 20px 1px;
    align-items: center;
}
.main-div-five {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    color: #095D62;
    margin: 0px 3px 0px 30px;
}

.main-div-five div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

}

.main-div-five h4 {
    font-size: 1.3em;
    color: #06a5ae;
    margin-left: 4px;
}

.main-div-tree div {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #095D62;
    margin: 0 3px 0 1px;
}

.main-div-tree div:nth-child(2) {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #095D62;
}
.main-div-tree:nth-child(2) {
    margin-top: -15px;
}

.main-div-tree .icon {
    color: #095D62;
}
.main-div-tree h2 {
margin-bottom: -10px;
color: #06a5ae;
}
.main-div-tree h3 {
color: #06a5ae;
}
.main-div-tree h4 {
text-align: center;
}


.square {
    color: #555;
    background-color: #095D6210;
    backdrop-filter: blur(5px);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32.5%;
    height: 80px;
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
    color: #095D62;
}


.main-div-one H3 {
    margin-left: 20px;

}

.main-div-one h4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-div-one a div {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-div-one h4 .icon {
    margin-left: -3px;
}

.main-div-one div .icon {
    margin-top: -1px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.icon {
    zoom: 1.4;
    color: #fadb41;
}</style>