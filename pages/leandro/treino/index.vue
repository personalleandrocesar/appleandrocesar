<script setup>
const layout = "hello"
</script>

<template>
  <NuxtLayout :name="layout">
    <div class="main">
          
      <div class="main-div-one">
            
        <nuxt-link class="square" to="/leandro/treino/a">
          <h4>TREINO</h4>
          <br>
          <br>
          <br>
           <Icon name='mdi:alpha-a' />
        </nuxt-link>
        <nuxt-link class="square" to="/leandro/treino/b">
          <h4>TREINO</h4>
          <br>
          <br>
          <br>
           <Icon name='mdi:alpha-b' />
        </nuxt-link>
            
      </div>

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

.icon{
  zoom: 1.4;
}

.square {  
  color:#000;
  background-color: #095D6220;
    backdrop-filter: blur(15px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: .5;
  backdrop-filter: blur(5px);
  width: 100%;
  margin: 20px 10px;
  border-radius: 20px;
}

</style>