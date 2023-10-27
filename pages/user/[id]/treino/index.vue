<script setup>
import { ref, computed } from 'vue'
const layout = "hello"
const route = useRoute()

const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}


const dataConf = await useFetch(`/api/${route.params.id}`)
</script>

<template>
      <NuxtLayout :name="layout">
    
        


      <div class="main-div-two">
        <h3>
              <Icon name='material-symbols:exercise' /> TREINOS 
            </h3>
        <nuxt-link v-if="dataConf.data.value.treinoA" class="square" :to="`/user/${route.params.id}/treino/a`">
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
              <h4>
                {{ dataConf.data.value.treinoA }}
              </h4>

            </div>
          </nuxt-link>

          
        <nuxt-link v-if="dataConf.data.value.treinoB" class="square" :to="`/user/${route.params.id}/treino/b`">
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
                <h4>
                  {{ dataConf.data.value.treinoB }}
                </h4>

              </div>
        </nuxt-link>
            
        <nuxt-link v-if="dataConf.data.value.treinoC" class="square" :to="`/user/${route.params.id}/treino/c`">
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
                <h4>
                  {{ dataConf.data.value.treinoC }}
                </h4>

              </div>
        </nuxt-link>
            
      </div>
<br>


</NuxtLayout>
  <NavBottom/>
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
    color:#fff;
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
  margin: 170px 0;
  align-items: left;
}
.main-div-two .icon {
  color: #095D62;
}

.square {  
  color:#555;
  background-color: #095D6220;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 99%;
  margin: 3px auto;
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
  padding-right: 12px;

}

.square div:nth-child(2), .square div:nth-child(3){
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