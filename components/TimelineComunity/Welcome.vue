<script setup>
const route = useRoute()

const reg = route.params.id
const logon = useCookie('logon')
// const logon = useCookie('logon', { maxAge: 4800})
logon.value = reg

const dataConf = await useFetch(`/api/${route.params.id}`)
const status = dataConf.data.value?.status
const photoOpen = ref(false);

// talvez não precise do código abaixo
const logOff = () => {
  logon.value = null
}

const tag = useCookie('tag')
tag.value = tag.value


const bodyOne = ref(true)
function menu() {
  bodyOne.value = !bodyOne.value
  
}

const deep = ref(true)
const mainDeep = ref(true)
const isa = ref(false)

function openDeep() {
  deep.value = true
  isa.value = false
  mainDeep.value = true
}
function openIsa() {
  deep.value = false
  isa.value = true
  mainDeep.value = false
}

const teste = useCookie('teste')
teste.value = 0

console.log(teste.value);
</script>

<template>
  <div>

    <img @click="openDeep()" :class="{ logoDeep: deep }"   src="~/assets/MyLogoBold.jpg" alt="Foto de perfil do Personal Leandro Cesar.">
    <img @click="openIsa()" :class="{ logoIsa: isa }" src="~/assets/isa-arquitetura.png" alt="Foto de perfil do Personal Leandro Cesar.">  
    
  </div>

  <div class="content" v-if="mainDeep">
    <TimelineComunityDeep/>
  </div>
  <div class="content" v-else>
    <TimelineComunityIsa/>
  </div>
    
</template>
<style scoped>
div {
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--color-text);

}
.content {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-text);

}

img {
  background-color: #edf2f7;
  height: 80px;
  width: 80px;
  color: #718096;
  box-shadow: 1px 7px 20px #718096;
  margin: 1.5rem;
  border-radius: 7px;
  z-index: 10;
  filter: contrast(40%);
  transition: all .4s linear;
  cursor: pointer;
}
img:hover {
  filter: contrast(100%);
  box-shadow: 1px 7px 20px #434a53;
}

.logoDeep {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: #edf2f7;
    height: 80px;
    width: 80px;
    color: #718096;
    box-shadow: 1px 7px 20px #ff1900;
    border-radius: 7px;
    filter: grayscale(0%);
    z-index: 10;
}
.logoDeep:hover {
    color: #718096;
    box-shadow: 1px 7px 20px #ff1900;
    filter: grayscale(0%);
  }
  
  .logoIsa {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: #edf2f7;
    height: 80px;
    width: 80px;
    color: #718096;
    box-shadow: 1px 7px 20px #99bca6;
    border-radius: 7px;
    z-index: 10;
    filter: grayscale(0%);
  }
  .logoIsa:hover {
    color: #718096;
    box-shadow: 1px 7px 20px #99bca6;
    filter: grayscale(0%);
    
}


</style>