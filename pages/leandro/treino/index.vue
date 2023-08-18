<script setup>
const layout = "hello"
const { data } = await useFetch('https://m.leandrocesar.com/api/leandro-cesar')
</script>

<template>
  <NuxtLayout :name="layout">

    <div class="main">

      <div class="main-div-one">
          
        <div class="square">
          <span>{{ data.nome }}</span>

        </div>  
      
        <div class="square">
          
          

        </div>  
        
        <div class="square">
          
          
          
        </div>  
      
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

.square {  
  color:#e1a918;
  background-color: #fadb4140;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 1;
  backdrop-filter: blur(25px);
  height: 60px;
  width: 70px;
  margin: 20px 10px;
  border-radius: 20px;
}

</style>