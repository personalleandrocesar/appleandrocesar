<script setup>
import { ref, computed } from 'vue'
const layout = "valuation"
const route = useRoute()

const data = await useFetch(`/api/${route.params.id}/avaliacao/atual`)

const divInfoIMC = ref(false)
const peso = data.data.value.massa.toFixed(2)
const altura = data.data.value.altura.toFixed(2)

const calcIMC = computed(() => {
    return (peso / (altura * altura)).toFixed(1)
})

const classIMC = computed(() => {
    if (calcIMC.value < 18.5) {
        return 'Baixo Peso';
    } else if (calcIMC.value >= 18.5 && calcIMC.value <= 24.9) {
        return 'Normal';
    } else if (calcIMC.value >= 25.0 && calcIMC.value <= 29.9) {
        return 'Sobrepeso';
    } else if (calcIMC.value >= 30 && calcIMC.value <= 34.9) {
        return 'Obesidade classe 1';
    } else if (calcIMC.value >= 35 && calcIMC.value <= 39.9) {
        return 'Obesidade classe 2';
    } else if (calcIMC.value >= 40.0) {
        return 'Obesidade classe 3';
    } else {
        return 'Digite os valores certo para saber seu IMC!!'
    }
})

const resClassIMC = classIMC.value

function infoIMC() {
    divInfoIMC.value = !divInfoIMC.value
}

const sexo = data.data.value.sexo
const idade = data.data.value.idade
const dTorax = data.data.value.dtorax
const abdominal = data.data.value.abdominal
const coxa = data.data.value.coxa
const triceps = data.data.value.tricipital
const supraespinhal = data.data.value.supraEspinhal

const homens = dTorax + abdominal + coxa
const mulheres = triceps + supraespinhal + coxa

const dcHomens = 1.109380 - (0.0008267 * (homens)) + (0.0000016 * (homens * homens)) - (0.0002574 * (idade))
const dcMulheres = 1.0994921 - (0.0009929 * (mulheres)) + (0.0000023 * (mulheres * mulheres)) - (0.0001392 * (idade))

const percGHomens = (((4.95 / dcHomens) - 4.50) * 100).toFixed(1)
const percGMulheres = (((4.95 / dcMulheres) - 4.50) * 100).toFixed(1)

const classHomens = computed(() => {

    if (percGHomens >= 5 && percGHomens <= 14.9) {
        return 'Normal';
    } else if (percGHomens >= 15 && percGHomens <= 19.9) {
        return 'Sobrepeso';
    } else if (percGHomens >= 20 && percGHomens <= 24.9) {
        return 'Obesidade Moderada';
    } else if (percGHomens >= 25 && percGHomens <= 29.9) {
        return 'Obesidade Elevada';
    } else if (percGHomens > 29.9) {
        return 'Obesidade Mórbida';
    } else {
        return 'Digite os valores certo para saber seu %G!!'
    }

})

const classMulheres = computed(() => {

    if (percGMulheres >= 10 && percGMulheres <= 24.9) {
        return 'Normal';
    } else if (percGMulheres >= 25 && percGMulheres <= 29.9) {
        return 'Sobrepeso';
    } else if (percGMulheres >= 30 && percGMulheres <= 34.9) {
        return 'Obesidade Moderada';
    } else if (percGMulheres >= 35 && percGMulheres <= 39.9) {
        return 'Obesidade Elevada';
    } else if (percGMulheres > 39.9) {
        return 'Obesidade Mórbida';
    } else {
        return 'Digite os valores certo para saber seu %G!!'
    }

})

const percentualFat = computed(() => {
    if (sexo === "feminino") {
        return percGMulheres
    } return percGHomens
})

const classify = computed(() => {
    if (sexo === "feminino") {
        return classMulheres.value
    } return classHomens.value
})

const divOne = ref(true);
const divTwo = ref(false);
const divTree = ref(false);
const divAplicar = ref(true);
const divAplicarTwo = ref(false);
const divAplicarTree = ref(false);
const divInfoPercentual = ref(false)

