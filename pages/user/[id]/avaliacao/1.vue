<script setup>
import { ref } from 'vue';
const route = useRoute()
const layout = "hello"


const { data, error, refresh } = await useFetch(`/api/${ route.params.id }`)


// //

// const fetchData = async () => {
//     const { data } = await useFetch(`/api/${route.path}`);
//     return data;
// };

// let data = '';

// // Assista às mudanças em route.path e faça a solicitação HTTP
// watch(route, async (newRoute, oldRoute) => {
//     if (newRoute.path !== oldRoute.path) {
//         data = await fetchData();
//     }
// });

// // Inicialize os dados
// fetchData().then((initialData) => {
//     data = initialData;
// });

// //

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
                            25.6
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
                                {{ data.avaliacao.ombro }} cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Pescoço:</h3>
                            <h4>
                                {{ data.avaliacao.pescoco }} cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        <div>
                            <h3>Tórax:</h3>
                            <h4>
                                {{ data.avaliacao.torax }} cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Tórax Contraído:</h3>
                            <h4>
                                {{ data.avaliacao.toraxContraido }} cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Tórax expirado:</h3>
                            <h4>
                                {{ data.avaliacao.toraxRelaxado }} cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Cintura:</h3>
                            <h4>
                                {{ data.avaliacao.cintura }} cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                    <div>
                            <h3>Quadril:</h3>
                            <h4>
                                {{ data.avaliacao.quadril }} cm
                            </h4>
                        </div>

                    </div>
                    <div class="main-div-six ">

                        <div>
                            <h3>
                                esquerdo
                            </h3>
                            <h3>
                                direito
                            </h3>
                        </div>
                    </div>
                <div class="main-div-seven">

                        
                    <div>
                            <h3>Braço relaxado:</h3>
                            <h3>Braço relaxado:</h3>
                        </div>
                        <div>
                        <h4>
                            {{ data.avaliacao.bracoEsquerdoRelaxado }} cm
                        </h4>
                            <h4>
                                {{ data.avaliacao.bracoDireitoRelaxado }} cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-seven">

                        
                    <div>
                            <h3>braço contraído:</h3>
                            <h3>braço contraído:</h3>
                        </div>
                        <div>
                        <h4>
                            {{ data.avaliacao.bracoEsquerdoContraido }} cm
                        </h4>
                            <h4>
                                {{ data.avaliacao.bracoDireitoContraido }} cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-seven">

                        
                    <div>
                            <h3>Antebraço:</h3>
                            <h3>Antebraço:</h3>
                        </div>
                        <div>
                        <h4>
                            {{ data.avaliacao.antebracoEsquerdo }} cm
                        </h4>
                            <h4>
                                {{ data.avaliacao.antebracoDireito }} cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-seven">

                        
                    <div>
                            <h3>Coxa medial:</h3>
                            <h3>Coxa medial:</h3>
                        </div>
                        <div>
                        <h4>
                            {{ data.avaliacao.coxaMedialEsquerda }} cm
                        </h4>
                            <h4>
                                {{ data.avaliacao.coxaMedialDireita }} cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-seven">

                        
                    <div>
                            <h3>Coxa distal:</h3>
                            <h3>Coxa distal:</h3>
                        </div>
                        <div>
                        <h4>
                            {{ data.avaliacao.coxaDistalEsquerda }} cm
                        </h4>
                            <h4>
                                {{ data.avaliacao.coxaDistalDireita }} cm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-seven">

                        
                    <div>
                            <h3>Perna:</h3>
                            <h3>Perna:</h3>
                        </div>
                        <div>
                        <h4>
                            {{ data.avaliacao.pernaEsquerda }} cm
                        </h4>
                            <h4>
                                {{ data.avaliacao.pernaDireita }} cm
                            </h4>
                        </div>
                        <br>
                        <br>

                    </div>
            </div>
    <div v-else-if="divTwo" class="squareRes">
        <div class="main-div-tree">

                    
                    <div>
                        <h2>% Gordura</h2>
                        <h3>
                            24.0
                        </h3>
                        <h3>
                            Acima da média
                        </h3>
                    </div>


                </div>
                <div class="main-div-four ">

                    <div class="left">
                        <h4>
                            <Icon name='material-symbols:body-fat' />
                            DOBRAS CUTÂNEAS
                        </h4>
                    </div>
                </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Tricipital:</h3>
                            <h4>
                                {{ data.avaliacao.tricipital }} mm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Subescapular:</h3>
                            <h4>
                                {{ data.avaliacao.subEscapular }} mm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        <div>
                            <h3>Axilar Média:</h3>
                            <h4>
                                {{ data.avaliacao.axilarMedia }} mm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Abdominal:</h3>
                            <h4>
                                {{ data.avaliacao.abdominal }} mm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Supra-Ilíaca:</h3>
                            <h4>
                                {{ data.avaliacao.supraIliaca }} mm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                        <div>
                            <h3>Coxa medial:</h3>
                            <h4>
                                {{ data.avaliacao.coxa }} mm
                            </h4>
                        </div>

                    </div>
                <div class="main-div-five">

                        
                    <div>
                            <h3>Perna:</h3>
                            <h4>
                                {{ data.avaliacao.perna }} mm
                            </h4>
                        </div>

                    </div>
                     <div class="main-div-four ">

                        <div class="left">
                            <h4>
                                DIÂMETROS ÓSSEOS
                            </h4>
                        </div>
                    </div>
                    <div class="main-div-five">

                        
                            <div>
                                <h3>Úmero:</h3>
                                <h4>
                                    {{ data.avaliacao.umero }} mm
                                </h4>
                            </div>

                        </div>
                    <div class="main-div-five">

                        
                            <div>
                                <h3>Punho:</h3>
                                <h4>
                                    {{ data.avaliacao.punho }} mm
                                </h4>
                            </div>

                        </div>
                    <div class="main-div-five">

                        
                            <div>
                                <h3>Fêmur:</h3>
                                <h4>
                                    {{ data.avaliacao.femur }} mm
                                </h4>
                            </div>

                        </div>
                    <div class="main-div-five">

                        
                            <div>
                                <h3>Tornozelo:</h3>
                                <h4>
                                    {{ data.avaliacao.tornozelo }} mm
                                </h4>
                            </div>

                        </div>
                        <br>
                        <br>
            </div>
    <div v-else-if="divTree" class="squareRes">
        <div class="main-div-tree">

                    
                    <div>
                        <h2>Flexão de braços</h2>
                        <h3>
                            25
                        </h3>
                        <h3>
                            Peso normal
                        </h3>
                    </div>
                    <div>
                        <h2>Abdominal</h2>
                        <h3>
                            30
                        </h3>
                        <h3>
                            Peso normal
                        </h3>
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
    border-radius: 10px;
    overflow-x: hidden;
    background-color: #095D6220;
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
.main-div-six {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: space-around;
    color: #095D62;
    margin: 20px 3px 0px 10px;
}

.main-div-six div{
    display: flex;
    flex-direction: row;
    align-items: space-around;
    justify-content: space-around;

}

.main-div-six h3 {
    font-size: 1.3em;
    color: #095D62;
    text-transform: uppercase;
    margin-left: 4px;
}
.main-div-seven {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: space-around;
    color: #095D62;
    margin: 0px 3px 0px 10px;
}

.main-div-seven div{
    display: flex;
    flex-direction: row;
    align-items: space-around;
    justify-content: space-around;

}

.main-div-seven h4 {
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