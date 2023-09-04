<script setup>
const layout = "hello"
</script>

<template>
  <NuxtLayout :name="layout">
    <div class="main">
          
        <div class="main-div-one">
            
            <div class="conf">
              <Icon name="fluent:target-arrow-16-filled"/> 
              <h3>
                Definição 
              </h3>
                
            </div>  
            <div class="conf">
              <Icon name="material-symbols:timer-rounded"/> 
              <h3>
                60 minutos 
              </h3>
                
            </div>  
            <div class="conf">
              <Icon name="mdi:calendar-weekend"/> 
              <h3>
                6 dias
              </h3>
                
            </div>  
            

      </div>
          
      <div class="main-div-two">
            <h3>
               <Icon name='material-symbols:exercise' /> TREINOS 
            </h3>
        <nuxt-link class="square" to="/camilla-figueiredo/treino/a">
          <h4>
            <Icon name='material-symbols:exercise' /> TREINO
          </h4>
           <Icon name='mdi:alpha-a' />
        </nuxt-link>
        <nuxt-link class="square" to="/camilla-figueiredo/treino/b">
          <h4>
           <Icon name='material-symbols:exercise' /> TREINO
          </h4>
           <Icon name='mdi:alpha-b' />
        </nuxt-link>
            
        <nuxt-link class="square" to="/camilla-figueiredo/treino/c">
          <h4>
            <Icon name='material-symbols:exercise' /> TREINO
          </h4>
           <Icon name='mdi:alpha-c' />
        </nuxt-link>
            
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

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
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
}
.main-div-two .icon {
  color: #095D62;
}
.main-div-two H3 {
margin-left: 10PX;
}

.icon{
  zoom: 1.4;
  color: #fadb41;
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
}
.square {  
  color:#000;
  height: 100px;
  background-color: #095D6220;
    backdrop-filter: blur(15px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: .5;
  backdrop-filter: blur(5px);
  width: 90%;
  margin: 20px auto;
  border-radius: 20px;
}

</style>