function infoPercentual() {
    divInfoPercentual.value = !divInfoPercentual.value
}

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
                        <h4>MASSA</h4>
                        <Icon name="fa6-solid:weight-scale" />
                        <h4>
                            {{ peso }} kg
                        </h4>
                    </div>
                    <div>
                        <h4>ALTURA</h4>
                        <Icon name="pixelarticons:human-height" />
                        <h4>
                            {{ altura }} m
                        </h4>
                    </div>


                </div>
                <div class="main-div-tree">


                    <div>
                        <h2>IMC</h2>
                        <h3>
                            {{ calcIMC }}
                        </h3>
                        <h3>
                            {{ resClassIMC }}
                            <Icon @click="infoIMC" name="material-symbols:info-outline-rounded" size="14" />
                        </h3>
                    </div>


                </div>

                <div class="main-div-tree-info">

                    <div v-if="divInfoIMC">
                        <table>
                            <tr>
                                <th>
                                    Classificação
                                </th>

                                <th>

                                    IMC (kgm²)
                                </th>
                                <th>
                                    Risco de <br> Co-morbidades
                                </th>
                            </tr>
                            <tr>

                                <td>
                                    Baixo Peso
                                </td>
                                <td>
                                    &lt; 18.5
                                </td>
                                <td>
                                    Baixo
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Normal
                                </td>
                                <td>
                                    18.5 - 24.9
                                </td>
                                <td>
                                    Ausente
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Sobrepeso
                                </td>
                                <td>
                                    25.0 - 29.9
                                </td>
                                <td>
                                    Aumentado
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Obesidade classe 1
                                </td>
                                <td>
                                    30.0 - 34.9
                                </td>
                                <td>
                                    Moderado
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Obesidade classe 2
                                </td>
                                <td>
                                    35.0 - 39.9
                                </td>
                                <td>
                                    Severo
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Obesidade classe 3
                                </td>
                                <td>
                                    &ge; 40.0
                                </td>
                                <td>
                                    Muito Severo
                                </td>
                            </tr>
                        </table>
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
                            {{ data.data.value.ombro }} cm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Pescoço:</h3>
                        <h4>
                            {{ data.data.value.pescoco }} cm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">

                    <div>
                        <h3>Tórax:</h3>
                        <h4>
                            {{ data.data.value.torax }} cm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Tórax Contraído:</h3>
                        <h4>
                            {{ data.data.value.toraxContraido }} cm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Tórax expirado:</h3>
                        <h4>
                            {{ data.data.value.toraxRelaxado }} cm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Cintura:</h3>
                        <h4>
                            {{ data.data.value.cintura }} cm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Quadril:</h3>
                        <h4>
                            {{ data.data.value.quadril }} cm
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
                            {{ data.data.value.bracoEsquerdoRelaxado }} cm
                        </h4>
                        <h4>
                            {{ data.data.value.bracoDireitoRelaxado }} cm
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
                            {{ data.data.value.bracoEsquerdoContraido }} cm
                        </h4>
                        <h4>
                            {{ data.data.value.bracoDireitoContraido }} cm
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
                            {{ data.data.value.antebracoEsquerdo }} cm
                        </h4>
                        <h4>
                            {{ data.data.value.antebracoDireito }} cm
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
                            {{ data.data.value.coxaMedialEsquerda }} cm
                        </h4>
                        <h4>
                            {{ data.data.value.coxaMedialDireita }} cm
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
                            {{ data.data.value.coxaDistalEsquerda }} cm
                        </h4>
                        <h4>
                            {{ data.data.value.coxaDistalDireita }} cm
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
                            {{ data.data.value.pernaEsquerda }} cm
                        </h4>
                        <h4>
                            {{ data.data.value.pernaDireita }} cm
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
                            {{ percentualFat }}
                        </h3>
                        <h3>
                            {{ classify }}
                            <Icon @click="infoPercentual" name="material-symbols:info-outline-rounded" size="14" />
                        </h3>
                    </div>

                </div>
                <div class="main-div-tree-info">

                    <div v-if="divInfoPercentual">
                        <table>
                            <tr>
                                <th>
                                    Classificação
                                </th>

                                <th>
                                    Mulheres
                                </th>
                                <th>
                                    Homens
                                </th>
                            </tr>
                            <tr>

                                <td>
                                    Normal
                                </td>
                                <td>
                                    10.0 - 24.9
                                </td>
                                <td>
                                    5.0 - 14.9
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Sobrepeso
                                </td>
                                <td>
                                    25.0 - 29.9
                                </td>
                                <td>
                                    15.0 - 19.9
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Obesidade Moderada
                                </td>
                                <td>
                                    30.0 - 34.9
                                </td>
                                <td>
                                    20.0 - 24.9
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Obesidade Elevada
                                </td>
                                <td>
                                    35.0 - 39.9
                                </td>
                                <td>
                                    25.0 - 29.9
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Obesidade Mórbida
                                </td>
                                <td>
                                    > 39.9
                                </td>
                                <td>
                                    > 29.9
                                </td>
                            </tr>
                        </table>
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
                        <h3>Tórax:</h3>
                        <h4>
                            {{ data.data.value.dtorax }} mm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Tricipital:</h3>
                        <h4>
                            {{ data.data.value.tricipital }} mm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Subescapular:</h3>
                        <h4>
                            {{ data.data.value.subEscapular }} mm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">

                    <div>
                        <h3>Axilar Média:</h3>
                        <h4>
                            {{ data.data.value.axilarMedia }} mm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Abdominal:</h3>
                        <h4>
                            {{ data.data.value.abdominal }} mm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Supra-espinhal:</h3>
                        <h4>
                            {{ data.data.value.supraEspinhal }} mm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Coxa medial:</h3>
                        <h4>
                            {{ data.data.value.coxa }} mm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Perna:</h3>
                        <h4>
                            {{ data.data.value.perna }} mm
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
                            {{ data.data.value.umero }} mm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Punho:</h3>
                        <h4>
                            {{ data.data.value.punho }} mm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Fêmur:</h3>
                        <h4>
                            {{ data.data.value.femur }} mm
                        </h4>
                    </div>

                </div>
                <div class="main-div-five">


                    <div>
                        <h3>Tornozelo:</h3>
                        <h4>
                            {{ data.data.value.tornozelo }} mm
                        </h4>
                    </div>

                </div>
                <br>
                <br>
            </div>
            <div v-else-if="divTree" class="squareRes">
                <div class="main-div-tree">


                    <div>
                        <h2>Flexões de braços</h2>
                        <h3>
                            {{ data.data.value.flexaoBraco }}
                        </h3>
                    </div>
                    <div>
                        <h2>Abdominais</h2>
                        <h3>
                            {{ data.data.value.flexaoAbdominal }}
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

table {
    margin: 0;
}

th,
td {
    margin: 0 3px;
    padding: 0 7px;
    text-align: center;
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
    margin-top: 100px
}

.main-div-one {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
}

.main-div-one:nth-child(1) {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: left;
    margin: 0 0 10px 0;
    margin-top: 50px;
}

.main-div-one:nth-child(2) {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: left;
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

.main-div-tree-info {
    margin: 0px auto 20px auto;
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

.main-div-five div {
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

.main-div-six div {
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

.main-div-seven div {
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
    width: 25%;
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