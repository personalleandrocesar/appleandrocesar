<script setup>
import { computed } from 'vue'
const layout = "valuation"
const route = useRoute()

const data = await useFetch(`https://m.leandrocesar.com/api/${route.params.id}/avaliacao/atual`)

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

const percentualFat = computed(() => {
    if (sexo === "feminino") {
        return percGMulheres
    } return percGHomens
})

</script>

<template>
    <NuxtLayout :name="layout">
            <div v-if="data.data.value.data">

            <div  class="main-div-two">
                <h3>
                    <Icon name='jam:medical' /> AVALIAÇÕES
                </h3>
                <nuxt-link class="square" :to="`/user/${route.params.id}/avaliacao/atual`">



                    <div>
                        <h4>
                            <Icon name='material-symbols:event' />
                        </h4>
                        <h4>
                            {{ data.data.value.data }}
                        </h4>
                    </div>

                    <div>
                        <h3>
                        </h3>

                        <h4>
                            <Icon name="fa6-solid:weight-scale" />
                        </h4>
                        <h4>
                               {{ data.data.value.massa }} kg
                            </h4>

                    </div>
                    <div>
                        <h3>
                        </h3>

                        <h4 style="font-weight: 900;color: #095D62; zoom: 1.8; margin-bottom: -5px;">
                                %G
                            </h4>
                    <!--
                      // antigo ícone!
                         <h4>
                            <Icon name="material-symbols:body-fat-rounded" />
                        </h4>
                    --> 
                            <h4>
                               {{ percentualFat }} %
                            </h4>

                    </div>
                </nuxt-link>
            </div>
                        </div>

            <div v-else>
            <div class="main-div-tree">
                <h3>
                        <Icon name='jam:medical' /> AVALIAÇÕES
                    </h3>
                
                <a href="https://cal.com/leandrocesar/personal" target="_blank" class="square">
    
    
    
                    <div>
                        <h4>
                            <Icon name='material-symbols:event' />
                        </h4>
                        <h4>
                            Clique aqui e agende sua Avaliação!!
                        </h4>
                    </div>
    
                </a>
            </div>
            </div>
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
    margin-top: 110px;
}

.main-div-one {
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.main-div-two {
    margin-top: 100px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
}

.main-div-two .icon {
    color: #095D62;
}

.square {
    color: #555;
    background-color: #095D6220;
    backdrop-filter: blur(5px);
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 99%;
    margin: 10px auto;
    border-radius: 20px;
    border: .1px solid #05959c20;
    border-right: 6px solid #05959c80;
    line-height: 1.4;
    transition: all .4s;
}

.square:hover {
    background-color: #095D6230;
    border-right: 6px solid #05959c;

}

.square div:nth-child(1) {
    padding-right: 20px;

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
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

.main-div-two h4 .icon {
    margin-left: 1px;
}

.main-div-two div .icon {
    margin-top: 0px;
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

.main-div-tree {
    margin-top: 100px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
}

.main-div-tree H3 {
    margin-left: 20px;

}

.main-div-tree .icon {
    color: #095D62;
}

.main-div-tree h4 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.main-div-tree a div {
    margin: auto;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-div-tree h4 .icon {
    margin-left: 1px;
}

.main-div-tree div .icon {
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.square:hover {
    background-color: #095D6230;
    border-right: 6px solid #05959c;

}


</style>