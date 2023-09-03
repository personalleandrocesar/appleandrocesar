<script setup>
const layout = "hello"
import { ref } from 'vue'
const name = ref(0)

const { data, pending, error } = await useFetch(() => `/api/${name.value}`)
</script>


<template>
  <NuxtLayout :name="layout">

    
    <div class="main">
      
      <div class="main-div-one">
        
        <div class="square">
          
        </div>  
        
        <div class="square">
          
          
          
        </div>  
        
        <div class="square">
          
          
          
        </div>  
        
      </div>
      <div>
            <p v-if="pending">Carregando...</p>
            <pre v-else>
              {{ data.nome }}
              {{ data.idade }}
              {{ data.nome }}
              
          </pre>
            <p><button @click="name--">Previous</button> - <button @click="name++">Next</button></p>
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
  background-color: #095D6270;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 1;
  backdrop-filter: blur(25px);
  height: 15px;
  width: 100%;
  margin: 20px 10px;
  border-radius: 20px;
}

</style>